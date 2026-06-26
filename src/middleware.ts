import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_BOTS = [
    /Googlebot/i, /Bingbot/i, /Slurp/i, /DuckDuckBot/i,
    /Baiduspider/i, /YandexBot/i, /Sogou/i, /Exabot/i,
    /facebot/i, /facebookexternalhit/i, /ia_archiver/i,
];

const BLOCKED_SIGNATURES = [
    /wget\//i, /curl\//i, /python-requests/i, /httpclient/i,
    /java\//i, /scrapy/i, /selenium/i, /puppeteer/i,
    /playwright/i, /lighthouse/i, /gtmetrix/i,
    /ahrefsbot/i, /semrushbot/i, /mj12bot/i,
];

const HONEYPOT_PATHS = ['/hidden-admin-access', '/private-backup', '/config-files'];

// Language prefixes that should NOT be treated as separate routes (client-side i18n only)
const LOCALE_PREFIXES = ['/hi/', '/bn/', '/mr/', '/te/', '/ta/', '/gu/', '/kn/', '/ml/', '/pa/'];

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const pathname = request.nextUrl.pathname;

    if (pathname.match(/\/[a-f0-9]{32}\.txt$/) || pathname === '/sitemap.xml' || pathname === '/robots.txt' || pathname.match(/\/MSV[A-Z0-9]+\.html$/)) {
        return NextResponse.next();
    }

    // Redirect locale-prefixed URLs back to the base URL (i18n is client-side only)
    // This fixes Google's 404 errors on /hi/*, /bn/* etc. from the sitemap
    for (const prefix of LOCALE_PREFIXES) {
        if (pathname.startsWith(prefix)) {
            const basePath = pathname.replace(prefix.slice(0, -1), '') || '/';
            const url = request.nextUrl.clone();
            url.pathname = basePath;
            return NextResponse.redirect(url, 301);
        }
    }

    if (ALLOWED_BOTS.some(bot => bot.test(userAgent))) {
        return NextResponse.next();
    }

    if (HONEYPOT_PATHS.some(path => pathname.startsWith(path))) {
        return new NextResponse('Gone', { status: 410 });
    }

    if (BLOCKED_SIGNATURES.some(sig => sig.test(userAgent))) {
        return new NextResponse('Access Denied', { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static/_next/image|favicon.ico|locales/).*)',
    ],
};
