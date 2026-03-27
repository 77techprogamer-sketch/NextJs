import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';
import { cityData } from '@/data/cityData';

// Layer 2 DDoS Protection: Simple in-memory rate limiting map (per edge isolate)
const ipMap = new Map<string, { count: number; startTime: number }>();

export async function middleware(request: NextRequest, event: NextFetchEvent) {
    // 1. Skip if internal Next.js request or specific asset files that don't need redirection logic
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api') ||
        /\.(png|jpg|jpeg|gif|webp|svg|ico|css|js)$/.test(request.nextUrl.pathname)
    ) {
        return NextResponse.next();
    }

    // 2. Enforce HTTPS (Production only) & Canonical Domain
    if (process.env.NODE_ENV === 'production') {
        const proto = request.headers.get('x-forwarded-proto');
        const host = request.headers.get('host');
        let shouldRedirect = false;
        const newUrl = new URL(request.url);

        // Redirect www to non-www
        if (host?.startsWith('www.')) {
            newUrl.host = host.replace('www.', '');
            shouldRedirect = true;
        }

        // Enforce HTTPS
        if (proto && proto === 'http') {
            newUrl.protocol = 'https:';
            shouldRedirect = true;
        }

        if (shouldRedirect) {
            return NextResponse.redirect(newUrl, 301);
        }
    }

    // 3. Get IP
    const ip = request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1';

    // 4. Bot Detection (Needed for rate limiting and security exemptions)
    const userAgent = request.headers.get('user-agent') || '';
    const isBot = /googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|Google-InspectionTool|Storebot-Google|Lighthouse|IndexNow/i.test(userAgent);

    // 4.5. Layer 2 DDoS Protection: Rate Limiting
    const currentTime = Date.now();
    const rateData = ipMap.get(ip) || { count: 0, startTime: currentTime };
    const RATE_LIMIT_WINDOW_MS = 10 * 1000; // 10 seconds
    const RATE_LIMIT_MAX_REQUESTS = 20;

    if (currentTime - rateData.startTime > RATE_LIMIT_WINDOW_MS) {
        rateData.count = 1;
        rateData.startTime = currentTime;
    } else {
        rateData.count++;
    }

    ipMap.set(ip, rateData);

    // Basic memory management to prevent memory leaks in the Map
    if (ipMap.size > 10000) {
        ipMap.clear();
    }

    // Skip rate limiting for verified bots to prevent GSC Indexing issues
    if (rateData.count > RATE_LIMIT_MAX_REQUESTS && !isBot) {
        console.warn(`[DDoS Protection] Blocked IP: ${ip} for exceeding rate limit (${rateData.count} requests)`);
        return new NextResponse(
            JSON.stringify({ error: "Too many requests. Please try again later." }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // 5. Check IP Reputation (stopforumspam)
    try {
        // Only check in production or if needed. We skip localhost mostly in dev.
        // Check for bots (Googlebot, Bingbot, etc.) to avoid blocking them via IP check
        if (process.env.NODE_ENV === 'production' && !isBot && ip !== '127.0.0.1' && ip !== '::1') {
            const sfsResponse = await fetch(`https://api.stopforumspam.org/api?ip=${ip}&json`);
            const data = await sfsResponse.json();

            if (data.success && data.ip) {
                const { appears, frequency, confidence } = data.ip;
                const SEVERE_THRESHOLD = 5;
                const IS_SEVERE = appears && (frequency > SEVERE_THRESHOLD || confidence > 90);

                if (IS_SEVERE) {
                    console.warn(`[Security] IP ${ip} blocked via Middleware (freq: ${frequency}, conf: ${confidence}%)`);
                    return NextResponse.redirect(new URL('/blocked', request.url));
                }
            }
        }
    } catch (error) {
        // Fail open: If the API fails, allow the request to proceed
        console.error('Middleware Security Check Failed:', error);
    }

    // 6. IP-Based Location detection for Homepage
    // NOTE: All visitor logging is handled client-side by VisitorCounter.tsx
    // with built-in bot filtering and 24h deduplication. No server-side logging here
    // to prevent double-counting.
    if (request.nextUrl.pathname === '/') {
        // The display logic in HomeClient.tsx will dynamically show the local city.
        // No server-side visitor log call needed here.
    }

    // 7. Geolocation-based Routing and Client Cookies
    const vCountry = request.headers.get('x-vercel-ip-country') || '';
    const isIndia = vCountry === 'IN';
    
    const currentCityRaw = request.headers.get('x-vercel-ip-city') || '';
    const currentCity = currentCityRaw ? decodeURIComponent(currentCityRaw).trim().toLowerCase() : '';

    let response = NextResponse.next();
    
    // Pass bot status to client to prevent client-side logging for bots
    if (isBot) {
        response.headers.set('x-is-bot', 'true');
        // Also set a short-lived cookie for easier client-side access if needed
        response.cookies.set('is-bot', 'true', { maxAge: 3600, path: '/' });
    }

    if (isIndia) {
        let allowedCities: string[] = [];
        if (currentCity) {
            allowedCities = Object.keys(cityData).filter(slug => {
                if (slug === currentCity) return true;
                const city = cityData[slug];
                if (city.nearbyCities?.includes(currentCity)) return true;
                const userCityData = cityData[currentCity];
                if (userCityData?.nearbyCities?.includes(slug)) return true;
                return false;
            });
        }

        // Restrict access to /locations/...
        const match = request.nextUrl.pathname.match(/^\/locations\/([^/]+)/);
        if (match) {
            const targetCity = match[1].toLowerCase();
            // Allow if targetCity is in allowedCities, or if we couldn't determine their city (currentCity is empty)
            if (currentCity && !allowedCities.includes(targetCity)) {
                return NextResponse.redirect(new URL('/', request.url));
            }
        }

        // Pass the geo information to the frontend via cookies
        if (currentCity) {
            const cookieVal = allowedCities.length > 0 ? allowedCities.join(',') : 'NONE';
            response.cookies.set('user-allowed-cities', cookieVal, { path: '/', maxAge: 86400 * 30 });
        }
        response.cookies.set('user-geo-country', 'IN', { path: '/', maxAge: 86400 * 30 });
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|71a80a3568ae5d1d945fda3ef57fe18e.txt|fbed68329c17dcd9.html).*)',
    ],
};
