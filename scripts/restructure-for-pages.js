const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const out = path.join(ROOT, '.open-next');

function copyDir(src, dest, filter = null) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (filter && !filter(e.name)) continue;
    const sp = path.join(src, e.name);
    const dp = path.join(dest, e.name);
    if (e.isDirectory()) copyDir(sp, dp, filter);
    else fs.copyFileSync(sp, dp);
  }
}

// Clean
if (fs.existsSync(out)) fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

// Copy public/
const pub = path.join(ROOT, 'public');
if (fs.existsSync(pub)) {
  for (const e of fs.readdirSync(pub, { withFileTypes: true })) {
    const sp = path.join(pub, e.name);
    const dp = path.join(out, e.name);
    if (e.isDirectory()) copyDir(sp, dp);
    else fs.copyFileSync(sp, dp);
  }
}

// Copy .next/static -> _next/static
const nxtStatic = path.join(ROOT, '.next', 'static');
const dstStatic = path.join(out, '_next', 'static');
if (fs.existsSync(nxtStatic)) copyDir(nxtStatic, dstStatic);

// Copy BUILD_ID
const buildId = path.join(ROOT, '.next', 'BUILD_ID');
if (fs.existsSync(buildId)) fs.copyFileSync(buildId, path.join(out, 'BUILD_ID'));

// Copy .next/server/app/ pages (HTML)
// These are the generated static pages
const routesJson = {
    version: 1,
    include: ['/*'],
    exclude: []
  };
  fs.writeFileSync(path.join(out, '_routes.json'), JSON.stringify(routesJson, null, 2));
  console.log('Created _routes.json for static routing');
