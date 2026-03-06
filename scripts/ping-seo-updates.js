const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

async function pushToIndex() {
    const keyPath = path.join(__dirname, '..', 'google-service-account.json');
    if (!fs.existsSync(keyPath)) {
        console.error('Service account key not found at:', keyPath);
        return;
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing('v3');

    const urls = [
        'https://insurancesupport.online/',
        'https://insurancesupport.online/resources/insurance-support-guide'
    ];

    for (const url of urls) {
        try {
            const res = await indexing.urlNotifications.publish({
                auth,
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });
            console.log(`Successfully pinged Google for: ${url}`);
        } catch (err) {
            console.error(`Error pinging ${url}:`, err.message);
        }
    }
}

pushToIndex();
