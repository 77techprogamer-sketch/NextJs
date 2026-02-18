const https = require('https');
const HOST = 'insurancesupport.online';
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const API_HOST = 'api.indexnow.org'; // Central endpoint for all engines

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
    },
};

console.log('🚀 Starting Fast-Track Indexing via IndexNow...');

const req = https.request(options, (res) => {
    console.log(`Status Record: ${res.statusCode}`);
    if (res.statusCode === 200) {
        console.log('✅ Success! Search engines (Bing/Yandex) have been notified.');
        console.log('Google also monitors IndexNow signals for priority crawling.');
    } else {
        console.log('❌ Failed to notify search engines. Check your IndexNow key.');
    }
});

req.on('error', (error) => {
    console.error('Error during IndexNow request:', error);
});

req.write(data);
req.end();
