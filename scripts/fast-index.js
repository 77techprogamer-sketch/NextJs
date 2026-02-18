const https = require('https');
const HOST = 'insurancesupport.online';
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const API_HOST = 'www.bing.com';

// Priority URLs to index first
const urls = [
    `https://${HOST}/`,
    `https://${HOST}/locations`,
    `https://${HOST}/services`,
    `https://${HOST}/tools/policy-recovery`,
    `https://${HOST}/tools/risk-scorecard`,
    `https://${HOST}/tools/human-life-value-calculator`,
];

const data = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
});

const options = {
    hostname: API_HOST,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'IndexNow/1.0',
    },
};

console.log('🚀 Starting Fast-Track Indexing via IndexNow...');
console.log(`Submitting to: ${API_HOST}`);

const req = https.request(options, (res) => {
    console.log(`Status Result: ${res.statusCode} ${res.statusMessage}`);

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('✅ Success! Search engines have been notified.');
        } else {
            console.log(`❌ Failed. Response: ${body}`);
            console.log('TIP: Ensure you have DEPLOYED the latest changes so the key file is live.');
        }
    });
});

req.on('error', (error) => {
    console.error('Error during IndexNow request:', error);
});

req.write(data);
req.end();
