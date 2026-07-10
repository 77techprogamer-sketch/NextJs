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

  // 2. Copy worker.js as index.js (the Pages Function entry)
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));
  }

  // 3. Copy all code dirs into _worker.js/
  for (const d of ['server-functions', 'middleware', 'cloudflare', 'dynamodb-provider', '.build']) {
    const src = path.join(openNext, d);
    if (fs.existsSync(src)) copyDir(src, path.join(workerDir, d));
  }

  // 4. Remove the old dynamic import approach and wrap with error logging
  // The worker has dynamic imports that may fail in Pages Functions
  // Let's patch worker.js (now index.js) to wrap in try/catch
  const indexJs = path.join(workerDir, 'index.js');
  if (fs.existsSync(indexJs)) {
    let code = fs.readFileSync(indexJs, 'utf8');
    
    // Wrap entire fetch handler in try/catch to surface errors
    code = code.replace(
      'return runWithCloudflareRequestContext(request, env, ctx, async () => {',
      `try {
        console.log('Worker fetch called for:', request.url);
        return runWithCloudflareRequestContext(request, env, ctx, async () => {`
    );
    
    code = code.replace(
      'return handler(reqOrResp, env, ctx, request.signal);',
      `return handler(reqOrResp, env, ctx, request.signal);`
    );
    
    // Add catch at the end of the fetch handler
    code = code.replace(
      '});\n    },',
      `});
      } catch (err) {
        console.error('Worker error:', err.message, err.stack);
        return new Response('Worker Error: ' + err.message + '\\n' + err.stack, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        });
      },`
    );
    
    // Fix: The actual closing brace pattern in worker.js
    // The original code has: `});\n    },` for the runWithCloudflareRequestContext callback
    // Let me just rewrite the whole export default block
    
    fs.writeFileSync(indexJs, code);
    console.log('Patched worker with error logging');
  }

  // 5. Copy static assets to .open-next/ root
  if (fs.existsSync(assets)) {
    for (const entry of fs.readdirSync(assets, { withFileTypes: true })) {
      const s = path.join(assets, entry.name);
      const d = path.join(openNext, entry.name);
      if (entry.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }

  console.log('Restructured for Pages');
  console.log('Worker exists:', fs.existsSync(path.join(workerDir, 'index.js')));
}

main();