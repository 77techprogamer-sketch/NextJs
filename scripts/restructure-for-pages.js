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

// Build config: static export (no worker) or OpenNext (with worker)
var IS_STATIC = false;

if (IS_STATIC) {
  // ====== STATIC EXPORT MODE ======
  if (fs.existsSync(openNext)) fs.rmSync(openNext, { recursive: true, force: true });
  fs.mkdirSync(openNext, { recursive: true });

  // Copy public/
  const pub = path.join(ROOT, 'public');
  if (fs.existsSync(pub)) {
    for (const e of fs.readdirSync(pub, { withFileTypes: true })) {
      const s = path.join(pub, e.name);
      const d = path.join(openNext, e.name);
      if (e.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }

  // Copy .next/static -> _next/static
  const nxtStatic = path.join(ROOT, '.next', 'static');
  const dstStatic = path.join(openNext, '_next', 'static');
  if (fs.existsSync(nxtStatic)) copyDir(nxtStatic, dstStatic);

  console.log('Static export ready at', openNext);

} else {
  // ====== OPEN NEXT WORKER MODE ======
  // 1. Create _worker.js directory
  if (fs.existsSync(workerDir)) fs.rmSync(workerDir, { recursive: true, force: true });
  fs.mkdirSync(workerDir, { recursive: true });

  // 2. Copy worker.js as index.js
  const workerSrc = path.join(openNext, 'worker.js');
  if (fs.existsSync(workerSrc)) {
    fs.copyFileSync(workerSrc, path.join(workerDir, 'index.js'));

    // Patch: add try/catch around the entire handler to surface errors
    let code = fs.readFileSync(path.join(workerDir, 'index.js'), 'utf8');
    
    // Wrap the top-level fetch handler
    code = code.replace(
      "return runWithCloudflareRequestContext(request, env, ctx, async () => {",
      "try {\n  return runWithCloudflareRequestContext(request, env, ctx, async () => {"
    );
    
    // Add catch block
    code = code.replace(
      "return handler(reqOrResp, env, ctx, request.signal);\n        });\n    },",
      "return handler(reqOrResp, env, ctx, request.signal);\n        });\n    } catch (e) {\n        console.log('WORKER_ERROR:', e.message, e.stack);\n        return new Response('Worker Error: ' + e.message + '\\n' + e.stack, { status: 500 });\n    },"
    );
    
    fs.writeFileSync(path.join(workerDir, 'index.js'), code);
  }

  // 3. Copy all code dirs into _worker.js/
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

  // 5. Create _routes.json at output root (alongside _worker.js)
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

  console.log('OpenNext worker build ready at', openNext);
  console.log('Worker exists:', fs.existsSync(path.join(workerDir, 'index.js')));
  console.log('Routes:', JSON.stringify(routes));
}
