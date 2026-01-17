import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    let ip = forwardedFor ? forwardedFor.split(',')[0] : null;

    // Handle localhost IPv6 loopback
    if (ip === '::1') {
        ip = null;
    }

    // If we have a query user_ip, use that (optional)
    const { searchParams } = new URL(request.url);
    const queryIp = searchParams.get('ip');
    if (queryIp) {
        ip = queryIp;
    }

    const apiUrl = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'InsuranceSupportApp/1.0'
            }
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch location data' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching location:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
