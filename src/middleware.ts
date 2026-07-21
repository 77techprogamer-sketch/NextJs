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
];

const HONEYPOT_PATHS = ['/hidden-admin-access', '/private-backup', '/config-files'];

const SUPPORTED_LANGS = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const pathname = request.nextUrl.pathname;

    if (pathname.match(/\/[a-f0-9]{32}\.txt$/) || pathname === '/sitemap.xml' || pathname === '/robots.txt' || pathname.match(/\/MSV[A-Z0-9]+\.html$/)) {
        return NextResponse.next();
    }

    // Honeypot paths — return 410 Gone for ALL crawlers (including Googlebot)
    // This tells search engines these URLs are permanently gone, clearing GSC errors
    if (HONEYPOT_PATHS.some(path => pathname.startsWith(path))) {
        return new NextResponse('Gone', { status: 410 });
    }

    if (ALLOWED_BOTS.some(bot => bot.test(userAgent))) {
        return NextResponse.next();
    }

    if (BLOCKED_SIGNATURES.some(sig => sig.test(userAgent))) {
        return new NextResponse('Access Denied', { status: 403 });
    }

    // Detect locale from cookie and propagate via request header for SSR
    const response = NextResponse.next();
    
    // Detect language: cookie > accept-language > 'en'
    let lang = request.cookies.get('i18nextLng')?.value
        || request.cookies.get('NEXT_LOCALE')?.value
        || 'en';
    
    // Validate against supported languages
    if (!SUPPORTED_LANGS.includes(lang)) {
        // Try to match from accept-language header
        const acceptLang = request.headers.get('accept-language');
        if (acceptLang) {
            const detected = acceptLang.split(',')[0].split('-')[0].toLowerCase();
            if (SUPPORTED_LANGS.includes(detected)) {
                lang = detected;
            } else {
                lang = 'en';
            }
        } else {
            lang = 'en';
        }
    }

    // Set locale header for server-side components
    response.headers.set('x-next-locale', lang);
    
    // Also set html lang via cookie if not already set
    if (!request.cookies.get('i18nextLng')?.value) {
        response.cookies.set('i18nextLng', lang, { path: '/', maxAge: 31536000 });
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|locales/).*)',
    ],
};
