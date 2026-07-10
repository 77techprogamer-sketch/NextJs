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

  // 1. Create _routes.json at the output root
  // Routes ALL requests through the worker (Next.js handles static internally)
  const routesJson = {
    version: 1,
    include: ["/*"],
    exclude: []
  };
  fs.writeFileSync(path.join(openNext, '_routes.json'), JSON.stringify(routesJson, null, 2));
  console.log('Created _routes.json');

  // 2. Create .open-next/_worker.js/ directory (Pages Functions convention)
  const workerDir = path.join(openNext, '_worker.js');
  rmdir(workerDir);
  fs.mkdirSync(workerDir, { recursive: true });

  // Copy worker.js as index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // 3. Copy server-functions, middleware, cloudflare, dynamodb-provider into _worker.js
  // The worker.js imports use relative paths like ./cloudflare/images.js
  // so these dirs must live inside _worker.js/
  const dirs = ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build'];
  for (const d of dirs) {
    const src = path.join(openNext, d);
    const dest = path.join(workerDir, d);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
    }
  }

  // 4. Copy static assets from .open-next/assets/ to .open-next/ root
  // These are served directly by Pages CDN
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
  console.log('Output root contents:', fs.readdirSync(openNext));
  console.log('Worker dir contents:', fs.readdirSync(workerDir));
}

restructureForPages();
