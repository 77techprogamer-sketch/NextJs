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

  // Create .open-next/_worker.js/ directory
  const workerDir = path.join(openNext, '_worker.js');
  rmdir(workerDir);
  fs.mkdirSync(workerDir, { recursive: true });
  
  // Routes ALL requests through the worker
  const routesJson = {
    version: 1,
    include: ["/*"],
    exclude: [] // Exclude static assets once worker handles them properly
  };
  fs.writeFileSync(path.join(workerDir, '_routes.json'), JSON.stringify(routesJson, null, 2));
  console.log('Created _routes.json inside _worker.js');

  // Copy worker.js as index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // Copy server-functions, middleware, cloudflare, etc. into _worker.js
  const dirs = ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build'];
  for (const d of dirs) {
    const src = path.join(openNext, d);
    const dest = path.join(workerDir, d);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
    }
  }

  // Copy static assets from .open-next/assets/ to .open-next/ root
  if (fs.existsSync(assets)) {
    for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
      const src = path.join(assets, entry.name);
      const dest = path.join(openNext, entry.name);
      if (entry.isDirectory()) {
        copyDir(src, dest);
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  }

  console.log('Restructured .open-next/ for Cloudflare Pages');
}

restructureForPages();
