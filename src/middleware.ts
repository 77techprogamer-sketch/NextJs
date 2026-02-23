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

    // 3.5. Layer 2 DDoS Protection: Rate Limiting
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

    if (rateData.count > RATE_LIMIT_MAX_REQUESTS) {
        console.warn(`[DDoS Protection] Blocked IP: ${ip} for exceeding rate limit (${rateData.count} requests)`);
        return new NextResponse(
            JSON.stringify({ error: "Too many requests. Please try again later." }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // 4. Check IP Reputation (stopforumspam)
    try {
        // Only check in production or if needed. We skip localhost mostly in dev.
        // Check for bots (Googlebot, Bingbot, etc.) to avoid blocking them via IP check
        const userAgent = request.headers.get('user-agent') || '';
        const isBot = /googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|Google-InspectionTool|Storebot-Google|Lighthouse|IndexNow/i.test(userAgent);

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

    // 5. IP-Based Location Logging for Homepage (No longer redirecting to fix GSC Indexing)
    if (request.nextUrl.pathname === '/') {
        const vCity = request.headers.get('x-vercel-ip-city');
        const cityName = vCity ? decodeURIComponent(vCity).trim().toLowerCase() : null;

        let matchedSlug: string | null = null;
        if (cityName) {
            // Find a city match ignoring case
            matchedSlug = Object.keys(cityData).find(
                slug => cityData[slug].name.toLowerCase() === cityName || slug === cityName
            ) || null;
        }

        if (!matchedSlug && cityName) {
            // City doesn't exist in our DB. Log the missing city for future expansion.
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://idzvdeemgxhwlkyphnel.supabase.co';
            const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkenZkZWVtZ3hod2xreXBobmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNjU1NDAsImV4cCI6MjA3NzY0MTU0MH0.q11DxU-2I9KKzdb-pEBXM73_yLnqYuRSElie831uB6w';

            // Fire and forget using event.waitUntil so edge doesn't block the request
            event.waitUntil(
                fetch(`${supabaseUrl}/functions/v1/log-visitor`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`
                    },
                    body: JSON.stringify({
                        ip_address: ip,
                        city: decodeURIComponent(vCity as string),
                        note: 'MISSED_LOCATION_REDIRECT',
                        region: request.headers.get('x-vercel-ip-country-region'),
                        country: request.headers.get('x-vercel-ip-country')
                    })
                }).catch(error => console.error("Failed to log missed location:", error))
            );
        }

        // We now ALLOW the request to proceed to the homepage (status 200) instead of redirecting
        // This is crucial for Google Search Console (GSC) to verify HTTPS and index the root domain.
        // The display logic in HomeClient.tsx will still dynamically show the local city.
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|71a80a3568ae5d1d945fda3ef57fe18e.txt).*)',
    ],
};
