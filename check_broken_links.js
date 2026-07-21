/**
 * Broken Link Checker — insurancesupport.online
 *
 * Strategy:
 *  1. Seed with homepage + sitemap URLs
 *  2. For every visited page, extract all <a href> links
 *  3. Check each internal link (HEAD request) and record status
 *  4. Follow 2xx/3xx internal pages up to MAX_PAGES depth
 *  5. Write report to broken_links_report.json + broken_links_summary.txt
 */

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const { URL } = require('url');

// ─── Config ────────────────────────────────────────────────────────────────
const BASE_URL    = 'https://insurancesupport.online';
const MAX_PAGES   = 1000;  // max pages to crawl
const CONCURRENCY = 100;    // high concurrency for speed
const TIMEOUT_MS  = 10000;
// ────────────────────────────────────────────────────────────────────────────

const visited   = new Set();   // pages we have crawled
const checked   = new Set();   // links we have HEAD-checked
const broken    = [];          // { url, status, foundOn }
const redirects = [];          // { url, status, location, foundOn }
const queue     = [];          // pages to crawl next

// ── helpers ─────────────────────────────────────────────────────────────────

function normalise(href, base) {
  try {
    const u = new URL(href, base);
    // strip hash, trailing slash normalisation
    u.hash = '';
    return u.href;
  } catch { return null; }
}

function isInternal(url) {
  try {
    return new URL(url).hostname === new URL(BASE_URL).hostname;
  } catch { return false; }
}

function isHtmlPage(url) {
  return !/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|eot|pdf|xml|json|txt|mp4|mp3|zip)(\?.*)?$/i.test(url);
}

function headRequest(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const timer = setTimeout(() => { req.destroy(); resolve({ url, status: 0, error: 'timeout' }); }, TIMEOUT_MS);
    const req = mod.request(url, { method: 'HEAD' }, (res) => {
      clearTimeout(timer);
      resolve({ url, status: res.statusCode, location: res.headers['location'] });
    });
    req.on('error', (e) => { clearTimeout(timer); resolve({ url, status: 0, error: e.message }); });
    req.end();
  });
}

async function fetchHtml(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const timer = setTimeout(() => { req.destroy(); resolve(null); }, TIMEOUT_MS * 2);
    const req = mod.get(url, (res) => {
      if (res.statusCode >= 400) { clearTimeout(timer); res.resume(); resolve(null); return; }
      // follow one redirect
      if (res.statusCode >= 300 && res.headers.location) {
        clearTimeout(timer); res.resume();
        const next = normalise(res.headers.location, url);
        if (next && isInternal(next)) fetchHtml(next).then(resolve);
        else resolve(null);
        return;
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (c) => { body += c; if (body.length > 1_500_000) res.destroy(); });
      res.on('end', () => { clearTimeout(timer); resolve(body); });
      res.on('error', () => { clearTimeout(timer); resolve(null); });
    });
    req.on('error', () => { clearTimeout(timer); resolve(null); });
  });
}

function extractLinks(html, pageUrl) {
  const links = new Set();
  const re = /href\s*=\s*["']([^"'#\s][^"'\s]*)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith('javascript:') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.includes('/cdn-cgi/')) continue;
    const abs = normalise(raw, pageUrl);
    if (abs) links.add(abs);
  }
  return links;
}

async function checkBatch(urls, sourceUrl) {
  const items = [...urls];
  for (let i = 0; i < items.length; i += CONCURRENCY) {
    const batch = items.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(headRequest));
    for (const r of results) {
      if (r.status === 404 || r.status === 410 || r.status >= 500) {
        broken.push({ url: r.url, status: r.status, foundOn: sourceUrl });
        console.log(`  ❌ ${r.status}: ${r.url}`);
      } else if (r.status === 0) {
        broken.push({ url: r.url, status: 'ERROR', error: r.error, foundOn: sourceUrl });
        console.log(`  ⚠️  ERR: ${r.url} — ${r.error}`);
      } else if (r.status >= 300 && r.status < 400) {
        redirects.push({ url: r.url, status: r.status, location: r.location, foundOn: sourceUrl });
      }
    }
  }
}

// ── Seed from sitemap ────────────────────────────────────────────────────────
async function getSitemapUrls() {
  const urls = [];
  try {
    const sitemapIndex = await fetchHtml(`${BASE_URL}/sitemap.xml`);
    if (!sitemapIndex) return urls;

    // detect sitemap index
    const subSitemaps = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map(m => m[1].trim())
      .filter(u => u.includes('sitemap'));

    if (subSitemaps.length) {
      console.log(`Found ${subSitemaps.length} sub-sitemaps, processing all...`);
      for (const sm of subSitemaps) {
        const smText = await fetchHtml(sm);
        if (smText) {
          const found = [...smText.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
          urls.push(...found);
        }
      }
    } else {
      const found = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
      urls.push(...found);
    }
  } catch (e) {
    console.warn('Could not read sitemap:', e.message);
  }
  return urls;
}

// ── Main crawler ─────────────────────────────────────────────────────────────
async function crawl() {
  console.log(`\n🔍 Broken Link Checker — ${BASE_URL}`);
  console.log(`   Max pages: ${MAX_PAGES} | Concurrency: ${CONCURRENCY}\n`);

  // Seed queue
  queue.push(BASE_URL + '/');

  // Also seed important structural pages
  const seedPages = [
    '/', '/en', '/about', '/contact', '/blog',
    '/insurance', '/health-insurance', '/life-insurance',
    '/lic', '/sitemap.xml',
  ];
  for (const p of seedPages) queue.push(BASE_URL + p);

  // Seed all URLs from sitemap
  const sitemapUrls = await getSitemapUrls();
  console.log(`Seeded ${sitemapUrls.length} URLs from sitemap...`);
  for (const u of sitemapUrls) {
    if (isInternal(u) && isHtmlPage(u)) queue.push(u);
  }

  // BFS crawl
  while (queue.length > 0 && visited.size < MAX_PAGES) {
    const pageUrl = queue.shift();
    if (visited.has(pageUrl)) continue;
    visited.add(pageUrl);

    process.stdout.write(`\n[${visited.size}/${MAX_PAGES}] Crawling: ${pageUrl}\n`);

    const html = await fetchHtml(pageUrl);
    if (!html) continue;

    const links = extractLinks(html, pageUrl);
    const internalLinks  = new Set();
    const externalLinks  = new Set();

    for (const link of links) {
      if (isInternal(link)) {
        internalLinks.add(link);
        // Enqueue HTML pages we haven't visited
        if (isHtmlPage(link) && !visited.has(link) && !queue.includes(link)) {
          queue.push(link);
        }
      } else {
        externalLinks.add(link);
      }
    }

    // Check all links on this page (internal + sample external)
    const toCheck = new Set();
    for (const u of internalLinks) {
      if (!checked.has(u)) { toCheck.add(u); checked.add(u); }
    }
    // Check up to 10 external links per page (avoid hammering third parties)
    let extCount = 0;
    for (const u of externalLinks) {
      if (extCount >= 10) break;
      if (!checked.has(u)) { toCheck.add(u); checked.add(u); extCount++; }
    }

    if (toCheck.size > 0) {
      console.log(`  → Checking ${toCheck.size} links (${internalLinks.size} internal, ${Math.min(extCount, externalLinks.size)} external)`);
      await checkBatch(toCheck, pageUrl);
    }
  }

  // ── Report ─────────────────────────────────────────────────────────────────
  console.log('\n\n════════════════════════════════════════════════════════');
  console.log(`  BROKEN LINK REPORT`);
  console.log(`════════════════════════════════════════════════════════`);
  console.log(`  Pages crawled : ${visited.size}`);
  console.log(`  Links checked : ${checked.size}`);
  console.log(`  Broken links  : ${broken.length}`);
  console.log(`  Redirects     : ${redirects.length}`);
  console.log('════════════════════════════════════════════════════════\n');

  // Group broken by source page
  const byPage = {};
  for (const b of broken) {
    (byPage[b.foundOn] = byPage[b.foundOn] || []).push(b);
  }

  if (broken.length > 0) {
    console.log('BROKEN LINKS:\n');
    for (const [page, items] of Object.entries(byPage)) {
      console.log(`  Source: ${page}`);
      for (const b of items) {
        console.log(`    ${b.status}: ${b.url}`);
      }
      console.log('');
    }
  } else {
    console.log('✅ No broken links found!\n');
  }

  // Write JSON report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    pagesCrawled: visited.size,
    linksChecked: checked.size,
    brokenCount: broken.length,
    redirectCount: redirects.length,
    broken,
    redirects: redirects.slice(0, 100),  // cap for readability
  };
  fs.writeFileSync('broken_links_report.json', JSON.stringify(report, null, 2));

  // Write human-readable summary
  let summary = `Broken Link Audit — ${BASE_URL}\nRun: ${new Date().toISOString()}\n\n`;
  summary += `Pages crawled : ${visited.size}\nLinks checked : ${checked.size}\nBroken links  : ${broken.length}\nRedirects     : ${redirects.length}\n\n`;
  if (broken.length > 0) {
    summary += 'BROKEN LINKS:\n\n';
    for (const [page, items] of Object.entries(byPage)) {
      summary += `Source: ${page}\n`;
      for (const b of items) summary += `  [${b.status}] ${b.url}\n`;
      summary += '\n';
    }
  } else {
    summary += 'No broken links found.\n';
  }
  if (redirects.length > 0) {
    summary += '\nREDIRECTS (first 50):\n';
    for (const r of redirects.slice(0, 50)) {
      summary += `  [${r.status}] ${r.url} → ${r.location || '?'}\n`;
    }
  }
  fs.writeFileSync('broken_links_summary.txt', summary);

  console.log('Reports saved:');
  console.log('  broken_links_report.json');
  console.log('  broken_links_summary.txt');
}

crawl().catch(console.error);
