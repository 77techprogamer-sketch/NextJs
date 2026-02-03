import { NextResponse } from 'next/server';
import enTranslations from '../../../public/locales/en/translation.json';

const BASE_URL = 'https://insurancesupport.online';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Map service keys to specific metadata for enhanced appearance
const serviceMeta: Record<string, { image: string; price: number; rating: number; reviews: number }> = {
  'life-insurance': { image: 'life-insurance.png', price: 500, rating: 4.8, reviews: 124 },
  'health-insurance': { image: 'health-insurance.png', price: 1000, rating: 4.9, reviews: 215 },
  'motor-insurance': { image: 'motor-insurance.png', price: 2000, rating: 4.7, reviews: 89 },
  'sme-insurance': { image: 'sme-insurance.png', price: 5000, rating: 4.8, reviews: 45 },
  'term-insurance': { image: 'term-insurance.png', price: 800, rating: 4.9, reviews: 156 },
  'travel-insurance': { image: 'travel-insurance.png', price: 500, rating: 4.8, reviews: 67 },
  'pension-plans': { image: 'pension-plans.png', price: 2500, rating: 4.7, reviews: 34 },
  'ulip-plans': { image: 'ulip-plans.png', price: 1500, rating: 4.6, reviews: 28 },
  'wedding-insurance': { image: 'wedding-insurance.png', price: 3000, rating: 4.9, reviews: 12 },
  'cyber-insurance': { image: 'cyber-insurance.png', price: 1000, rating: 4.8, reviews: 22 },
};

export async function GET() {
  const services = enTranslations.services_data;
  const date = new Date().toISOString().split('T')[0];

  // Generate offers based on services
  const offersXml = Object.entries(services).map(([key, service]) => {
    const url = `${BASE_URL}/services/${key}`;
    const id = key;
    const meta = serviceMeta[key] || { image: 'brand-favicon.svg', price: 0, rating: 4.5, reviews: 10 };

    return `
    <offer id="${id}" available="true">
      <name>${escapeXml(service.title)}</name>
      <url>${escapeXml(url)}</url>
      <price>${meta.price}</price>
      <currencyId>INR</currencyId>
      <categoryId>1</categoryId>
      <description>${escapeXml(service.description)}</description>
      <picture>${BASE_URL}/${meta.image}</picture>
      <delivery>false</delivery>
      <pickup>true</pickup>
      <rating>${meta.rating}</rating>
      <review_count>${meta.reviews}</review_count>
    </offer>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${date}T12:00:00+05:30">
  <shop>
    <name>Insurance Support</name>
    <company>Insurance Support India</company>
    <url>${BASE_URL}</url>
    <currencies>
      <currency id="INR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Insurance Services</category>
    </categories>
    <offers>
      ${offersXml}
    </offers>
  </shop>
</yml_catalog>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
