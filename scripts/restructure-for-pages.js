const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

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

  // Step 1: Create _worker.js directory for the Pages Function
  const workerDir = path.join(openNext, '_worker.js');
  if (fs.existsSync(workerDir)) {
    fs.rmSync(workerDir, { recursive: true, force: true });
  }
  fs.mkdirSync(workerDir, { recursive: true });

  // Step 2: Copy ALL code directories into _worker.js/
  const codeDirs = ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build'];
  for (const d of codeDirs) {
    const src = path.join(openNext, d);
    const dest = path.join(workerDir, d);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
    }
  }

  // Step 3: Copy worker.js as _worker.js/index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // Step 4: Create _routes.json beside _worker.js (not inside it)
  // This is important - _routes.json lives at the output root, NOT inside _worker.js
  // See: https://developers.cloudflare.com/pages/functions/routing/
  const routesJson = {
    version: 1,
    include: ["/*"],
    exclude: [
      "/_next/static/*",
      "/_next/image/*",
      "/robots.txt",
      "/sitemap.xml",
      "/favicon.ico",
      "/favicon.png",
      "/apple-touch-icon.png",
      "/favicon.svg",
      "/manifest.webmanifest",
      "/manifest.json",
      "/og-image.png",
      "/*.txt",
      "/*.jpg",
      "/*.jpeg",
      "/*.png",
      "/*.gif",
      "/*.svg",
      "/*.ico",
      "/*.webp",
      "/*.avif",
      "/*.css",
      "/*.js",
      "/*.json",
    ]
  };
  fs.writeFileSync(path.join(openNext, '_routes.json'), JSON.stringify(routesJson, null, 2));
  console.log('Created _routes.json at output root');

  // Step 5: Copy static assets from .open-next/assets/ to .open-next/ root
  if (fs.existsSync(assets)) {
    for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
      const src = path.join(assets, entry.name);
      const dest = path.join(openNext, entry.name);
      if (entry.isDirectory() && entry.name === '_worker.js') continue;
      if (entry.isDirectory()) {
        copyDir(src, dest);
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  }

  console.log('Restructure complete');
  console.log('Output contents:', fs.readdirSync(openNext));
  console.log('Worker contents:', fs.readdirSync(workerDir));
}

restructureForPages();