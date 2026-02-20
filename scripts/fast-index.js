const axios = require('axios');
const fs = require('fs');
const path = require('path');

const HOST = 'insurancesupport.online';
const BASE_URL = `https://${HOST}`;
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;
const API_HOST = 'api.indexnow.org';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

// File paths for data
const SRC_PATH = path.join(__dirname, '../src');
const DATA_PATH = path.join(SRC_PATH, 'data');

/**
 * Extract keys from a TypeScript object in a file
 */
function extractKeysFromTS(filePath, regex) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return [];
    }
}

/**
 * Extract array items from a TypeScript file
 */
function extractArrayFromTS(filePath, regex) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return [];
    }
}

async function run() {
    console.log('🚀 Generating Global URL List for Fast-Track Indexing...');

    const urls = [];

    // 1. Static Pages
    const staticPages = [
        '',
        '/about',
        '/support',
        '/loans',
        '/engagement',
        '/privacy-policy',
        '/terms-of-service',
        '/return-policy',
        '/get-started',
        '/resources',
        '/contact',
        '/locations',
        '/services',
        '/tools/policy-recovery',
        '/tools/risk-scorecard',
        '/tools/human-life-value-calculator',
        '/resources/download-policy-copy',
        '/resources/national-insurance-claim-process'
    ];
    staticPages.forEach(p => urls.push(`${BASE_URL}${p}`));

    // 2. Services
    const serviceSlugs = extractArrayFromTS(
        path.join(DATA_PATH, 'services.ts'),
        /['"]([a-z-]+)['"]/g
    );
    console.log(`- Found ${serviceSlugs.length} services`);
    serviceSlugs.forEach(s => urls.push(`${BASE_URL}/services/${s}`));

    // 3. Locations
    const cities = extractKeysFromTS(
        path.join(DATA_PATH, 'cityData.ts'),
        /^\s{4}([a-z-]+):\s{/gm
    );
    console.log(`- Found ${cities.length} cities`);
    cities.forEach(c => urls.push(`${BASE_URL}/locations/${c}`));

    // 4. Matrix (City + Service)
    console.log(`- Generating Matrix routes (City x Service)...`);
    cities.forEach(city => {
        serviceSlugs.forEach(service => {
            urls.push(`${BASE_URL}/locations/${city}/${service}`);
        });
    });

    // 5. Frequently Asked Questions
    const faqSlugs = extractArrayFromTS(
        path.join(DATA_PATH, 'faqData.ts'),
        /slug:\s*['"]([a-z-]+)['"]/g
    );
    console.log(`- Found ${faqSlugs.length} FAQs`);
    faqSlugs.forEach(f => urls.push(`${BASE_URL}/resources/faq/${f}`));

    console.log(`📦 Total URLs generated: ${urls.length}`);

    // Submit in batches of 10,000 (IndexNow limit)
    // For 700+ URLs, one batch is enough.
    const batchSize = 10000;
    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        console.log(`📤 Submitting batch ${i / batchSize + 1} (${batch.length} URLs)...`);

        try {
            const response = await axios.post(`https://${API_HOST}/indexnow`, {
                host: HOST,
                key: KEY,
                keyLocation: KEY_LOCATION,
                urlList: batch,
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                timeout: 10000
            });

            if (response.status === 200 || response.status === 202) {
                console.log(`✅ Success! Batch indexed. (Status: ${response.status})`);
            } else {
                console.warn(`⚠️ Batch submission partially failed. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(`❌ Batch submission failed:`, error.response ? error.response.status : error.message);
            if (error.response && error.response.data) {
                console.error('Response Data:', error.response.data);
            }
        }
    }

    // 6. Search Engine Sitemap Pings
    await pingSearchEngines();

    console.log('🏁 Fast-Track Indexing process complete.');
}

async function pingSearchEngines() {
    console.log('📡 Pinging search engines with the sitemap...');
    const pings = [
        { name: 'Google', url: `https://www.google.com/ping?sitemap=${SITEMAP_URL}` },
        { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${SITEMAP_URL}` }
    ];

    for (const ping of pings) {
        try {
            await axios.get(ping.url);
            console.log(`✅ ${ping.name} notified successfully.`);
        } catch (e) {
            console.warn(`⚠️ ${ping.name} notification failed: ${e.message}`);
        }
    }
}

run();
