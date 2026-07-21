const https = require('https');

async function check() {
  try {
    const res = await fetch('https://insurancesupport.online/sitemap.xml');
    const text = await res.text();
    const urls = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    console.log(`Checking ${urls.length} URLs from sitemap...`);

    const batchSize = 100;
    const errors = [];
    
    // Custom fetch function that uses https directly to avoid connection limits and speed up
    const checkUrl = (url) => new Promise((resolve) => {
        const req = https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
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

    let completed = 0;
    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const results = await Promise.all(batch.map(checkUrl));
        
        for (const r of results) {
            if (r.status === 404) {
                errors.push(r.url);
                console.log(`404: ${r.url}`);
            } else if (r.status === 0 || r.status >= 500) {
                // Also track other errors just in case
                console.log(`${r.status === 0 ? 'Error' : r.status}: ${r.url} ${r.error || ''}`);
            }
        }
        completed += batch.length;
        if (completed % 500 === 0 || completed === urls.length) {
            console.log(`Progress: ${completed}/${urls.length}`);
        }
    }

    console.log('--- Summary ---');
    if (errors.length === 0) {
        console.log('No 404 errors found!');
    } else {
        console.log(`Found ${errors.length} URLs with 404 errors.`);
        require('fs').writeFileSync('404_errors.txt', errors.join('\n'));
        console.log('Wrote 404 errors to 404_errors.txt');
    }
  } catch(e) {
    console.error(e);
  }
}
check();
