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

    const cities = extractKeysFromTS(path.join(DATA_PATH, 'cityData.ts'), /^\s*([a-z-]+):\s*{/gm);
    cities.forEach(c => urlsToPush.push(`${BASE_URL}/locations/${c}`));

    cities.forEach(city => {
        serviceSlugs.forEach(service => {
            urlsToPush.push(`${BASE_URL}/locations/${city}/${service}`);
        });
    });

    // Add blogs
    try {
        const blogsPath = path.join(DATA_PATH, 'blogs.json');
        if (fs.existsSync(blogsPath)) {
            const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
            blogs.forEach(blog => {
                urlsToPush.push(`${BASE_URL}/blog/${blog.slug}`);
            });
        }
    } catch (e) {
        console.warn('Warning reading blogs.json');
    }

    console.log(`📦 Found ${urlsToPush.length} total URLs.`);

    // Google limits new projects to 200 requests per day by default, but this can be increased.
    // We are boosting this to 500 to accelerate the indexing of our 2800+ nodes.
    const QUOTA_LIMIT = 500;
    
    // PRIORITY LOGIC
    const priorityUrls = [];
    const regularUrls = [];

    const priorityCities = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'lucknow', 'jaipur', 'ahmedabad'];

    urlsToPush.forEach(url => {
        const isPriority = priorityCities.some(city => url.includes(`/locations/${city}`)) || 
                           url.endsWith('/') || 
                           url.includes('/blog/') || 
                           url.includes('/services/');
        
        if (isPriority) {
            priorityUrls.push(url);
        } else {
            regularUrls.push(url);
        }
    });

    // Shuffle both groups independently
    [priorityUrls, regularUrls].forEach(arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    });

    // Assemble final list: Priority first, then regular
    const finalUrlsToPush = [...priorityUrls, ...regularUrls];
    const batchToPush = finalUrlsToPush.slice(0, QUOTA_LIMIT);

    console.log(`📦 Priority URLs: ${priorityUrls.length}, Regular URLs: ${regularUrls.length}`);
    console.log(`⚠️ Limiting this run to ${batchToPush.length} URLs to respect the targeted daily Google API Quota.`);

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
