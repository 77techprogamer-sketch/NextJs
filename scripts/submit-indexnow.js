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
        'https://insurancesupport.online/contact'
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
