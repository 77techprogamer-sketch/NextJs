import { NextResponse } from 'next/server';

export async function GET() {
    const rssUrl = 'https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss';

    try {
        const response = await fetch(rssUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }
        const xml = await response.text();

        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'text/xml',
                'Cache-Control': 's-maxage=3600, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
