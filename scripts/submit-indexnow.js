const https = require('https');

const config = {
    host: 'insurancesupport.online',
    key: 'bed5a6a083d549ca8881dd6ba00ea744',
    keyLocation: 'https://insurancesupport.online/bed5a6a083d549ca8881dd6ba00ea744.txt',
    endpoints: [
        'www.bing.com',
        'yandex.com',
        'api.indexnow.org'
    ],
    urlList: [
        'https://insurancesupport.online/',
        'https://insurancesupport.online/about',
        'https://insurancesupport.online/contact',
        'https://insurancesupport.online/support',
        'https://insurancesupport.online/loans',
        'https://insurancesupport.online/engagement',
        'https://insurancesupport.online/privacy-policy',
        'https://insurancesupport.online/terms-of-service',
        'https://insurancesupport.online/get-started',
        'https://insurancesupport.online/resources',
        // Services
        'https://insurancesupport.online/services/life-insurance',
        'https://insurancesupport.online/services/health-insurance',
        'https://insurancesupport.online/services/motor-insurance',
        'https://insurancesupport.online/services/term-insurance',
        'https://insurancesupport.online/services/sme-insurance',
        'https://insurancesupport.online/services/travel-insurance',
        'https://insurancesupport.online/services/pension-plans',
        'https://insurancesupport.online/services/ulip-plans',
        'https://insurancesupport.online/services/wedding-insurance',
        'https://insurancesupport.online/services/cyber-insurance',
        // Locations
        'https://insurancesupport.online/locations/bangalore',
        'https://insurancesupport.online/locations/chennai',
        'https://insurancesupport.online/locations/vellore',
        'https://insurancesupport.online/locations/hosur',
        'https://insurancesupport.online/locations/kanchipuram',
        'https://insurancesupport.online/locations/mysore',
        'https://insurancesupport.online/locations/coimbatore',
        'https://insurancesupport.online/locations/salem',
        'https://insurancesupport.online/locations/tirupati'
    ]
};

const data = JSON.stringify({
    host: config.host,
    key: config.key,
    keyLocation: config.keyLocation,
    urlList: config.urlList
});

async function submitToIndexNow(hostname) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: hostname,
            port: 443,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        console.log(`[IndexNow] Submitting to ${hostname}...`);

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (d) => { body += d; });
            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 202) {
                    console.log(`[Success] ${hostname} accepted the submission (Status: ${res.statusCode})`);
                    resolve({ hostname, status: res.statusCode, success: true });
                } else {
                    console.error(`[Failure] ${hostname} rejected the submission (Status: ${res.statusCode})`);
                    console.error(`Response: ${body}`);
                    resolve({ hostname, status: res.statusCode, success: false });
                }
            });
        });

        req.on('error', (error) => {
            console.error(`[Error] Connection to ${hostname} failed: ${error.message}`);
            resolve({ hostname, error: error.message, success: false });
        });

        req.write(data);
        req.end();
    });
}

async function main() {
    console.log(`[IndexNow] Starting submission for ${config.urlList.length} URLs...`);

    const results = await Promise.all(config.endpoints.map(submitToIndexNow));

    console.log('\n--- Submission Summary ---');
    results.forEach(res => {
        const status = res.success ? '✔' : '✘';
        const msg = res.success ? `Status ${res.status}` : (res.error || `Status ${res.status}`);
        console.log(`${status} ${res.hostname}: ${msg}`);
    });
    console.log('---------------------------\n');
}

main().catch(console.error);
