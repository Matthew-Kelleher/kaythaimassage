# Deploying to Hostinger

This site is fully static (no backend, no database). It can run on any
shared hosting plan — including Hostinger's cheapest tier.

## 1. Build the static site locally

```bash
bun install        # first time only
bun run build:static
```

This produces a `dist-static/` folder containing:

- `index.html`
- `assets/` (hashed JS, CSS, images)
- `images/` (hero background, etc.)
- `favicon.ico`
- `.htaccess` (SPA routing + caching for Apache)

## 2. Upload to Hostinger

**Option A — File Manager (easiest):**
1. Log in to hPanel → **Files → File Manager**.
2. Open the `public_html` folder.
3. Delete any default `index.html` / `default.php` already there.
4. Upload the **contents** of `dist-static/` (not the folder itself) — you can
   zip the folder, upload the zip, and use "Extract" in File Manager.

**Option B — FTP (FileZilla, etc.):**
- Host: your Hostinger FTP host
- User / password: from hPanel → **Files → FTP Accounts**
- Drag the contents of `dist-static/` into `/public_html/`.

## 3. Point your domain

In hPanel → **Domains**, attach your domain to the hosting plan, then enable
**SSL** (free Let's Encrypt) under **Security → SSL**.

After SSL is active, you can uncomment the "Force HTTPS" block at the bottom
of `.htaccess` to redirect all traffic to HTTPS.

## 4. Updating the site

Whenever you change content:

```bash
bun run build:static
```

Then re-upload the contents of `dist-static/` (overwrite existing files).
Browsers will pick up new assets automatically because filenames are hashed.

## Notes

- No Node.js, PHP, or database is required on Hostinger.
- The `.htaccess` file handles client-side routing (e.g. `/services` deep links).
- All images live in `dist-static/images/` and `dist-static/assets/`.
