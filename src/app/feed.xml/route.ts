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

export async function GET() {
    const services = enTranslations.services_data;
    const date = new Date().toISOString().split('T')[0];

    // Generate offers based on services
    const offersXml = Object.entries(services).map(([key, service]) => {
        const url = `${BASE_URL}/services/${key}`;
        // Using a consistent ID generation strategy
        const id = key;

        return `
    <offer id="${id}" available="true">
      <name>${escapeXml(service.title)}</name>
      <url>${escapeXml(url)}</url>
      <price>0</price>
      <currencyId>INR</currencyId>
      <categoryId>1</categoryId>
      <description>${escapeXml(service.description)}</description>
      <picture>${BASE_URL}/brand-favicon.svg</picture>
      <delivery>false</delivery>
      <pickup>true</pickup>
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
