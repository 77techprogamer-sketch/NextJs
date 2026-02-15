import { NextRequest, NextResponse } from 'next/server';

// Declare global type for cache
declare global {
    var locationCache: Map<string, { timestamp: number; data: any; }>;
}

export async function GET(request: NextRequest) {
    // 1. Check Vercel Geolocation Headers (Available in Production/Preview)
    const vCity = request.headers.get('x-vercel-ip-city');
    const vRegion = request.headers.get('x-vercel-ip-country-region');
    const vCountry = request.headers.get('x-vercel-ip-country');

    if (vCity && vCountry) {
        return NextResponse.json({
            ip: request.headers.get('x-forwarded-for') || '127.0.0.1',
            city: decodeURIComponent(vCity),
            region: vRegion ? decodeURIComponent(vRegion) : '',
            country_name: vCountry === 'IN' ? 'India' : vCountry, // Simple mapping
            country_code: vCountry,
            org: 'Vercel Edge Network'
        });
    }

    // 2. Fallback for Local Development (ipapi.co)
    const forwardedFor = request.headers.get('x-forwarded-for');
    let ip = forwardedFor ? forwardedFor.split(',')[0] : null;

    // Handle localhost IPv6 loopback
    if (ip === '::1') {
        ip = null;
    }

    // If we have a query user_ip, use that (optional)
    const { searchParams } = new URL(request.url);
    const queryIp = searchParams.get('ip');

    // Basic IP validation (IPv4 or IPv6) to prevent SSRF
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

    if (queryIp && ipRegex.test(queryIp)) {
        ip = queryIp;
    }

    // Note: In production, use Redis or similar. This is per-instance.
    if (globalThis.locationCache && globalThis.locationCache.has(ip || 'default')) {
        const cached = globalThis.locationCache.get(ip || 'default');
        if (cached && Date.now() - cached.timestamp < 3600000) { // 1 hour cache
            return NextResponse.json(cached.data);
        }
    }

    const apiUrl = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'InsuranceSupportApp/1.0'
            }
        });

        if (!response.ok) {
            // Return cached data if available even if expired, as fallback
            if (globalThis.locationCache && globalThis.locationCache.has(ip || 'default')) {
                const cached = globalThis.locationCache.get(ip || 'default');
                if (cached) {
                    return NextResponse.json(cached.data);
                }
            }
            // Hardcoded fallback logic for development
            console.warn('API rate limit hit or error, using fallback location.');
            return NextResponse.json({
                ip: '127.0.0.1',
                city: 'Bangalore',
                region: 'Karnataka',
                country_name: 'India',
                country_code: 'IN',
                org: 'Fallback ISP'
            });
        }

        const data = await response.json();

        // Save to cache
        if (!globalThis.locationCache) {
            globalThis.locationCache = new Map();
        }
        globalThis.locationCache.set(ip || 'default', {
            timestamp: Date.now(),
            data: data
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching location:', error);
        // Fallback on network error too
        return NextResponse.json({
            ip: '127.0.0.1',
            city: 'Bangalore',
            region: 'Karnataka',
            country_name: 'India',
            country_code: 'IN',
            org: 'Fallback ISP (Error)'
        });
    }
}
