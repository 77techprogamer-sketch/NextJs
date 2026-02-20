const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'insurancesupport.online';
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const engines = [
    'https://search.yandex.ru/indexnow',
    'https://indexnow.org/indexnow'
];

function extractSlugs(filePath, regex) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const slugs = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return [...new Set(slugs)];
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return [];
    }
}

const cityDataPath = path.join(__dirname, '../src/data/cityData.ts');
const servicesPath = path.join(__dirname, '../src/data/services.ts');
const faqDataPath = path.join(__dirname, '../src/data/faqData.ts');

const cities = extractSlugs(cityDataPath, /slug:\s*'([^']+)'/g);
const services = extractSlugs(servicesPath, /'([^']+)'/g).filter(s => s !== 'use client' && !s.includes(' ') && s.length > 2);
const faqs = extractSlugs(faqDataPath, /slug:\s*'([^']+)'/g);

const baseUrls = [
    `https://${HOST}/`,
    `https://${HOST}/about`,
    `https://${HOST}/support`,
    `https://${HOST}/loans`,
    `https://${HOST}/privacy-policy`,
    `https://${HOST}/terms-of-service`,
    `https://${HOST}/return-policy`,
    `https://${HOST}/get-started`,
    `https://${HOST}/resources`,
    `https://${HOST}/contact`,
    `https://${HOST}/locations`,
    `https://${HOST}/services`,
];

const serviceUrls = services.map(s => `https://${HOST}/services/${s}`);
const locationUrls = cities.map(c => `https://${HOST}/locations/${c}`);
const faqUrls = faqs.map(f => `https://${HOST}/resources/faq/${f}`);

const matrixUrls = [];
cities.forEach(city => {
    services.forEach(service => {
        matrixUrls.push(`https://${HOST}/locations/${city}/${service}`);
    });
});

const allUrls = [...baseUrls, ...serviceUrls, ...locationUrls, ...faqUrls, ...matrixUrls];

console.log(`Submitting ${allUrls.length} URLs...`);

async function submit() {
    const data = JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: allUrls
    });

    for (const engine of engines) {
        console.log(`📡 Sending to ${engine}...`);
        const url = new URL(engine);
        const options = {
            hostname: url.hostname,
            port: 443,
            path: url.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        const req = https.request(options, res => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                console.log(`✅ [${res.statusCode}] ${engine}: ${body || 'No detail'}`);
            });
        });

        req.on('error', error => console.error(`❌ ${engine} Error:`, error.message));
        req.write(data);
        req.end();
    }
}

submit();
