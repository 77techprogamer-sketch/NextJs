const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function rmdir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function restructureForPages() {
  const openNext = path.join(ROOT, '.open-next');
  const assets = path.join(openNext, 'assets');

  // 1. Copy all static assets from .open-next/assets/ to .open-next/
  // But skip _worker.js if it already exists at root (it shouldnt)
  if (fs.existsSync(assets)) {
    for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
      const src = path.join(assets, entry.name);
      const dest = path.join(openNext, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '_worker.js') {
          // merge _worker.js contents
          copyDir(src, dest);
        } else {
          copyDir(src, dest);
        }
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  }

  // 2. Create .open-next/_worker.js/ directory
  const workerDir = path.join(openNext, '_worker.js');
  rmdir(workerDir);
  fs.mkdirSync(workerDir, { recursive: true });

  // Copy worker.js as index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // 3. Copy server-functions, middleware, cloudflare, dynamodb-provider into _worker.js
  const dirs = ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build'];
  for (const d of dirs) {
    const src = path.join(openNext, d);
    const dest = path.join(workerDir, d);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
    }
  }

  console.log('Restructured .open-next/ for Cloudflare Pages');
  console.log('Worker dir contents:', fs.readdirSync(workerDir));
}

restructureForPages();