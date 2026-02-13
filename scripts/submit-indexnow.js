const https = require('https');

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': 0 // Will be set later
    }
};

const data = JSON.stringify({
    host: 'insurancesupport.online',
    key: 'bed5a6a083d549ca8881dd6ba00ea744',
    keyLocation: 'https://insurancesupport.online/bed5a6a083d549ca8881dd6ba00ea744.txt',
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
});

options.headers['Content-Length'] = data.length;

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();
