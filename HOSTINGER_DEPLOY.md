# Deploying to Hostinger

This site is fully static (no backend, no database). The built site is
**committed to the repo root** so Hostinger's "Deploy from GitHub" feature
works with zero build configuration.

## How it works

After running `bun run build:static`, these files/folders are written to the
repo root (and committed to GitHub):

- `index.html`
- `assets/`     — hashed JS, CSS, images
- `images/`     — hero background, etc.
- `favicon.ico`
- `.htaccess`   — SPA routing, caching, **and access rules that block
                  `src/`, `node_modules/`, `package.json`, etc.** from being
                  served over HTTP.

(They also live in `dist-static/` for manual FTP uploads — both stay in sync.)

## Option A — Hostinger Git deploy (recommended)

1. In hPanel → **Advanced → Git**, click **Create repository**.
2. Repository address: your GitHub repo URL (HTTPS).
3. Branch: `main` (or whichever branch you publish from).
4. Install path: **`/public_html`**
5. Save. Hostinger will clone the repo into `public_html`. Because the built
   files sit at the repo root, the site works immediately.
6. Whenever you push new changes, click **Manual Deploy** in hPanel (or set
   up the auto-deploy webhook Hostinger provides).

> ⚠️ Hostinger's Git deploy does **not** run `npm install` or any build
> command. That's why we commit the built output. Every time you change the
> site, run `bun run build:static` locally and commit the updated `assets/`,
> `images/`, `index.html`, and `.htaccess`.

## Option B — Manual upload (FTP / File Manager)

1. Run `bun run build:static`.
2. Upload the **contents** of `dist-static/` into `public_html/` (overwrite
   existing files). Browsers pick up new assets automatically — filenames
   are hashed.

## Domain & SSL

In hPanel → **Domains**, attach your domain, then enable **SSL** (free
Let's Encrypt) under **Security → SSL**. After SSL is active, uncomment the
"Force HTTPS" block at the bottom of `.htaccess`.

## Why the source files in the repo are safe

When Hostinger clones the repo, folders like `src/`, `node_modules/`,
`scripts/`, and files like `package.json` end up inside `public_html`. The
root `.htaccess` returns **404** for any request to those paths, so they
are never exposed.

## Updating the site

```bash
bun run build:static
git add -A
git commit -m "Rebuild site"
git push
```

Then click **Manual Deploy** in hPanel (or wait for the auto-deploy webhook).
