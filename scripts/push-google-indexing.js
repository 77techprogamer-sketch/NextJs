const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const axios = require('axios');

// Configuration
const BASE_URL = 'https://insurancesupport.online';
const KEY_FILE = path.join(__dirname, '../google-service-account.json');

// Check if Key exists
if (!fs.existsSync(KEY_FILE)) {
    console.error(`❌ Error: Service Account Key not found at ${KEY_FILE}`);
    console.error(`Please download the JSON key from Google Cloud Console and save it as 'google-service-account.json' in the project root.`);
    process.exit(1);
}

// Internal Data Extraction Helpers
const SRC_PATH = path.join(__dirname, '../src');
const DATA_PATH = path.join(SRC_PATH, 'data');

function extractArrayFromTS(filePath, regex) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    } catch (e) {
        console.warn(`Warning reading ${filePath}`);
        return [];
    }
}

function extractKeysFromTS(filePath, regex) {
    return extractArrayFromTS(filePath, regex); // Logic is the same for our regex structure
}

async function getJwtClient() {
    const keyFile = require(KEY_FILE);
    const jwtClient = new google.auth.JWT({
        email: keyFile.client_email,
        key: keyFile.private_key,
        scopes: ['https://www.googleapis.com/auth/indexing']
    });

    await jwtClient.authorize();
    return jwtClient;
}

async function run() {
    console.log('🚀 Initializing Google Indexing API Push...');

    // 1. Generate URLs (re-using logic from fast-index)
    const urlsToPush = [];
    urlsToPush.push(`${BASE_URL}/`);

    const serviceSlugs = extractArrayFromTS(path.join(DATA_PATH, 'services.ts'), /['"]([a-z-]+)['"]/g);
    serviceSlugs.forEach(s => urlsToPush.push(`${BASE_URL}/services/${s}`));

    const cities = extractKeysFromTS(path.join(DATA_PATH, 'cityData.ts'), /^\s{4}([a-z-]+):\s{/gm);
    cities.forEach(c => urlsToPush.push(`${BASE_URL}/locations/${c}`));

    cities.forEach(city => {
        serviceSlugs.forEach(service => {
            urlsToPush.push(`${BASE_URL}/locations/${city}/${service}`);
        });
    });

    console.log(`📦 Found ${urlsToPush.length} total URLs.`);

    // Shuffle the array so we get a different random batch each time
    for (let i = urlsToPush.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [urlsToPush[i], urlsToPush[j]] = [urlsToPush[j], urlsToPush[i]];
    }

    // Google limits new projects to 200 requests per day.
    const QUOTA_LIMIT = 200;
    const batchToPush = urlsToPush.slice(0, QUOTA_LIMIT);

    console.log(`⚠️ Limiting this run to ${batchToPush.length} URLs to respect the daily Google API Quota.`);

    try {
        const client = await getJwtClient();
        console.log(`✅ Authenticated as ${require(KEY_FILE).client_email}`);

        // Google Indexing API allows up to 100 requests per batch, but for simplicity
        // in reporting, we will iterate. For 500+ URLs, it takes about 1-2 minutes.
        let successCount = 0;
        let failCount = 0;

        console.log(`📤 Pushing URLs to Google...`);
        for (let i = 0; i < batchToPush.length; i++) {
            const url = batchToPush[i];
            try {
                const response = await client.request({
                    url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    method: 'POST',
                    data: {
                        url: url,
                        type: 'URL_UPDATED' // Specifies we want it indexed
                    }
                });

                if (response.status === 200) {
                    successCount++;
                    if (successCount % 50 === 0) console.log(`   ... successfully pushed ${successCount} URLs`);
                }
            } catch (error) {
                failCount++;
                if (failCount === 1) {
                    console.error(`❌ First Error Details:`, error.response ? error.response.data : error.message);
                }
            }

            // Basic rate limiting to respect quotas (10 requests per second is generally safe)
            await new Promise(r => setTimeout(r, 100));
        }

        console.log(`\n🏁 Push Complete!`);
        console.log(`✅ Successfully queued: ${successCount}`);
        if (failCount > 0) console.log(`❌ Failed lines: ${failCount} (Check quota limits or GSC permissions)`);

    } catch (error) {
        console.error('❌ Authentication or Core API Error:');
        console.error(error.message);
        if (error.message.includes('insufficient allocation')) {
            console.error('\nEnsure the Indexing API is enabled in Google Cloud Console.');
        } else if (error.message.includes('Permission denied')) {
            console.error('\nEnsure this Service Account email is added as an OWNER in Google Search Console.');
        }
    }
}

run();
