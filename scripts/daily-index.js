const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Daily Indexing Process...');

try {
    console.log('\n--- Running Fast Track Indexing (IndexNow/Bing) ---');
    execSync('node ' + path.join(__dirname, 'fast-index.js'), { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Fast Track Indexing encountered an error.');
}

try {
    console.log('\n--- Running Google Indexing API Push ---');
    execSync('node ' + path.join(__dirname, 'push-google-indexing.js'), { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Google Indexing API encountered an error.');
}

console.log('\n🏁 Daily Indexing Process Complete!');
