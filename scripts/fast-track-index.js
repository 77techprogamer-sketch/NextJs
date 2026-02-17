/**
 * Fast Track Indexing Script
 * Notifies Bing, Yandex, and other search engines of sitemap changes via IndexNow protocol.
 */

const axios = require('axios');

const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const HOST = 'insurancesupport.online';
const SITEMAP = `https://${HOST}/sitemap.xml`;

const engines = [
    'https://www.bing.com/indexnow',
    'https://search.yandex.ru/indexnow',
    'https://indexnow.org/indexnow'
];

async function fastTrack() {
    console.log('🚀 Starting Fast Track Indexing...');

    for (const engine of engines) {
        try {
            console.log(`📡 Pinging ${engine}...`);
            const response = await axios.post(engine, {
                host: HOST,
                key: KEY,
                keyLocation: `https://${HOST}/${KEY}.txt`,
                urlList: [
                    `https://${HOST}/`,
                    `https://${HOST}/about`,
                    `https://${HOST}/contact`,
                    `https://${HOST}/support`,
                    `https://${HOST}/loans`,
                    `https://${HOST}/privacy-policy`,
                    `https://${HOST}/terms-of-service`,
                    `https://${HOST}/get-started`,
                    `https://${HOST}/resources`,
                    // Services
                    `https://${HOST}/services/life-insurance`,
                    `https://${HOST}/services/health-insurance`,
                    `https://${HOST}/services/motor-insurance`,
                    `https://${HOST}/services/term-insurance`,
                    `https://${HOST}/services/sme-insurance`,
                    `https://${HOST}/services/travel-insurance`,
                    `https://${HOST}/services/pension-plans`,
                    `https://${HOST}/services/ulip-plans`,
                    `https://${HOST}/services/wedding-insurance`,
                    `https://${HOST}/services/cyber-insurance`,
                    // Tools
                    `https://${HOST}/tools/human-life-value-calculator`,
                    `https://${HOST}/tools/policy-recovery`,
                    `https://${HOST}/tools/risk-scorecard`,
                    // Locations
                    `https://${HOST}/locations/bangalore`,
                    `https://${HOST}/locations/chennai`,
                    `https://${HOST}/locations/vellore`,
                    `https://${HOST}/locations/hosur`,
                    `https://${HOST}/locations/kanchipuram`,
                    `https://${HOST}/locations/mysore`,
                    `https://${HOST}/locations/coimbatore`,
                    `https://${HOST}/locations/salem`,
                    `https://${HOST}/locations/tirupati`
                ]
            });
            console.log(`✅ Success: ${engine} (Status: ${response.status})`);
        } catch (error) {
            console.error(`❌ Failed: ${engine} (${error.message})`);
        }
    }

    console.log('\n📝 Note: Google does not support IndexNow yet. For Google, use Google Search Console -> URL Inspection -> Request Indexing manually for these critical URLs.');
}

if (require.main === module) {
    fastTrack();
}
