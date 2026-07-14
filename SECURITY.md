# Security Notes

Frontend code is always visible to browsers. Do not put private API keys, medical data, admin credentials, paid datasets, or proprietary server logic in HTML, CSS, or JavaScript shipped to users.

Public pages and browser assets can be copied by a determined visitor. Minification, disabled source maps, bot policy, same-origin resource policy, and firewall controls reduce casual copying and bulk scraping, but they do not provide absolute secrecy. Keep the authoritative workbook and private datasets outside Git and outside the deploy output.

Before deploying:

1. Run `npm run security:audit`.
2. Run `npm run build` and deploy the `dist/` folder, not the workspace root.
3. Keep production secrets in the hosting provider's environment variables or a backend service.
4. Keep official WHO LMS tables or paid datasets on a backend if you do not want them copied.
5. Avoid publishing source maps for production assets.
6. Keep the GitHub repository private when source code or product research should not be public.
7. Enable Vercel Bot Protection and the AI Bots managed ruleset. Start in Log mode, review legitimate traffic, then switch unwanted automation to Challenge or Deny.
8. Add a Vercel WAF rate-limit rule for abnormal request bursts and enable Firewall alerts.

The build rejects common private artifact formats and excludes `outputs/`. The production server adds security headers including CSP, MIME sniffing protection, referrer policy, restricted browser permissions, and same-origin framing. The embeddable calculator route is intentionally allowed to be framed.
