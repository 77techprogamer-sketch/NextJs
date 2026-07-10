const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const openNext = path.join(ROOT, '.open-next');

// Clean
if (fs.existsSync(openNext)) fs.rmSync(openNext, { recursive: true, force: true });
fs.mkdirSync(openNext, { recursive: true });

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// 1. Copy public/
const pub = path.join(ROOT, 'public');
if (fs.existsSync(pub)) {
  for (const e of fs.readdirSync(pub, { withFileTypes: true })) {
    const s = path.join(pub, e.name);
    const d = path.join(openNext, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// 2. Copy .next/static -> _next/static
const nxtStatic = path.join(ROOT, '.next', 'static');
const dstStatic = path.join(openNext, '_next', 'static');
copyDir(nxtStatic, dstStatic);

// 3. Copy BUILD_ID
const bid = path.join(ROOT, '.next', 'BUILD_ID');
if (fs.existsSync(bid)) fs.copyFileSync(bid, path.join(openNext, 'BUILD_ID'));

// 4. Find .html files from .next/server/app/ and copy to root
function getHtmlFiles(dir, baseDir = '') {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results = results.concat(getHtmlFiles(full, path.join(baseDir, e.name)));
    } else if (e.name === 'index.html' && baseDir) {
      // Map directory/index.html -> /directory.html
      results.push({ src: full, dest: path.join(openNext, baseDir + '.html') });
    } else if (e.name.endsWith('.html') && !e.name.startsWith('_')) {
      results.push({ src: full, dest: path.join(openNext, e.name) });
    }
  }
  return results;
}

const pages = getHtmlFiles(path.join(ROOT, '.next', 'server', 'app'));
for (const p of pages) {
  fs.copyFileSync(p.src, p.dest);
  console.log('Copied:', path.basename(p.dest));
}

// 5. Create _redirects for Netlify SPA fallback
const redirects = [
  '/*    /200.html   200',
  '/_next/static/*   /_next/static/:splat   200'
].join('\n');
fs.writeFileSync(path.join(openNext, '_redirects'), redirects);

console.log('Netlify build ready');
console.log('Files:', fs.readdirSync(openNext).slice(0, 25));