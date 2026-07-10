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

// 1. Create _worker.js directory
if (fs.existsSync(workerDir)) fs.rmSync(workerDir, { recursive: true, force: true });
fs.mkdirSync(workerDir, { recursive: true });

// 2. Copy all code dirs into _worker.js/
for (const d of ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build']) {
  const src = path.join(openNext, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(workerDir, d));
  }
}

// 3. PATCH middleware/handler.mjs to strip node:buffer and node:async_hooks imports
// These are ESM static imports that resolve at module load time, so they must be
// removed before the module graph is evaluated. Polyfills in index.js won't help.
const middlewareHandler = path.join(workerDir, 'middleware', 'handler.mjs');
if (fs.existsSync(middlewareHandler)) {
  let mw = fs.readFileSync(middlewareHandler, 'utf8');
  mw = mw.replace(/import \{Buffer\} from "node:buffer";\n/g, '// patched: Buffer import removed (use globalThis.Buffer)\n');
  mw = mw.replace(/import \{AsyncLocalStorage\} from "node:async_hooks";\n/g, '// patched: AsyncLocalStorage import removed (use globalThis)\n');
  mw = mw.replace('globalThis.Buffer = Buffer;\n', '');
  mw = mw.replace('globalThis.AsyncLocalStorage = AsyncLocalStorage;\n', '');
  fs.writeFileSync(middlewareHandler, mw);
  console.log('Patched middleware handler.mjs - removed node: imports');
}

// 4. Patch worker.js -> index.js with try/catch
const workerSrc = path.join(openNext, 'worker.js');
if (fs.existsSync(workerSrc)) {
  let code = fs.readFileSync(workerSrc, 'utf8');
  code = code.replace(
    'export default {',
    'export default {'
  );
  const origFetch = 'async fetch(request, env, ctx) {';
  const newFetch = `async fetch(request, env, ctx) {
      try {`;
  code = code.replace(origFetch, newFetch);
  const oldEnd = '    },\n};';
  const newEnd = `    } catch(err) {
        console.log('WORKER_FATAL:', err.message, err.stack);
        return new Response('Worker Error: ' + err.message + '\\n' + err.stack, { status: 500, headers: { 'Content-Type': 'text/plain' } });
      }
    },
};`;
  code = code.replace(oldEnd, newEnd);
  fs.writeFileSync(path.join(workerDir, 'index.js'), code);
  console.log('Worker patched with error handling');
}

// 5. Copy static assets to output root
if (fs.existsSync(assets)) {
  for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
    const s = path.join(assets, entry.name);
    const d = path.join(openNext, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_worker.js') copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

// 6. _routes.json
const routes = {
  version: 1,
  include: ["/*"],
  exclude: [
    "/_next/static/*",
    "/favicon*",
    "/apple-touch-icon*",
    "/*.txt",
    "/robots.txt",
    "/sitemap.xml"
  ]
};
fs.writeFileSync(path.join(openNext, '_routes.json'), JSON.stringify(routes, null, 2));

console.log('Build ready');