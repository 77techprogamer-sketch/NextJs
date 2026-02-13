import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const INDEXNOW_KEY = 'bed5a6a083d549ca8881dd6ba00ea744';
const HOST = 'insurancesupport.online';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url || !url.includes(HOST)) {
            return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
        }

        const userAgent = headers().get('user-agent') || '';
        const isBot = /googlebot|bingbot|yandex|baiduspider|Lighthouse/i.test(userAgent);

        // Don't trigger for bots
        if (isBot) {
            return NextResponse.json({ skip: 'Bot detected' });
        }

        console.log(`[SEO-Auto] Processing submission for: ${url}`);

        // 1. IndexNow (Bing/Yandex)
        const indexNowPromise = fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host: HOST,
                key: INDEXNOW_KEY,
                keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
                urlList: [url]
            })
        }).catch(err => console.error('IndexNow Auto-Ping Failed:', err));

        // 2. Ping-o-Matic 
        // We Use a simple GET request to simulate a ping for the main site
        const pingOMaticPromise = fetch(`https://pingomatic.com/ping/?title=Insurance+Support&blogurl=https%3A%2F%2F${HOST}%2F&rssurl=https%3A%2F%2F${HOST}%2Fapi%2Frss&chk_google=on&chk_blogs=on&chk_feedburner=on`, {
            method: 'GET'
        }).catch(err => console.error('Ping-o-Matic Failed:', err));

        // 3. Crawler Trigger (External "Whois/Stats" sites)
        // These sites often crawl a site when an "info" page is requested
        const statsPings = [
            `https://www.doc-site.net/check/${HOST}`,
            `https://www.siteworthtraffic.com/report/${HOST}`,
            `https://www.siterankdata.com/${HOST}`
        ];

        const statsPromises = statsPings.map(pingUrl =>
            fetch(pingUrl, { method: 'GET', mode: 'no-cors' }).catch(() => { })
        );

        // Execute all pings in background
        Promise.all([indexNowPromise, pingOMaticPromise, ...statsPromises]);

        return NextResponse.json({
            success: true,
            pings: ['IndexNow', 'Ping-o-Matic', 'CrawlerTriggers']
        });

    } catch (error) {
        console.error('Auto-Submit API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
