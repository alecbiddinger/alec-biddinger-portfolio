# Validation

Last checked October 21, 2026.

- `npm audit`: 0 vulnerabilities (Vite 8.3.4, PostCSS 8.5.31).
- TypeScript check and Vite production build pass.
- Dev and preview servers listen on localhost only.
- Automated accessibility scan (axe-core, WCAG 2.2 AA and best practices): no violations on any page.
- No horizontal overflow at 375px; layout checked at 900px and 1280px.
- Navigation opens each page at the top, moves focus to the main content, and sets a page-specific title.
- Production build served with the `vercel.json` headers: no Content Security Policy violations, and all interactive features work.
- External links checked: GitHub profile and repositories respond. LinkedIn blocks automated requests and must be checked by hand.
- Not yet checked: the deployed site, real mobile devices, and link previews on LinkedIn.
