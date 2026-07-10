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

// 2. Copy worker.js and patch it to add Buffer/AsyncLocalStorage polyfills
const workerSrc = path.join(openNext, 'worker.js');
if (fs.existsSync(workerSrc)) {
  let code = fs.readFileSync(workerSrc, 'utf8');

  // Inject polyfills at the very top of the worker, before any import
  const polyfills = `
// Workers runtime polyfills for Next.js middleware
globalThis.Buffer = {
  from: (str) => new TextEncoder().encode(str),
  isBuffer: () => false,
  alloc: (size) => new Uint8Array(size),
  allocUnsafe: (size) => new Uint8Array(size),
  byteLength: (str) => new TextEncoder().encode(str).length,
  concat: (buffers) => {
    const total = buffers.reduce((acc, b) => acc + b.length, 0);
    const result = new Uint8Array(total);
    let offset = 0;
    for (const b of buffers) { result.set(b, offset); offset += b.length; }
    return result;
  }
};
globalThis.TextEncoder = globalThis.TextEncoder || class { encode(str) { return new Uint8Array(Array.from(str).map(c => c.charCodeAt(0))); } };
globalThis.TextDecoder = globalThis.TextDecoder || class { decode(buf) { return Array.from(buf).map(b => String.fromCharCode(b)).join(''); } };

// AsyncLocalStorage - Cloudflare Workers does not support it
// Provide a no-op stub so imports don't crash
if (!globalThis.AsyncLocalStorage) {
  globalThis.AsyncLocalStorage = class {
    getStore() { return undefined; }
    run(store, fn, ...args) { return fn(...args); }
    enterWith(store) {}
    exit(fn, ...args) { return fn(...args); }
  };
}

if (!globalThis.process) {
  globalThis.process = { env: {}, argv: [], stdout: { write: () => {} }, stderr: { write: () => {} } };
}
if (!process.env) process.env = {};

`;
  code = polyfills + '\n' + code;

  // Wrap the fetch handler in try/catch for better error surfacing
  code = code.replace(
    'export default {',
    'export default {'
  );
  
  // Inject try/catch in the fetch handler
  const origFetch = 'async fetch(request, env, ctx) {';
  const newFetch = `async fetch(request, env, ctx) {
      try {`;
  
  code = code.replace(origFetch, newFetch);
  
  // Close the try block at the end
  const oldEnd = '    },\n};';
  const newEnd = `    } catch(err) {
        console.log('WORKER_FATAL:', err.message, err.stack);
        return new Response('Worker Error: ' + err.message, { status: 500, headers: { 'Content-Type': 'text/plain' } });
      }
    },
};`;
  code = code.replace(oldEnd, newEnd);

  fs.writeFileSync(path.join(workerDir, 'index.js'), code);
  console.log('Worker patched with Buffer/AsyncLocalStorage polyfills');
}

// 3. Copy all code dirs into _worker.js/ (including middleware - now it will work)
for (const d of ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build']) {
  const src = path.join(openNext, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(workerDir, d));
  }
}

// 4. Copy static assets to output root
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

// 5. _routes.json - route all through worker
const routes = {
  version: 1,
  include: ["/*"],
  exclude: [
    "/_next/static/*",
    "/_next/image/*",
    "/favicon*",
    "/apple-touch-icon*",
    "/*.txt",
    "/robots.txt",
    "/sitemap.xml"
  ]
};
fs.writeFileSync(path.join(openNext, '_routes.json'), JSON.stringify(routes, null, 2));

console.log('Build ready');
console.log('Worker has polyfills:', fs.readFileSync(path.join(workerDir, 'index.js'), 'utf8').startsWith('// Workers'));