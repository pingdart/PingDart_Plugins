const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || '4026', 10);
const HOST = process.env.HOST || '0.0.0.0';
const OUT_DIR = path.resolve(__dirname, '../out');
const SRC_DIR = path.resolve(__dirname, '../src');
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4025';
const IS_DEV = process.argv.includes('--dev') || process.env.NODE_ENV === 'development';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

// ── SSE Live-Reload Clients (Dev Mode) ──────────────────────────────────────
const devClients = new Set();

function broadcastReload() {
  if (!IS_DEV || devClients.size === 0) return;
  for (const res of devClients) {
    try {
      res.write('data: reload\n\n');
    } catch (_) {
      devClients.delete(res);
    }
  }
}

// ── Transpile & Watch Custom Developer Modules (Dev Mode) ────────────────────
let customModuleBundle = '';

function compileCustomModules() {
  const customDir = path.join(SRC_DIR, 'modules/custom');
  if (!fs.existsSync(customDir)) return;

  try {
    let ts;
    try {
      ts = require('typescript');
    } catch (_) {}

    const files = fs.readdirSync(customDir);
    let bundled = '/* PingDart Developer Custom Module Dev Bundle */\n';
    bundled += 'window.__PD_CUSTOM_MODULES__ = window.__PD_CUSTOM_MODULES__ || {};\n';

    files.forEach((f) => {
      const fPath = path.join(customDir, f);
      if (fs.statSync(fPath).isFile() && (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js'))) {
        const raw = fs.readFileSync(fPath, 'utf8');
        let code = raw;
        if (ts && (f.endsWith('.tsx') || f.endsWith('.ts'))) {
          code = ts.transpileModule(raw, {
            compilerOptions: {
              jsx: ts.JsxEmit.React,
              module: ts.ModuleKind.None,
              target: ts.ScriptTarget.ES2020,
              removeComments: false
            }
          }).outputText;
        }
        bundled += `\n/* File: ${f} */\n(function(){\n${code}\n})();\n`;
      }
    });

    customModuleBundle = bundled;
    const outDevDir = path.join(OUT_DIR, '_custom_dev');
    if (!fs.existsSync(outDevDir)) fs.mkdirSync(outDevDir, { recursive: true });
    fs.writeFileSync(path.join(outDevDir, 'custom_module.js'), bundled, 'utf8');
    console.log(`  [Dev Mode] Recompiled custom screens from src/modules/custom (${files.length} files)`);
  } catch (err) {
    console.warn(`  [Dev Mode] Module compilation warning: ${err.message}`);
  }
}

if (IS_DEV) {
  compileCustomModules();

  const customDir = path.join(SRC_DIR, 'modules/custom');
  if (fs.existsSync(customDir)) {
    try {
      let debounceTimer = null;
      fs.watch(customDir, { recursive: true }, (event, filename) => {
        if (!filename) return;
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          console.log(`  [Dev Mode] Detected change in custom screen: ${filename}`);
          compileCustomModules();
          broadcastReload();
        }, 150);
      });
      console.log(`  👀 Watching src/modules/custom for live developer screen changes...`);
    } catch (err) {
      console.warn(`  ⚠️ Could not watch src/modules/custom: ${err.message}`);
    }
  }
}

// ── HTML Injector for Dev Live-Reload & Custom Screens ──────────────────────
const DEV_RELOAD_SNIPPET = `
<!-- PingDart Developer Dev Mode Script -->
<script id="__pd_dev_reload__">
(function() {
  try {
    const es = new EventSource('/__pd_dev_reload');
    es.onmessage = function(e) {
      if (e.data === 'reload') {
        console.log('[PingDart Dev] Screen change detected! Reloading browser...');
        window.location.reload();
      }
    };
    console.log('%c[PingDart Dev Mode]%c Live screen reload active on port ${PORT}', 'color: #6366f1; font-weight: bold;', 'color: auto;');
  } catch (_) {}
})();
</script>
<script src="/_custom_dev/custom_module.js" onerror="this.remove()"></script>
`;

function injectDevScript(html) {
  if (!IS_DEV) return html;
  if (html.includes('</body>')) {
    return html.replace('</body>', `${DEV_RELOAD_SNIPPET}</body>`);
  }
  return html + DEV_RELOAD_SNIPPET;
}

// ── URL Static File Resolver ────────────────────────────────────────────────
function resolveStaticFile(urlPath) {
  let cleanPath = urlPath.split('?')[0];
  if (cleanPath.endsWith('/') && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Handle custom dev bundle
  if (cleanPath === '/_custom_dev/custom_module.js') {
    const devBundlePath = path.join(OUT_DIR, '_custom_dev/custom_module.js');
    if (fs.existsSync(devBundlePath)) return devBundlePath;
  }

  const direct = path.join(OUT_DIR, cleanPath);

  // 1. Direct file
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) {
    return direct;
  }

  // 2. Directory with index.html
  if (fs.existsSync(direct) && fs.statSync(direct).isDirectory()) {
    const idx = path.join(direct, 'index.html');
    if (fs.existsSync(idx)) return idx;
  }

  // 3. cleanPath + .html (e.g. /user -> /user.html, /portal -> /portal.html)
  if (fs.existsSync(direct + '.html')) {
    return direct + '.html';
  }

  // 4. Portal Apps dynamic route fallback (e.g. /portal/apps/custom)
  if (cleanPath.startsWith('/portal/apps/')) {
    const portalAppsDefault = path.join(OUT_DIR, 'portal/apps/default.html');
    if (fs.existsSync(portalAppsDefault)) return portalAppsDefault;
    const portalDefault = path.join(OUT_DIR, 'portal.html');
    if (fs.existsSync(portalDefault)) return portalDefault;
  }

  // 5. Nested dynamic folder fallback
  const parts = cleanPath.split('/').filter(Boolean);
  if (parts.length > 0) {
    const parentDir = path.join(OUT_DIR, parts[0]);
    if (fs.existsSync(parentDir) && fs.statSync(parentDir).isDirectory()) {
      const parentIdx = path.join(parentDir, 'index.html');
      if (fs.existsSync(parentIdx)) return parentIdx;
    }
    const parentHtml = path.join(OUT_DIR, parts[0] + '.html');
    if (fs.existsSync(parentHtml)) return parentHtml;
  }

  // 6. Root fallback
  const rootIndex = path.join(OUT_DIR, 'index.html');
  if (fs.existsSync(rootIndex)) return rootIndex;

  return null;
}

// ── HTTP Request Handler ────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const reqUrl = req.url || '/';

  // SSE Live Reload stream (Dev Mode)
  if (IS_DEV && reqUrl === '/__pd_dev_reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write('data: connected\n\n');
    devClients.add(res);
    req.on('close', () => devClients.delete(res));
    return;
  }

  // Proxy /api/ and /uploads/ to backend API server
  if (reqUrl.startsWith('/api/') || reqUrl.startsWith('/uploads/')) {
    try {
      const backendReq = http.request(BACKEND_URL + reqUrl, {
        method: req.method,
        headers: {
          ...req.headers,
          host: new URL(BACKEND_URL).host
        }
      }, (backendRes) => {
        res.writeHead(backendRes.statusCode || 200, backendRes.headers);
        backendRes.pipe(res);
      });
      backendReq.on('error', () => {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Backend API unreachable at ${BACKEND_URL}` }));
      });
      req.pipe(backendReq);
      return;
    } catch (_) {}
  }

  const resolved = resolveStaticFile(reqUrl);
  if (!resolved) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(resolved).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (ext === '.html') {
    try {
      let html = fs.readFileSync(resolved, 'utf8');
      if (IS_DEV) {
        html = injectDevScript(html);
      }
      const buf = Buffer.from(html, 'utf8');
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': buf.length,
        'Cache-Control': 'no-cache'
      });
      res.end(buf);
      return;
    } catch (_) {}
  }

  const stat = fs.statSync(resolved);
  const headers = {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
  };

  res.writeHead(200, headers);
  fs.createReadStream(resolved).pipe(res);
});

server.listen(PORT, HOST, () => {
  const modeText = IS_DEV ? '⚡ DEV MODE (Live Screen Reload Active)' : '🚀 LIVE BUILD MODE';
  console.log(`\n   ▲ PingDart Web Server [${modeText}]`);
  console.log(`   - Local:        http://localhost:${PORT}`);
  console.log(`   - Network:      http://${HOST}:${PORT}`);
  console.log(`   - Backend API:  ${BACKEND_URL}`);
  if (IS_DEV) {
    console.log(`   - Auto-watch:   src/modules/custom (edit screens to hot-reload)`);
  }
  console.log(`\n ✓ Serving frontend bundle from out/`);
  console.log(` ✓ Ready on port ${PORT}\n`);
});
