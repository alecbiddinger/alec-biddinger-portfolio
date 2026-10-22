# Alec Biddinger — Security Operations Portfolio

My personal portfolio: experience, certifications, and write-ups of my security projects, including a Wazuh home SOC lab, a Python SSH log parser, and a Docker-based troubleshooting toolbox.

**Live site: https://alecbiddinger.vercel.app**

## Highlights

- **Hardened by default:** a strict Content Security Policy and security headers (frame blocking, `nosniff`, referrer and permissions policies), served only over HTTPS.
- **Minimal attack surface:** a static site with no backend, forms, tracking, or third-party scripts.
- **Patched dependencies:** `npm audit` reports 0 known vulnerabilities.
- **Accessible:** no issues in an automated WCAG 2.2 AA scan (axe-core), with keyboard-friendly navigation and layouts tested from phone to desktop.

## Featured projects

- [Home SOC Lab](https://github.com/alecbiddinger/Home-SOC-Lab): Wazuh monitoring Windows and Ubuntu endpoints in VirtualBox, with documented detection scenarios.
- [Python SIEM Log Parser](https://github.com/alecbiddinger/Python-SIEM-Log-Parser): flags repeated SSH login failures and successful logins that follow them.
- [IT Troubleshooting Toolbox](https://github.com/alecbiddinger/it-toolbox): a disposable Docker container of network diagnostics, with CI-tested helper scripts.

## Built with

React, TypeScript, Vite, Tailwind CSS, and MDX, hosted on Vercel.

## Run locally

Requires Node 22.13 or later.

```sh
npm ci
npm run dev
```

Then open http://localhost:4173.

## Content principle

Every claim on the site is limited to completed, verifiable work, and each project links to its repository. Planned work is labeled as planned, and sample log data is marked as illustrative.
