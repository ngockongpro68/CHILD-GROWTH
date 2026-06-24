const fs = require("fs/promises");
const path = require("path");

const root = path.resolve(__dirname, "..");
const ignoredDirs = new Set([".git", ".agents", ".vercel", "dist", "node_modules", "test-artifacts"]);
const ignoredFiles = new Set(["package-lock.json"]);
const suspiciousPatterns = [
  { name: "OpenAI-style secret key", pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { name: "Google API key", pattern: /\bAIza[0-9A-Za-z_-]{20,}\b/g },
  { name: "Bearer token", pattern: /\bBearer\s+[A-Za-z0-9._~+/=-]{20,}\b/g },
  { name: "Hard-coded credential assignment", pattern: /\b(api[_-]?key|client_secret|secret|password|token)\b\s*[:=]\s*["'][^"']{8,}["']/gi }
];

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
    if (![".js", ".json", ".html", ".css", ".md", ".env", ".txt"].includes(ext)) continue;

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

  console.log("Security audit passed: no obvious hard-coded secrets found.");
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
