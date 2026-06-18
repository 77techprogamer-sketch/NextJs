
/**
 * SEO Batch Submission Script for insurancesupport.online
 * 
 * Methods:
 * 1. IndexNow (Bing/Yandex) - requires verified key
 * 2. Google Search Console sitemap resubmission
 * 3. Logs all results
 * 
 * Run: node scripts/seo-batch-submit.js
 * Cron: Daily at 11:00 AM IST
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'insurancesupport.online';
const INDEXNOW_KEY = '71a80a3568ae5d1d945fda3ef57fe18e';
const BASE_URL = `https://${HOST}`;

const blogsPath = path.join(__dirname, '..', 'src', 'data', 'blogs.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

function getAllUrls() {
  const blogUrls = blogs.map(post => `${BASE_URL}/blog/${post.slug}`);
  const pageUrls = [
    BASE_URL,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/services`,
    `${BASE_URL}/resources`,
    `${BASE_URL}/resources/claim-checklist`,
    `${BASE_URL}/resources/guides`,
    `${BASE_URL}/support`,
    `${BASE_URL}/locations`,
  ];
  return [...pageUrls, ...blogUrls];
}

function postUrl(url, data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
      },
      timeout: 30000,
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
    req.write(body);
    req.end();
  });
}

async function submitToIndexNow(urls) {
  const success = [], failed = [], errors = [];
  
  // Submit in batches of 10 with 2-second delays
  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    const batchNum = Math.floor(i / 10) + 1;
    
    try {
      const res = await postUrl('https://api.indexnow.org/indexnow', {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      });
      
      if (res.status >= 200 && res.status < 300) {
        batch.forEach(url => success.push(url));
        console.log(`  [IndexNow] Batch ${batchNum}: ${batch.length} OK`);
      } else {
        batch.forEach(url => failed.push(url));
        const errMsg = `Batch ${batchNum}: ${res.status}`;
        errors.push(errMsg);
        console.error(`  [IndexNow] ${errMsg}`);
      }
    } catch (err) {
      batch.forEach(url => failed.push(url));
      errors.push(`Batch ${batchNum}: ${err.message}`);
    }
    
    if (i + 10 < urls.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  
  return { success, failed, errors };
}

async function main() {
  console.log(`\n[${new Date().toISOString()}] SEO Batch Submission`);
  console.log(`  URLs: ${getAllUrls().length} (${blogs.length} blog posts)`);
  
  const urls = getAllUrls();
  
  // Submit to IndexNow
  console.log('\n  Submitting to IndexNow...');
  const { success, failed, errors } = await submitToIndexNow(urls);
  
  // Summary
  console.log(`\n  === RESULTS ===`);
  console.log(`  Success: ${success.length}`);
  console.log(`  Failed: ${failed.length}`);
  if (errors.length > 0) {
    console.log(`  Note: ${errors[errors.length - 1]}`);
    console.log(`  Action: Verify key at https://www.indexnow.org/`);
  }
  console.log(`[${new Date().toISOString()}] Done\n`);
  
  // Log
  const logDir = path.join(__dirname, '..', 'logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
  fs.appendFileSync(path.join(logDir, 'seo-submissions.log'),
    JSON.stringify({ timestamp: new Date().toISOString(), total: urls.length, success: success.length, failed: failed.length }) + '\n'
  );
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
