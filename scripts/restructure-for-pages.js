const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const openNext = path.join(ROOT, '.open-next');
const assets = path.join(openNext, 'assets');
const workerDir = path.join(openNext, '_worker.js');

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

// 1. Create _worker.js directory
if (fs.existsSync(workerDir)) fs.rmSync(workerDir, { recursive: true, force: true });
fs.mkdirSync(workerDir, { recursive: true });

// 2. Patch middleware handler.mjs BEFORE copying — strip node: imports
const mwSrc = path.join(openNext, 'middleware', 'handler.mjs');
if (fs.existsSync(mwSrc)) {
  let mw = fs.readFileSync(mwSrc, 'utf8');
  mw = mw.replace(/import \{Buffer\} from "node:buffer";\n?/g, '');
  mw = mw.replace(/import \{AsyncLocalStorage\} from "node:async_hooks";\n?/g, '');
  mw = mw.replace(/globalThis\.Buffer = Buffer;\n?/g, '');
  mw = mw.replace(/globalThis\.AsyncLocalStorage = AsyncLocalStorage;\n?/g, '');
  fs.writeFileSync(mwSrc, mw);
  console.log('Patched middleware/handler.mjs');
}

// 3. Copy all code dirs into _worker.js
for (const d of ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build']) {
  const src = path.join(openNext, d);
  if (fs.existsSync(src)) copyDir(src, path.join(workerDir, d));
}

// 4. Copy worker.js -> _worker.js/index.js with fetch() error handling
const workerSrc = path.join(openNext, 'worker.js');
if (fs.existsSync(workerSrc)) {
  let code = fs.readFileSync(workerSrc, 'utf8');
  // Wrap fetch in try/catch so runtime errors surface as 500
  code = code.replace(
    'async fetch(request, env, ctx) {',
    `async fetch(request, env, ctx) {
      try {`
  );
  code = code.replace('    },\n};', `    } catch(err) {
        console.error('WORKER_FATAL:', err.message, err.stack);
        return new Response('Worker Error: ' + err.message + '\\n' + err.stack, { status: 500, headers: { 'Content-Type': 'text/plain' } });
      }
    },
};`);
  fs.writeFileSync(path.join(workerDir, 'index.js'), code);
  console.log('Worker patched with error handling');
}

// 5. Copy static assets to .open-next/ root
if (fs.existsSync(assets)) {
  for (const e of fs.readdirSync(assets, { withFileTypes: true })) {
    const s = path.join(assets, e.name);
    const d = path.join(openNext, e.name);
    if (e.isDirectory() && e.name !== '_worker.js') copyDir(s, d);
    else if (!e.isDirectory()) fs.copyFileSync(s, d);
  }
}

// 6. _routes.json: route everything through the worker
fs.writeFileSync(path.join(openNext, '_routes.json'), JSON.stringify({
  version: 1,
  include: ["/*"],
  exclude: []
}, null, 2));

console.log('OpenNext build ready for Pages');
console.log('Worker exists:', fs.existsSync(path.join(workerDir, 'index.js')));
console.log('_routes.json created');