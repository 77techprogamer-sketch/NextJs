const axios = require('axios');
const fs = require('fs');
const path = require('path');

const HOST = 'insurancesupport.online';
const BASE_URL = `https://${HOST}`;
const KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;
const API_HOST = 'api.indexnow.org';

// File paths for data
const SRC_PATH = path.join(__dirname, '../src');
const DATA_PATH = path.join(SRC_PATH, 'data');

/**
 * Extract array items or object keys from a TypeScript file using Regex
 */
function extractFromTS(filePath, regex) {
    try {
        if (!fs.existsSync(filePath)) return [];
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return [];
    }
}

/**
 * Extract locations (city, state) from indianCities.ts
 */
function extractLocations() {
    try {
        const filePath = path.join(DATA_PATH, 'indianCities.ts');
        if (!fs.existsSync(filePath)) return [];
        const content = fs.readFileSync(filePath, 'utf8');
        const locations = [];
        // Match objects like { city: 'mumbai', state: 'maharashtra', name: 'Mumbai' }
        const locRegex = /\{\s*city:\s*'([^']+)',\s*state:\s*'([^']+)'/g;
        let match;
        while ((match = locRegex.exec(content)) !== null) {
            locations.push({ city: match[1], state: match[2] });
        }
        return locations;
    } catch (e) {
        console.error(`Error extracting locations:`, e.message);
        return [];
    }
}

async function run() {
    console.log('🚀 Generating Global URL List for Fast-Track Indexing...');

    const urls = new Set(); // Use Set to avoid duplicates

    // 1. Static Pages
    const staticPages = [
        '',
        '/about',
        '/support',
        '/loans',
        '/about-hari-kotian',
        '/engagement',
        '/privacy-policy',
        '/terms-of-service',
        '/return-policy',
        '/get-started',
        '/resources',
        '/contact',
        '/locations',
        '/services',
        '/success-stories',
        '/tools/policy-recovery',
        '/tools/risk-scorecard',
        '/tools/human-life-value-calculator',
        '/tools/term-insurance-calculator',
        '/resources/download-policy-copy',
        '/resources/general-insurance-claim-process',
        '/resources/claim-recovery-guide'
    ];
    staticPages.forEach(p => urls.add(`${BASE_URL}${p}`));

    // 2. Services
    const serviceSlugs = extractFromTS(
        path.join(DATA_PATH, 'services.ts'),
        /['"]([a-z-]+)['"]/g
    ).filter(s => ![ 'services', 'serviceLabels', 'serviceDescriptions' ].includes(s));
    
    // De-duplicate service slugs (as they appear in descriptions/highlights too)
    const uniqueServiceSlugs = Array.from(new Set(serviceSlugs));
    console.log(`- Found ${uniqueServiceSlugs.length} unique services`);
    uniqueServiceSlugs.forEach(s => urls.add(`${BASE_URL}/services/${s}`));

    // 3. Locations (States & Matrix)
    const locations = extractLocations();
    console.log(`- Found ${locations.length} locations`);
    
    const states = new Set(locations.map(l => l.state));
    console.log(`- Found ${states.size} states`);
    states.forEach(state => urls.add(`${BASE_URL}/locations/${state}`));

    // 4. Matrix (State + City + Service)
    console.log(`- Generating Matrix routes (State x City x Service)...`);
    locations.forEach(loc => {
        // City Hub
        urls.add(`${BASE_URL}/locations/${loc.state}/${loc.city}`);
        
        // Service specific
        uniqueServiceSlugs.forEach(service => {
            urls.add(`${BASE_URL}/locations/${loc.state}/${loc.city}/${service}`);
        });
    });

    // 5. Frequently Asked Questions
    const faqSlugs = extractFromTS(
        path.join(DATA_PATH, 'faqData.ts'),
        /slug:\s*['"]([a-z-]+)['"]/g
    );
    console.log(`- Found ${faqSlugs.length} FAQs`);
    faqSlugs.forEach(f => urls.add(`${BASE_URL}/resources/faq/${f}`));
    
    // 6. Dynamic Guides discovery (filesystem based)
    const guidesDir = path.join(SRC_PATH, 'app/resources/guides');
    if (fs.existsSync(guidesDir)) {
        console.log(`- Scanning for expert guides in ${guidesDir}...`);
        const guideFolders = fs.readdirSync(guidesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('['))
            .map(dirent => dirent.name);
        
        console.log(`- Found ${guideFolders.length} guides`);
        guideFolders.forEach(folder => urls.add(`${BASE_URL}/resources/guides/${folder}`));
    }

    // 7. Blog Posts (from JSON)
    try {
        const blogsPath = path.join(DATA_PATH, 'blogs.json');
        if (fs.existsSync(blogsPath)) {
            const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
            console.log(`- Found ${blogs.length} blog posts`);
            blogs.forEach(b => urls.add(`${BASE_URL}/blog/${b.slug}`));
        }
    } catch (e) {
        console.error('Error reading blogs.json:', e.message);
    }

    const finalUrls = Array.from(urls);
    // Add Hindi alternates
    console.log(`- Adding Hindi alternates for ${finalUrls.length} pages...`);
    finalUrls.forEach(url => {
        urls.add(url.replace(BASE_URL, `${BASE_URL}/hi`));
    });

    const totalUrls = Array.from(urls);
    console.log(`📦 Total URLs generated for IndexNow: ${totalUrls.length}`);

    // Submit in batches of 10,000 (IndexNow limit)
    const batchSize = 10000;
    for (let i = 0; i < totalUrls.length; i += batchSize) {
        const batch = totalUrls.slice(i, i + batchSize);
        console.log(`📤 Submitting batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs)...`);

        try {
            const response = await axios.post(`https://${API_HOST}/indexnow`, {
                host: HOST,
                key: KEY,
                keyLocation: KEY_LOCATION,
                urlList: batch,
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                timeout: 30000 // Increased timeout for large batches
            });

            if (response.status === 200 || response.status === 202) {
                console.log(`✅ Success! Batch indexed. (Status: ${response.status})`);
            } else {
                console.warn(`⚠️ Batch submission partially failed. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(`❌ Batch submission failed:`, error.response ? error.response.status : error.message);
            if (error.response && error.response.data) {
                console.error('Response Data:', error.response.data);
            }
        }
    }

    // 8. Search Engine Sitemap Pings
    await pingSearchEngines();

    console.log('🏁 Fast-Track Indexing process complete.');
}

async function pingSearchEngines() {
    console.log('📡 Pinging search engines with the sitemap...');
    const sitemapUrl = `${BASE_URL}/sitemap.xml`;
    const pings = [
        { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
        { name: 'Google', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` }
    ];

    for (const ping of pings) {
        try {
            await axios.get(ping.url);
            console.log(`✅ ${ping.name} notified successfully.`);
        } catch (e) {
            console.warn(`⚠️ ${ping.name} notification failed: ${e.message}`);
        }
    }
}

run();
