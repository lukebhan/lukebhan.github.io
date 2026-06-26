# lukebhan.com

Personal academic site built with [Astro](https://astro.build). Mobile-first, ships
almost no JavaScript, installable as a PWA.

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
```

## Build
```bash
npm run build    # static output in ./dist
npm run preview  # preview the production build locally
```

## Editing content
All content lives in `src/data/` as JSON, so most edits need no markup changes:
- `site.json` — name, nav, hero demo, blurb, links, the homepage research clips (`homeVision`), and the full `researchPage`, `teachingPage`, and `aboutPage` content.
- `publications.json` — every paper (authors, venue, links, figure/video). Set `"me": true` to bold your name, `"star": true` for equal contribution.
- `experience.json` — industry & national-lab internships (`logo` = wordmark for the About page, `icon` = icon-only mark for the homepage, `topic` = 1–2 word summary).
- `teaching.json` — courses/assistantships and peer-review lists.
- `talks.json` — invited talks (currently not rendered on any page; wire it up if you want a Talks section).

Design tokens (colors, fonts) are at the top of `src/styles/global.css`.

## Deploy (GitHub Pages → lukebhan.com)
The repo deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push this project to `https://github.com/lukebhan/lukebhan.github.io` (the `main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds with Astro and publishes `dist/`.
4. Custom domain: `public/CNAME` already contains `lukebhan.com`, so it ships with each
   build. In **Settings → Pages → Custom domain**, confirm `lukebhan.com` and enable
   **Enforce HTTPS**. Point DNS at GitHub Pages (apex `A`/`AAAA` records, plus a `www`
   `CNAME` to `lukebhan.github.io`).

`astro.config.mjs` sets `site: 'https://lukebhan.com'` and no `base`, which is correct
for a user site served at the domain root.
