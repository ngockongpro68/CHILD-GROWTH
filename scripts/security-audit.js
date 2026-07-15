const fs = require("fs/promises");
const path = require("path");

const root = path.resolve(__dirname, "..");
const ignoredDirs = new Set([".git", ".agents", ".vercel", "dist", "node_modules", "test-artifacts"]);
const ignoredFiles = new Set(["package-lock.json"]);
const suspiciousPatterns = [
  { name: "OpenAI-style secret key", pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { name: "Google API key", pattern: /\bAIza[0-9A-Za-z_-]{20,}\b/g },
  { name: "AWS access key", pattern: /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g },
  { name: "GitHub token", pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b/g },
  { name: "Slack token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g },
  { name: "Private key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
  { name: "Bearer token", pattern: /\bBearer\s+[A-Za-z0-9._~+/=-]{20,}\b/g },
  { name: "Hard-coded credential assignment", pattern: /\b(api[_-]?key|client_secret|secret|password|token)\b\s*[:=]\s*["'][^"']{8,}["']/gi }
];
const requiredHeaderKeys = [
  "Content-Security-Policy",
  "Permissions-Policy",
  "Referrer-Policy",
  "Strict-Transport-Security",
  "X-Content-Type-Options"
];

function assertSecurityHeaders(vercelConfig) {
  const headerGroups = Array.isArray(vercelConfig.headers) ? vercelConfig.headers : [];
  if (headerGroups.length < 2) throw new Error("vercel.json must define embed and non-embed security headers.");

  for (const group of headerGroups.slice(0, 2)) {
    const headers = new Map((group.headers || []).map((header) => [header.key, header.value]));
    const missing = requiredHeaderKeys.filter((key) => !headers.has(key));
    if (missing.length) throw new Error(`${group.source}: missing security headers: ${missing.join(", ")}`);
    const csp = headers.get("Content-Security-Policy") || "";
    for (const directive of ["default-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors"]) {
      if (!csp.includes(directive)) throw new Error(`${group.source}: CSP is missing ${directive}`);
    }
  }

  const mainHeaders = new Map((headerGroups[1].headers || []).map((header) => [header.key, header.value]));
  if (mainHeaders.get("X-Frame-Options") !== "SAMEORIGIN") {
    throw new Error("The main site must retain X-Frame-Options: SAMEORIGIN.");
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) files.push(...await walk(fullPath));
    } else if (entry.isFile() && !ignoredFiles.has(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const files = await walk(root);
  const findings = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".js", ".mjs", ".cjs", ".json", ".html", ".css", ".md", ".env", ".txt", ".toml", ".yaml", ".yml", ".xml"].includes(ext)) continue;

    const content = await fs.readFile(file, "utf8");
    for (const rule of suspiciousPatterns) {
      const matches = content.match(rule.pattern);
      if (matches) {
        findings.push(`${path.relative(root, file)}: ${rule.name}`);
      }
    }
  }

  if (findings.length) {
    console.error("Potential secrets found before deploy:");
    findings.forEach((finding) => console.error(`- ${finding}`));
    process.exitCode = 1;
    return;
  }

  const vercelConfig = JSON.parse(await fs.readFile(path.join(root, "vercel.json"), "utf8"));
  assertSecurityHeaders(vercelConfig);
  const fallbackHeaders = await fs.readFile(path.join(root, "_headers"), "utf8");
  if ((fallbackHeaders.match(/^\s*Strict-Transport-Security:/gm) || []).length < 2) {
    throw new Error("_headers must enable HSTS for the main site and embed route.");
  }

  const firstPartyScripts = [
    path.join(root, "assets", "app.js"),
    path.join(root, "assets", "nutrition.js"),
    path.join(root, "server.js")
  ];
  const dangerousExecution = /\beval\s*\(|\bnew\s+Function\b|document\.write\s*\(/;
  for (const script of firstPartyScripts) {
    const content = await fs.readFile(script, "utf8");
    if (dangerousExecution.test(content)) {
      throw new Error(`${path.relative(root, script)} contains a dangerous dynamic execution sink.`);
    }
  }

  console.log("Security audit passed: secrets, deployment headers, and dangerous execution sinks checked.");
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
