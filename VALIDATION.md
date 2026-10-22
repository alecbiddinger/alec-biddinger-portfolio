# Validation

Last checked October 22, 2026.

## Deployed site (https://alecbiddinger.vercel.app)

- HTTP redirects to HTTPS (308), and Vercel sends HSTS.
- Security headers are present: Content Security Policy, `X-Frame-Options: DENY`, `nosniff`, referrer, permissions, and cross-origin opener policies.
- The resume PDF is served without the Content Security Policy, as intended, and keeps the other headers. It is the version without a phone number.
- Link-preview tags use absolute `https://alecbiddinger.vercel.app` URLs. No `noindex` directive is present.
- All seven pages load at the top with page-specific titles. The lab diagram, networking toggle, and log-rule example work, with no Content Security Policy violations or console errors.
- Hashed assets are cached for a year; other files revalidate.

## Local build

- `npm audit`: 0 vulnerabilities (Vite 8.3.4, PostCSS 8.5.31).
- TypeScript check and Vite production build pass.
- Dev and preview servers listen on localhost only.
- Automated accessibility scan (axe-core, WCAG 2.2 AA and best practices): no violations on any page.
- No horizontal overflow at 375px; layout checked at 900px and 1280px.
- External links checked: GitHub profile and repositories and the credential verification pages respond. LinkedIn blocks automated requests and must be checked by hand.

## Still to check by hand

- The resume opening in Chrome's PDF viewer.
- Real mobile devices.
- The link preview in LinkedIn's Post Inspector.
