const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(process.env.SITE_ROOT || __dirname);
const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "127.0.0.1";
const languageCodes = new Set(["en", "vi", "es", "hi", "id", "fr", "pt", "ar", "zh", "ja"]);
const blockedPathSegments = new Set([".agents", ".git", ".vercel", "dist", "node_modules", "outputs", "scripts", "test-artifacts"]);
const blockedFileNames = new Set([".env", ".gitignore", "netlify.toml", "package-lock.json", "package.json", "security.md", "server.js", "vercel.json"]);
const blockedExtensions = new Set([".bak", ".db", ".env", ".key", ".map", ".ods", ".p12", ".pem", ".sql", ".sqlite", ".xls", ".xlsx"]);

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
  "Cross-Origin-Resource-Policy": "same-origin",
  "Origin-Agent-Cluster": "?1",
  "X-XSS-Protection": "0"
};

function contentSecurityPolicy(urlPath) {
  const decodedPath = safeDecode((urlPath || "").split("?")[0]) || "";
  const isEmbed = decodedPath.includes("/embed/child-growth-calculator/");
  return [
    "default-src 'self'",
    "script-src 'self'",
    "script-src-attr 'none'",
    "style-src 'self' https://fonts.googleapis.com 'unsafe-inline'",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "media-src 'none'",
    "object-src 'none'",
    "frame-src 'none'",
    "worker-src 'none'",
    "manifest-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    `frame-ancestors ${isEmbed ? "*" : "'self'"}`,
    "upgrade-insecure-requests"
  ].join("; ");
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return null;
  }
}

function securityHeaders(urlPath) {
  const decodedPath = safeDecode((urlPath || "").split("?")[0]) || "";
  const isEmbed = decodedPath.includes("/embed/child-growth-calculator/");
  return {
    ...baseSecurityHeaders,
    ...(!isEmbed ? { "X-Frame-Options": "SAMEORIGIN" } : {}),
    "Content-Security-Policy": contentSecurityPolicy(urlPath)
  };
}

function resolveFile(urlPath) {
  const decodedPath = safeDecode(urlPath.split("?")[0]);
  if (decodedPath === null) return null;
  const cleanPath = decodedPath.replace(/^\/+/, "");
  const parts = cleanPath.split("/").filter(Boolean);
  const normalizedPath = parts.length && languageCodes.has(parts[0])
    ? parts.slice(1).join("/")
    : cleanPath;
  const normalizedParts = normalizedPath.split("/").filter(Boolean);
  if (normalizedParts.some((part) => part.startsWith(".") || blockedPathSegments.has(part.toLowerCase()))) {
    return null;
  }
  const requestedName = (normalizedParts.at(-1) || "").toLowerCase();
  if (blockedFileNames.has(requestedName) || blockedExtensions.has(path.extname(requestedName))) {
    return null;
  }
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
  const method = String(req.method || "GET").toUpperCase();
  const requestPath = safeDecode((req.url || "/").split("?")[0]);
  const responseSecurityHeaders = securityHeaders(req.url || "/");

  if (requestPath === null) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8", ...responseSecurityHeaders });
    res.end("Bad request");
    return;
  }

  if (!["GET", "HEAD"].includes(method)) {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8", "Allow": "GET, HEAD", ...responseSecurityHeaders });
    res.end("Method not allowed");
    return;
  }

  if (requestPath === "/api/locale") {
    const country = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();
    const language = country === "VN" ? "vi" : "en";
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store",
      "Vary": "X-Vercel-IP-Country",
      ...responseSecurityHeaders
    });
    res.end(method === "HEAD" ? undefined : JSON.stringify({ language }));
    return;
  }

  const filePath = resolveFile(req.url || "/");

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", ...responseSecurityHeaders });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
    ...responseSecurityHeaders
  });
  if (method === "HEAD") {
    res.end();
    return;
  }
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`GrowthKid site running at http://${host}:${port}`);
});
