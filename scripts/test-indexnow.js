const https = require('https');

const HOST = 'insurancesupport.online';
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const ENDPOINTS = [
    { name: 'Bing Direct', host: 'www.bing.com', path: '/indexnow' },
    { name: 'IndexNow Hub', host: 'api.indexnow.org', path: '/indexnow' }
];

async function testEndpoint(endpoint, includeKeyLocation = true) {
    const data = JSON.stringify({
        host: HOST,
        key: KEY,
        ...(includeKeyLocation ? { keyLocation: KEY_LOCATION } : {}),
        urlList: [`https://${HOST}/`],
    });

    const options = {
        hostname: endpoint.host,
        port: 443,
        path: endpoint.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(data),
            'User-Agent': 'IndexNow/1.0',
        },
    };

    console.log(`\n🧪 Testing: ${endpoint.name} (KeyLocation: ${includeKeyLocation})`);

    return new Promise((resolve) => {
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log(`Result: ${res.statusCode} ${res.statusMessage}`);
                console.log(`Response: ${body}`);
                resolve(res.statusCode);
            });
        });

        req.on('error', (e) => {
            console.error(`Error: ${e.message}`);
            resolve(500);
        });

        req.write(data);
        req.end();
    });
}

async function runAllTests() {
    for (const endpoint of ENDPOINTS) {
        await testEndpoint(endpoint, true);
        await testEndpoint(endpoint, false);
    }
}

runAllTests();
