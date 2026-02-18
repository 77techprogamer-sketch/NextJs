const https = require('https');

async function submit(host, endpoint) {
    const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
    const urls = [`https://${host}/`];

    const data = JSON.stringify({
        host: host,
        key: KEY,
        urlList: urls
    });

    const options = {
        hostname: endpoint,
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(data),
            'User-Agent': 'IndexNow/1.0'
        }
    };

    console.log(`\n--- Testing host: ${host} with endpoint: ${endpoint} ---`);

    return new Promise((resolve) => {
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
                console.log(`Response: ${body}`);
                resolve(res.statusCode === 200);
            });
        });

        req.on('error', (e) => {
            console.error(`Error: ${e.message}`);
            resolve(false);
        });

        req.write(data);
        req.end();
    });
}

async function runTests() {
    // Test 1: Non-www with Bing (Current)
    await submit('insurancesupport.online', 'www.bing.com');

    // Test 2: Www with Bing
    await submit('www.insurancesupport.online', 'www.bing.com');

    // Test 3: Non-www with Central API
    await submit('insurancesupport.online', 'api.indexnow.org');
}

runTests();
