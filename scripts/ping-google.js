const https = require('https');

const SITEMAP_URL = 'https://insurancesupport.online/sitemap.xml';

const engines = [
    {
        name: 'Google',
        url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    },
    {
        name: 'Bing',
        url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    }
];

async function pingEngines() {
    console.log('🚀 Pinging search engines with sitemap...');

    for (const engine of engines) {
        https.get(engine.url, (res) => {
            console.log(`✅ [${res.statusCode}] ${engine.name} notified successfully.`);
        }).on('error', (err) => {
            console.error(`❌ Error pinging ${engine.name}:`, err.message);
        });
    }
}

pingEngines();
