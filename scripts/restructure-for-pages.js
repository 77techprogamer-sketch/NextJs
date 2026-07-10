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

// Copy public/
const pub = path.join(ROOT, 'public');
copyDir(pub, openNext);

// Copy .next/static -> _next/static
const nxtStatic = path.join(ROOT, '.next', 'static');
const dstStatic = path.join(openNext, '_next', 'static');
copyDir(nxtStatic, dstStatic);

// Copy BUILD_ID
const bid = path.join(ROOT, '.next', 'BUILD_ID');
if (fs.existsSync(bid)) fs.copyFileSync(bid, path.join(openNext, 'BUILD_ID'));

// Find all generated static HTML pages from .next/server/app/ and .next/server/pages/
// and copy them to the root
function findAndCopyPages(dir, dest) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      findAndCopyPages(full, dest);
    } else if (e.name === 'index.html') {
      const parent = path.basename(dir);
      if (parent !== 'app') {
        fs.copyFileSync(full, path.join(dest, parent + '.html'));
        console.log('Page:', parent + '.html');
      }
    } else if (e.name.endsWith('.html')) {
      fs.copyFileSync(full, path.join(dest, e.name));
      console.log('Page:', e.name);
    }
  }
}

findAndCopyPages(path.join(ROOT, '.next', 'server', 'app'), openNext);
findAndCopyPages(path.join(ROOT, '.next', 'server', 'pages'), openNext);

// Create a simple index.html as redirect
fs.writeFileSync(path.join(openNext, 'index.html'), '<!DOCTYPE html><html><head><title>Insurance Support</title></head><body><p>Loading...</p></body></html>');

console.log('Done. Output:', fs.readdirSync(openNext).slice(0,15));