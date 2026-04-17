import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';
import { cityData } from '@/data/cityData';
import { INDIAN_LOCATIONS } from '@/data/indianCities';
import { serviceLabels } from '@/data/services';

// Pre-compute lookup maps for legacy location redirects (SEO Optimization)
const CITY_TO_STATE = new Map(INDIAN_LOCATIONS.map(l => [l.city, l.state]));
const ALL_STATES = new Set(INDIAN_LOCATIONS.map(l => l.state));
const ALL_SERVICES = new Set(Object.keys(serviceLabels));


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

    // 2.5. Locale Sub-path Detection (e.g., /hi/about -> /about with locale context)
    const SUPPORTED_LANGS = ['hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa']; 
    const pathname = request.nextUrl.pathname;
    const pathnameParts = pathname.split('/');
    const firstSegment = pathnameParts[1];
    
    let localeInPath: string | null = null;
    let rewrittenUrl: URL | null = null;

    if (SUPPORTED_LANGS.includes(firstSegment)) {
        localeInPath = firstSegment;
        // Construct the internal rewrite URL (removing the locale prefix)
        const newPathname = '/' + pathnameParts.slice(2).join('/');
        rewrittenUrl = new URL(newPathname || '/', request.url);
        // Preserve search params
        request.nextUrl.searchParams.forEach((value, key) => {
            rewrittenUrl?.searchParams.set(key, value);
        });
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

    // Initialize response (either as a rewrite or standard next())
    let response = rewrittenUrl 
        ? NextResponse.rewrite(rewrittenUrl) 
        : NextResponse.next();
    
    // If we're on a localized path, signal the locale to the server components
    if (localeInPath) {
        response.headers.set('x-next-locale', localeInPath);
        // Persist for future visits (even if they go back to root domain)
        response.cookies.set('i18nextLng', localeInPath, { path: '/', maxAge: 86400 * 365 });
    }

    // 6. Legacy Location Redirects (SEO: Consolidate 1/2-segment URLs to 3-segment hierarchy)
    const effectivePathname = localeInPath ? '/' + pathnameParts.slice(2).join('/') : pathname;
    const effectiveParts = effectivePathname.split('/');
    
    if (effectiveParts[1] === 'locations') {
        let targetPath = null;
        
        // Handle /locations/[city] -> /locations/[state]/[city]
        if (effectiveParts.length === 3) {
            const city = effectiveParts[2];
            const state = CITY_TO_STATE.get(city);
            // Only redirect if it's a city and NOT already a state hub
            if (state && !ALL_STATES.has(city)) {
                targetPath = `/locations/${state}/${city}`;
            }
        } 
        // Handle /locations/[city]/[service] -> /locations/[state]/[city]/[service]
        // or /locations/[state]/[service] -> /locations/[state]/[city-default]/[service]
        else if (effectiveParts.length === 4) {
            const slug1 = effectiveParts[2];
            const slug2 = effectiveParts[3];
            
            const stateForSlug1 = CITY_TO_STATE.get(slug1);
            const isServiceForSlug2 = ALL_SERVICES.has(slug2);
            
            if (stateForSlug1 && isServiceForSlug2) {
                // It's [city]/[service] -> should be [state]/[city]/[service]
                targetPath = `/locations/${stateForSlug1}/${slug1}/${slug2}`;
            }
        }

        if (targetPath) {
            const redirectUrl = new URL(localeInPath ? `/${localeInPath}${targetPath}` : targetPath, request.url);
            // Preserve query parameters
            request.nextUrl.searchParams.forEach((v, k) => redirectUrl.searchParams.set(k, v));
            return NextResponse.redirect(redirectUrl, 301);
        }
    }
    
    // Pass bot status to client to prevent client-side logging for bots
    if (isBot) {
        response.headers.set('x-is-bot', 'true');
        // Also set a short-lived cookie for easier client-side access if needed
        response.cookies.set('is-bot', 'true', { maxAge: 3600, path: '/' });
    }

    if (isIndia && !isBot) {
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
