const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const openNext = path.join(ROOT, '.open-next');
const assets = path.join(openNext, 'assets');
const workerDir = path.join(openNext, '_worker.js');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function main() {
  // 1. Create _worker.js directory
  if (fs.existsSync(workerDir)) fs.rmSync(workerDir, { recursive: true, force: true });
  fs.mkdirSync(workerDir, { recursive: true });

  // 2. Copy all code dirs
  for (const d of ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build']) {
    const src = path.join(openNext, d);
    if (fs.existsSync(src)) copyDir(src, path.join(workerDir, d));
  }

  // 3. Copy worker.js -> index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // 4. Copy static assets to root
  if (fs.existsSync(assets)) {
    for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
      const s = path.join(assets, entry.name);
      const d = path.join(openNext, entry.name);
      if (entry.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }

  // 5. _routes.json - route ALL through worker (Pages default)
  // Actually, if _worker.js exists, Pages automatically routes everything
  // through it unless we provide _routes.json with excludes.
  // Let's NOT create _routes.json at all! Pages will use default behavior.
  
  // 6. Add a _headers file for safety
  const headersPath = path.join(openNext, '_headers');
  if (!fs.existsSync(headersPath)) {
    fs.writeFileSync(headersPath, '# Default headers for Next.js');
  }

  console.log('Restructured for Pages');
  console.log('Output root:', fs.readdirSync(openNext));
}

main();