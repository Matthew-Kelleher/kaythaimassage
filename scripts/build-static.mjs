#!/usr/bin/env node
/**
 * Build a fully static, Hostinger-ready version of the site.
 *
 * Output: dist-static/
 *   - index.html            (pre-rendered homepage)
 *   - assets/...            (JS, CSS, images from Vite build)
 *   - images/...            (public images)
 *   - favicon.ico
 *   - .htaccess             (SPA fallback + caching for Apache / Hostinger)
 *
 * Usage:
 *   bun run build:static
 *
 * Then upload the CONTENTS of dist-static/ to Hostinger's public_html folder
 * via File Manager or FTP. No Node.js required on the server.
 */
import { build } from "vite";
import { renderToString } from "react-dom/server";
import { createMemoryHistory } from "@tanstack/react-router";
import { mkdirSync, cpSync, writeFileSync, readFileSync, existsSync, rmSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const clientOut = join(root, "dist", "client");
const staticOut = join(root, "dist-static");

console.log("▶ Building client bundle...");
await build({
  configFile: join(root, "vite.config.ts"),
  mode: "production",
  logLevel: "warn",
});

if (!existsSync(clientOut)) {
  console.error("✖ Expected client build at", clientOut);
  process.exit(1);
}

console.log("▶ Preparing dist-static/...");
if (existsSync(staticOut)) rmSync(staticOut, { recursive: true, force: true });
mkdirSync(staticOut, { recursive: true });

// Copy all client assets (JS, CSS, images, favicon, public/)
for (const entry of readdirSync(clientOut)) {
  if (entry === ".assetsignore") continue;
  cpSync(join(clientOut, entry), join(staticOut, entry), { recursive: true });
}

// Find the entry JS + CSS produced by Vite from the manifest
const assetsDir = join(staticOut, "assets");
const files = readdirSync(assetsDir);
const entryJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const cssFiles = files.filter((f) => f.endsWith(".css"));

if (!entryJs) {
  console.error("✖ Could not locate entry JS in assets/");
  process.exit(1);
}

const cssLinks = cssFiles
  .map((f) => `    <link rel="stylesheet" href="/assets/${f}">`)
  .join("\n");

// Minimal SPA shell. The client bundle hydrates / renders the router on mount.
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kay Thai Massage Kilkenny — Original Thai Massage</title>
    <meta name="description" content="Authentic Thai massage therapy at 58 John Street Upper, Kilkenny. 4.8★ rated. Mon-Sat 10AM-8PM. Call 085 749 6528." />
    <meta property="og:title" content="Kay Thai Massage Kilkenny — Original Thai Massage" />
    <meta property="og:description" content="Authentic Thai massage therapy in Kilkenny. 4.8★ rated. Call 085 749 6528." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryJs}"></script>
  </body>
</html>
`;

writeFileSync(join(staticOut, "index.html"), html, "utf8");

// .htaccess for Hostinger Apache: SPA fallback + sensible caching/compression.
const htaccess = `# Hostinger / Apache config for SPA
Options -MultiViews
RewriteEngine On

# Don't rewrite real files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Send everything else to index.html (client-side routing)
RewriteRule ^ index.html [L]

# Cache hashed assets aggressively
<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff2?|ttf|otf|eot|svg|png|jpe?g|gif|webp|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>

# Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

# Force HTTPS (uncomment after you've set up SSL on Hostinger)
# RewriteCond %{HTTPS} off
# RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
`;
// Use the hardened root .htaccess if present (blocks access to src/, node_modules/,
// package.json, etc. — important when deploying via Hostinger Git, which clones
// the WHOLE repo into public_html). Fall back to the minimal SPA-only version.
const rootHtaccess = join(root, ".htaccess");
if (existsSync(rootHtaccess)) {
  cpSync(rootHtaccess, join(staticOut, ".htaccess"));
} else {
  writeFileSync(join(staticOut, ".htaccess"), htaccess, "utf8");
}

// Also mirror the build output to the repo root so Hostinger's "Deploy from
// GitHub" feature (which clones the repo into public_html and does NOT run any
// build step) serves the site correctly. The .htaccess above blocks access to
// any source files that happen to live alongside.
console.log("▶ Mirroring build output to repo root for Hostinger Git deploy...");
const rootOutputs = ["assets", "images", "favicon.ico", "index.html"];
for (const entry of rootOutputs) {
  const src = join(staticOut, entry);
  const dest = join(root, entry);
  if (!existsSync(src)) continue;
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
}

// Quick size summary
function dirSize(p) {
  let total = 0;
  for (const f of readdirSync(p)) {
    const full = join(p, f);
    const st = statSync(full);
    total += st.isDirectory() ? dirSize(full) : st.size;
  }
  return total;
}
const mb = (dirSize(staticOut) / 1024 / 1024).toFixed(2);

console.log(`\n✓ Static build ready in dist-static/  (${mb} MB)`);
console.log("  Upload the CONTENTS of dist-static/ to Hostinger public_html.");
