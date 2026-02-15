const SITEMAP_URL = 'https://insurancesupport.online/sitemap.xml';

const searchEngines = [
    `http://www.google.com/ping?sitemap=${SITEMAP_URL}`,
    `http://www.bing.com/ping?sitemap=${SITEMAP_URL}`
];

console.log('🚀 Pinging Search Engines...');

async function ping() {
    for (const url of searchEngines) {
        try {
            const res = await fetch(url);
            console.log(`[${res.status}] Pung ${url}`);
        } catch (e) {
            console.error(`Error pinging ${url}:`, e.message);
        }
    }
}

ping();
