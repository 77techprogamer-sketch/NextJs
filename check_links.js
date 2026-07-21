const https = require('https');
const http = require('http');

async function checkLinksOnPage(pageUrl) {
    console.log(`Fetching ${pageUrl}...`);
    try {
        const res = await fetch(pageUrl);
        const text = await res.text();
        
        // Extract all hrefs
        const hrefs = [...text.matchAll(/href=["'](.*?)["']/g)].map(m => m[1]);
        
        // Filter internal links
        const internalLinks = new Set();
        for (const href of hrefs) {
            if (href.startsWith('/') && !href.startsWith('//')) {
                internalLinks.add(`http://localhost:3000${href}`);
            } else if (href.startsWith('http://localhost:3000')) {
                internalLinks.add(href);
            }
        }
        
        console.log(`Found ${internalLinks.size} unique internal links on ${pageUrl}`);
        
        const errors = [];
        const checkUrl = (url) => new Promise((resolve) => {
            const protocol = url.startsWith('https') ? https : http;
            const req = protocol.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
                resolve({ url, status: res.statusCode });
            });
            req.on('error', (err) => {
                resolve({ url, status: 0, error: err.message });
            });
            req.on('timeout', () => {
                req.destroy();
                resolve({ url, status: 0, error: 'timeout' });
            });
            req.end();
        });

        const urls = Array.from(internalLinks);
        const batchSize = 50;
        let completed = 0;
        
        for (let i = 0; i < urls.length; i += batchSize) {
            const batch = urls.slice(i, i + batchSize);
            const results = await Promise.all(batch.map(checkUrl));
            
            for (const r of results) {
                if (r.status === 404) {
                    errors.push(r.url);
                    console.log(`404: ${r.url}`);
                }
            }
            completed += batch.length;
        }
        
        return errors;
    } catch (e) {
        console.error(e);
        return [];
    }
}

async function main() {
    const urlsToTest = [
        'http://localhost:3000/',
        'http://localhost:3000/en/locations/us/new-york/new-york'
    ];
    
    let totalErrors = 0;
    for (const url of urlsToTest) {
        const errors = await checkLinksOnPage(url);
        totalErrors += errors.length;
    }
    
    if (totalErrors === 0) {
        console.log('No 404s found in links on tested pages.');
    } else {
        console.log(`Found ${totalErrors} broken internal links.`);
    }
}

main();
