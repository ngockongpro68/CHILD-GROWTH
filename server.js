const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(process.env.SITE_ROOT || __dirname);
const port = Number(process.env.PORT || 5173);
const languageCodes = new Set(["en", "vi", "es", "hi", "id", "fr", "pt", "ar", "zh", "ja"]);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

const baseSecurityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "X-Permitted-Cross-Domain-Policies": "none",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin"
};

function contentSecurityPolicy(urlPath) {
  const isEmbed = decodeURIComponent((urlPath || "").split("?")[0]).includes("/embed/child-growth-calculator/");
  return [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' https://fonts.googleapis.com 'unsafe-inline'",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "media-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    `frame-ancestors ${isEmbed ? "*" : "'self'"}`,
    "upgrade-insecure-requests"
  ].join("; ");
}

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const parts = cleanPath.split("/").filter(Boolean);
  const normalizedPath = parts.length && languageCodes.has(parts[0])
    ? parts.slice(1).join("/")
    : cleanPath;
  let filePath = path.join(root, normalizedPath);

  const relativePath = path.relative(root, filePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const nestedIndex = path.join(filePath, "index.html");
    if (fs.existsSync(nestedIndex)) {
      filePath = nestedIndex;
    }
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return filePath;
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (requestPath === "/api/locale") {
    const country = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();
    const language = country === "VN" ? "vi" : "en";
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store",
      "Vary": "X-Vercel-IP-Country",
      ...baseSecurityHeaders,
      "Content-Security-Policy": contentSecurityPolicy(req.url || "/")
    });
    res.end(JSON.stringify({ language }));
    return;
  }

  const filePath = resolveFile(req.url || "/");

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
    ...baseSecurityHeaders,
    "Content-Security-Policy": contentSecurityPolicy(req.url || "/")
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`GrowthKid site running at http://localhost:${port}`);
});
