const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'insurancesupport.online';
const KEY = 'bed5a6a083d549ca8881dd6ba00ea744';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read city data to generate URLs dynamically
// Note: Since cityData.ts is TS, we'll just hardcode the slugs here for the script to be standalone/reliable
// or we could try to read the file. For reliability, I will list them.
// Actually, reading the file via regex is better to keep in sync.

const cityDataPath = path.join(__dirname, '../src/data/cityData.ts');
const cityDataContent = fs.readFileSync(cityDataPath, 'utf8');
const cityRegex = /slug:\s*'([^']+)'/g;

let match;
const cities = [];
while ((match = cityRegex.exec(cityDataContent)) !== null) {
    cities.push(match[1]);
}

const baseUrls = [
    `https://${HOST}/`,
    `https://${HOST}/about`,
    `https://${HOST}/services/life-insurance`,
    `https://${HOST}/services/health-insurance`,
    `https://${HOST}/services/motor-insurance`,
    `https://${HOST}/return-policy`,
    `https://${HOST}/contact`
];

const locationUrls = cities.map(city => `https://${HOST}/locations/${city}`);
const allUrls = [...baseUrls, ...locationUrls];

console.log(`Found ${cities.length} cities.`);
console.log(`Submitting ${allUrls.length} URLs to Bing IndexNow...`);

const data = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: allUrls
});

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, res => {
    console.log(`StatusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});

req.write(data);
req.end();
