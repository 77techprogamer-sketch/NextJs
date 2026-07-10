import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
// State to Language Code Mapping
const REGION_TO_LANG: Record<string, string> = {
    // Full Names (from ipapi.co)
    'Maharashtra': 'mr', 'Karnataka': 'kn', 'Tamil Nadu': 'ta', 'Andhra Pradesh': 'te',
    'Telangana': 'te', 'West Bengal': 'bn', 'Gujarat': 'gu', 'Kerala': 'ml', 'Punjab': 'pa',
    'Delhi': 'hi', 'Uttar Pradesh': 'hi', 'Madhya Pradesh': 'hi', 'Haryana': 'hi',
    'Rajasthan': 'hi', 'Bihar': 'hi', 'Jharkhand': 'hi', 'Chhattisgarh': 'hi',
    'Himachal Pradesh': 'hi', 'Uttarakhand': 'hi',
    // ISO 3166-2 Codes (from Vercel headers)
    'MH': 'mr', 'KA': 'kn', 'TN': 'ta', 'AP': 'te',
    'TG': 'te', 'WB': 'bn', 'GJ': 'gu', 'KL': 'ml', 'PB': 'pa',
    'DL': 'hi', 'UP': 'hi', 'MP': 'hi', 'HR': 'hi',
    'RJ': 'hi', 'BR': 'hi', 'JH': 'hi', 'CT': 'hi', 'CG': 'hi', // CT/CG for Chhattisgarh
    'HP': 'hi', 'UT': 'hi', 'UK': 'hi', // UT/UK for Uttarakhand
};

declare global {
    var locationCache: Map<string, { timestamp: number; data: any; }>;
}

export async function GET(request: NextRequest) {
    // 0. Security: Basic SSRF protection - block obviously malicious requests
    const host = request.headers.get('host') || request.headers.get('x-forwarded-host') || '';
    const isLocalhost = process.env.NODE_ENV === 'development';
    const isAllowed = isLocalhost || host.includes('insurancesupport.online') || host.includes('localhost') || host.includes('127.0.0.1');
    
    if (!isAllowed) {
        console.warn(`[Security] Blocked /api/location from host: ${host}`);
        return NextResponse.json({ city: null, country_code: 'IN', detected_lang: null });
    }

    // 1. Check Geolocation Headers (Vercel or Cloudflare Pages)
    const vCity = request.headers.get('x-vercel-ip-city') || request.headers.get('cf-ipcity');
    const vRegion = request.headers.get('x-vercel-ip-country-region') || request.headers.get('cf-region');
    const vCountry = request.headers.get('x-vercel-ip-country') || request.headers.get('cf-ipcountry');

    if (vCity && vCountry) {
        // Cloudflare Pages uses 'cf-ipcountry' header
        // Vercel headers give us city/country but NOT ISP/org.
        // Use the real client IP to look up the ISP from ipapi.co separately.
        const clientIp = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || null;
        let asn: string | null = null;
        let isp_name: string | null = null;

        if (clientIp && clientIp !== '::1') {
            try {
                const ispRes = await fetch(`https://ipapi.co/${clientIp}/json/`, {
                    headers: { 'User-Agent': 'InsuranceSupportApp/1.0' },
                    signal: AbortSignal.timeout(3000), // 3-second timeout so it doesn't slow the page
                });
                if (ispRes.ok) {
                    const ispData = await ispRes.json();
                    // ipapi.co returns org as e.g. "AS12345 Jio Broadband Services"
                    const orgRaw: string | null = ispData.org || null;
                    if (orgRaw) {
                        const spaceIdx = orgRaw.indexOf(' ');
                        if (spaceIdx > -1 && orgRaw.startsWith('AS')) {
                            asn = orgRaw.substring(0, spaceIdx);          // e.g. "AS12345"
                            isp_name = orgRaw.substring(spaceIdx + 1);    // e.g. "Jio Broadband Services"
                        } else {
                            isp_name = orgRaw; // No ASN prefix — store full string as isp_name
                        }
                    }
                }
            } catch {
                // ISP lookup timed out or failed — that's fine, city/country are still captured.
            }
        }

        const country_code = vCountry;
        // Only return city for Indian visitors to maintain service focus
        const city = country_code === 'IN' ? decodeURIComponent(vCity) : null;
        
        // Ensure language is only detected for India to avoid collisions with external ISO region codes
        const detected_lang = country_code === 'IN' && vRegion ? (REGION_TO_LANG[decodeURIComponent(vRegion)] || null) : null;

        return NextResponse.json({
            city,
            region: vRegion ? decodeURIComponent(vRegion) : '',
            country_name: country_code === 'IN' ? 'India' : vCountry,
            country_code,
            asn,
            isp_name,
            detected_lang
        });
    }

    // 2. Fallback for Local Development or if no geo headers (ipapi.co)
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
                city: 'Bangalore',
                region: 'Karnataka',
                country_name: 'India',
                country_code: 'IN',
                org: 'Fallback ISP'
            });
        }

        const data = await response.json();

        // Sanitize for India focus
        if (data.country_code !== 'IN') {
            data.city = null;
            data.region = null;
        } else if (!data.city) {
            data.city = 'Bangalore'; // Default city if in India but city detection fails
        }

        // Remove IP from external API response before caching/returning
        if (data.ip) delete data.ip;

        // Save to cache
        if (!globalThis.locationCache) {
            globalThis.locationCache = new Map();
        }
        globalThis.locationCache.set(ip || 'default', {
            timestamp: Date.now(),
            data: data
        });

        // Add detected language
        data.detected_lang = data.region ? (REGION_TO_LANG[data.region] || null) : null;

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching location:', error);
        // Fallback on network error too
        return NextResponse.json({
            city: 'Bangalore',
            region: 'Karnataka',
            country_name: 'India',
            country_code: 'IN',
            org: 'Fallback ISP (Error)',
            detected_lang: 'kn' // Default for fallback
        });
    }
}
