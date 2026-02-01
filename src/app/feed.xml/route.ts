import { NextResponse } from 'next/server';

export const revalidate = 600; // Update every 10 minutes

export async function GET() {
    const rssUrl = 'https://insurancesupportindia.blogspot.com/feeds/posts/default?alt=rss';

    try {
        const response = await fetch(rssUrl, { next: { revalidate: 600 } });
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }
        const xml = await response.text();

        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'text/xml',
                'Cache-Control': 's-maxage=600, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
