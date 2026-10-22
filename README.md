# Alec Biddinger — Security Operations Portfolio

Personal portfolio site with my profile, experience, credentials, project field notes, an interactive home SOC lab diagram, and contact links. Built with React, TypeScript, Vite, Tailwind CSS 4, and MDX.

## Run locally

Requires Node 22.13 or later.

```sh
npm ci
npm run dev
```

The dev server opens at http://localhost:4173 and accepts connections only from this computer. To preview on a phone or another device on a trusted network, start it temporarily with `npm run dev -- --host`.

## Build

```sh
npm run build
npm run preview
```

`npm run build` type-checks the project and writes the static site to `dist/`. `npm run preview` serves that build locally.

## Deploy (Vercel)

- Framework preset **Vite**, build command `npm run build`, output directory `dist`, Node.js 22.x.
- Navigation uses hash routes (`#journal`, `#lab`), so no server rewrites are needed.
- `vercel.json` adds security headers (Content Security Policy, frame blocking, `nosniff`, referrer and permissions policies) and long-term caching for hashed assets. PDFs are exempt from the Content Security Policy so browsers' built-in PDF viewers work.
- Link-preview tags need the site's absolute URL. On Vercel it is filled in from the production domain automatically. Elsewhere, set `SITE_URL` (for example `https://example.com`) before building.

## Project structure

```text
index.html          Page shell, meta and link-preview tags
src/main.tsx        Pages, navigation, and most site content
src/content/*.mdx   Field notes, one file per note
src/styles.css      Styles
public/             Favicon, iPhone icon, link-preview image, resume PDF
vercel.json         Deployment headers
```

## Editing content

- **Profile, experience, and credentials:** `src/main.tsx`.
- **Resume:** replace `public/Alec_Biddinger_Resume.pdf`, keeping the same file name.
- **Adding a field note:** create `src/content/<name>.mdx`, import it in `src/main.tsx`, and add an entry to `posts` with its title, category, status, description, updated date, and overview card. A new category appears as a filter automatically.
- Only trusted local MDX is compiled. The site has no backend, forms, tracking, or third-party scripts.

## Content guidelines

Claims are limited to completed, verifiable work. Planned items are labeled as planned, and sample log data is marked as illustrative.
