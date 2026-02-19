const axios = require('axios');
const HOST = 'www.insurancesupport.online';
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

async function submitToIndexNow() {
    console.log('🚀 Starting Fast-Track Indexing via IndexNow...');
    console.log(`Submitting to: ${API_HOST}`);
    console.log(`Host: ${HOST}`);
    console.log(`Key Location: ${KEY_LOCATION}`);

    try {
        const response = await axios.post(`https://${API_HOST}/indexnow`, {
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urls,
        }, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        if (response.status === 200 || response.status === 202) {
            console.log('✅ Success! Search engines have been notified.');
        } else {
            console.log(`⚠️ Status Result: ${response.status} ${response.statusText}`);
            console.log(`Response: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        if (error.response) {
            console.log(`❌ Failed. Status: ${error.response.status} ${error.response.statusText}`);
            console.log(`Response: ${JSON.stringify(error.response.data)}`);
            if (error.response.status === 403) {
                console.log('TIP: This often means the IndexNow crawler could not verify your key file.');
                console.log('Check if https://insurancesupport.online/' + KEY + '.txt is reachable.');
            }
        } else {
            console.error('Error during IndexNow request:', error.message);
        }
    }
}

submitToIndexNow();
