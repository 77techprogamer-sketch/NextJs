const https = require('https');

const expectedCode = 'bi-hPLUbWhBDce-KaR7UTDRzD36y1vQa33la1ORxFxSF';

function checkUrl(urlToCheck) {
    console.log(`Checking: ${urlToCheck}`);
    https.get(urlToCheck, (res) => {
        console.log(`Status: ${res.statusCode}`);
        if (res.statusCode >= 300 && res.statusCode < 400) {
            console.log(`Redirects to: ${res.headers.location}`);
            if (res.headers.location) {
                checkUrl(res.headers.location.startsWith('http') ? res.headers.location : `https://insurancesupport.online${res.headers.location}`);
            }
            return;
        }

        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            const regex = /<meta\s+name="google-site-verification"\s+content="([^"]+)"/g;
            let match;
            let found = false;
            while ((match = regex.exec(data)) !== null) {
                console.log(`Found tag: ${match[1]}`);
                if (match[1] === expectedCode) {
                    found = true;
                }
            }

            if (found) {
                console.log('✅ Correct verification tag found.');
            } else {
                console.log('❌ Correct verification tag NOT found.');
            }
        });

    }).on('error', (err) => {
        console.error('Error:', err.message);
    });
}

checkUrl('https://insurancesupport.online');
console.log('---');
checkUrl('https://www.insurancesupport.online');
