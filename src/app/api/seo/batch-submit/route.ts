import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import blogs from '@/data/blogs.json';

const INDEXNOW_KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const HOST = 'insurancesupport.online';
const BASE_URL = `https://${HOST}`;

function getAllUrls(): string[] {
  const blogUrls = blogs.map((post: any) => `${BASE_URL}/blog/${post.slug}`);
  const pageUrls = [
    BASE_URL, `${BASE_URL}/about`, `${BASE_URL}/contact`,
    `${BASE_URL}/services`, `${BASE_URL}/resources`,
    `${BASE_URL}/resources/claim-checklist`, `${BASE_URL}/resources/guides`,
    `${BASE_URL}/support`, `${BASE_URL}/locations`,
  ];
  return [...pageUrls, ...blogUrls];
}

async function submitToIndexNow(urls: string[]) {
  const success: string[] = [];
  const failed: string[] = [];

  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: HOST, key: INDEXNOW_KEY,
          keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
          urlList: batch,
        }),
      });
      (res.ok ? success : failed).push(...(res.ok ? batch : []));
      if (!res.ok) batch.forEach((url) => failed.push(url));
    } catch { batch.forEach((url) => failed.push(url)); }
    if (i + 10 < urls.length) await new Promise((r) => setTimeout(r, 2000));
  }
  return { success, failed };
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    totalUrls: getAllUrls().length,
    blogPosts: blogs.length,
  });
}

export async function POST(request: Request) {
  try {
    if (/googlebot|bingbot|yandex/i.test(headers().get('user-agent') || '')) {
      return NextResponse.json({ skip: 'Bot' });
    }
    const { success, failed } = await submitToIndexNow(getAllUrls());
    return NextResponse.json({ success: true, submitted: success.length, failed: failed.length });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
