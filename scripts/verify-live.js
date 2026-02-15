const https = require('https');

const url = 'https://insurancesupport.online';
const verificationCode = 'bi-hPLUbWhBDce-KaR7UTDRzD36y1vQa33la1ORxFxSF';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        if (data.includes(verificationCode)) {
            console.log('✅ SUCCESS: Live site HAS the verification code.');
        } else {
            console.log('❌ FAILURE: Live site DOES NOT HAVE the verification code.');
            // Check for old code
            if (data.includes('UvNqMHYqn8D-knp1S1Fg7xjO73SQ0U_LW3i5osu6Pac')) {
                console.log('⚠️  The site still has the OLD verification code.');
            }
        }
    });

}).on('error', (err) => {
    console.error('Error fetching site:', err.message);
});
