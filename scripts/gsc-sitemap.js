const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

/**
 * Script to submit a sitemap to Google Search Console (GSC) using the Search Console API.
 * 
 * Requirements:
 * 1. googleapis package (npm install googleapis)
 * 2. Service Account JSON key (google-service-account.json)
 * 3. The Service Account must be added as an Owner in Google Search Console.
 */

// Configuration
const SITE_URL = 'https://insurancesupport.online/'; // Ensure this matches your GSC property exactly (with trailing slash)
const SITEMAP_URL = 'https://insurancesupport.online/sitemap.xml';
const KEY_FILE = path.join(__dirname, '../google-service-account.json');

async function submitSitemap() {
    console.log('🚀 Starting Sitemap Submission to Google Search Console...');

    // 1. Validate Key File
    if (!fs.existsSync(KEY_FILE)) {
        console.error(`❌ Error: Service Account Key not found at ${KEY_FILE}`);
        console.error(`Please ensure 'google-service-account.json' exists in the project root.`);
        process.exit(1);
    }

    try {
        // 2. Initialize Auth
        const auth = new google.auth.GoogleAuth({
            keyFile: KEY_FILE,
            scopes: ['https://www.googleapis.com/auth/webmasters'],
        });

        const searchconsole = google.searchconsole({ version: 'v1', auth });

        console.log(`📡 Submitting sitemap: ${SITEMAP_URL}`);
        console.log(`🏠 For site property: ${SITE_URL}`);

        // 3. Submit Sitemap
        const response = await searchconsole.sitemaps.submit({
            siteUrl: SITE_URL,
            feedpath: SITEMAP_URL,
        });

        if (response.status === 204 || response.status === 200) {
            console.log('✅ Success: Sitemap submitted successfully!');
            console.log('You can check the status here: https://search.google.com/search-console/sitemaps');
        } else {
            console.log('⚠️ Submission returned unexpected status:', response.status);
            console.log(response.data);
        }

    } catch (error) {
        console.error('❌ Error during submission:');
        
        if (error.response && error.response.data) {
            const apiError = error.response.data.error;
            console.error(`API Error (${apiError.code}): ${apiError.message}`);
            
            if (apiError.message.includes('Permission denied')) {
                console.error('\n💡 FIX: Ensure the Service Account email is added as an OWNER in Google Search Console for this property.');
            } else if (apiError.message.includes('not found')) {
                console.error('\n💡 FIX: Ensure the Site URL matches your Search Console property exactly (e.g., check for https vs http, or trailing slashes).');
            }
        } else {
            console.error(error.message);
        }
    }
}

submitSitemap();
