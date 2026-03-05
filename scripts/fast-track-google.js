const https = require('https');

const SITEMAP_URL = 'https://insurancesupport.online/sitemap.xml';

/**
 * This script pings Google's sitemap notification endpoint.
 * While Google has deprecated the 'ping' endpoint for robots.txt in 2023,
 * the sitemap ping URL still often triggers a crawl if the site is new
 * or has significant updates.
 */

async function pingGoogle() {
    console.log('🚀 Pinging Google with sitemap...');
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;

    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log(`✅ [200] Google notified successfully.`);
        } else {
            console.warn(`⚠️ [${res.statusCode}] Google ping returned non-200 status.`);
        }
    }).on('error', (err) => {
        console.error(`❌ Error pinging Google:`, err.message);
    });
}

pingGoogle();
