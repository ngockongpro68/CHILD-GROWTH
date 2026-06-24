# Security Notes

Frontend code is always visible to browsers. Do not put private API keys, medical data, admin credentials, paid datasets, or proprietary server logic in HTML, CSS, or JavaScript shipped to users.

Before deploying:

1. Run `npm run security:audit`.
2. Run `npm run build` and deploy the `dist/` folder, not the workspace root.
3. Keep production secrets in the hosting provider's environment variables or a backend service.
4. Keep official WHO LMS tables or paid datasets on a backend if you do not want them copied.
5. Avoid publishing source maps for production assets.

The production server adds security headers including CSP, MIME sniffing protection, referrer policy, and restricted browser permissions. The embeddable calculator route is intentionally allowed to be framed; other routes are limited to same-origin framing.
