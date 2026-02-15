const https = require('https');

const services = [
    'life-insurance',
    'health-insurance',
    'motor-insurance',
    'term-insurance',
    'sme-insurance',
    'travel-insurance',
    'pension-plans',
    'ulip-plans',
    'wedding-insurance',
    'cyber-insurance',
];

const baseUrl = 'https://insurancesupport.online';

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, data }));
        }).on('error', reject);
    });
}

async function verifyDiscovery() {
    console.log('--- Verifying Sitemap ---');
    try {
        const { statusCode, data } = await fetchUrl(`${baseUrl}/sitemap.xml`);
        console.log(`Sitemap Status: ${statusCode}`);
        if (statusCode === 200) {
            console.log('Checking for service URLs in sitemap...');
            const missingInSitemap = services.filter(slug => !data.includes(`/services/${slug}`));
            if (missingInSitemap.length === 0) {
                console.log('✅ All 10 services found in sitemap.');
            } else {
                console.log('❌ Missing services in sitemap:', missingInSitemap);
            }
        }
    } catch (e) {
        console.error('Error fetching sitemap:', e.message);
    }

    console.log('\n--- Verifying Page Availability ---');
    for (const slug of services) {
        try {
            const { statusCode } = await fetchUrl(`${baseUrl}/services/${slug}`);
            if (statusCode === 200) {
                console.log(`✅ ${slug}: 200 OK`);
            } else {
                console.log(`❌ ${slug}: ${statusCode}`);
            }
        } catch (e) {
            console.error(`Error fetching ${slug}:`, e.message);
        }
    }
}

verifyDiscovery();
