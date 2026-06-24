const fs = require("fs/promises");
const path = require("path");
const { minify } = require("terser");
const CleanCSS = require("clean-css");
const { minify: minifyHtml } = require("html-minifier-terser");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist");
const vercelOutputDir = path.join(root, ".vercel", "output");
const vercelStaticDir = path.join(vercelOutputDir, "static");
const excludedNames = new Set([
  ".agents",
  ".git",
  ".gitignore",
  ".vercel",
  "dist",
  "node_modules",
  "scripts",
  "test-artifacts",
  ".server.err",
  ".server.log",
  "package.json",
  "package-lock.json",
  "server.js",
  "SECURITY.md",
  "netlify.toml",
  "vercel.json"
]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

function isSourceMap(filePath) {
  return filePath.endsWith(".map");
}

async function copyPublicTree(source, target) {
  const stat = await fs.stat(source);
  const name = path.basename(source);

  if (excludedNames.has(name) || isSourceMap(source)) return;

  if (stat.isDirectory()) {
    await fs.mkdir(target, { recursive: true });
    const entries = await fs.readdir(source);
    for (const entry of entries) {
      await copyPublicTree(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  if (!stat.isFile()) return;

  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(source, target);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function copyDirectory(source, target) {
  const stat = await fs.stat(source);

  if (stat.isDirectory()) {
    await fs.mkdir(target, { recursive: true });
    const entries = await fs.readdir(source);
    for (const entry of entries) {
      await copyDirectory(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  if (stat.isFile()) {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.copyFile(source, target);
  }
}

async function minifyJs(filePath) {
  const code = await fs.readFile(filePath, "utf8");
  const isModule = /\b(import|export)\s/.test(code);
  const result = await minify(code, {
    compress: {
      passes: 2,
      drop_console: true
    },
    format: {
      comments: false
    },
    mangle: true,
    module: isModule,
    sourceMap: false
  });

  if (!result.code) {
    throw new Error(`Failed to minify ${filePath}`);
  }

  await fs.writeFile(filePath, result.code, "utf8");
}

async function minifyCss(filePath) {
  const code = await fs.readFile(filePath, "utf8");
  const result = new CleanCSS({ level: 2 }).minify(code);

  if (result.errors.length) {
    throw new Error(`Failed to minify ${filePath}: ${result.errors.join(", ")}`);
  }

  await fs.writeFile(filePath, result.styles, "utf8");
}

async function minifyHtmlFile(filePath) {
  const code = await fs.readFile(filePath, "utf8");
  const result = await minifyHtml(code, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeRedundantAttributes: true
  });

  await fs.writeFile(filePath, result, "utf8");
}

async function main() {
  if (await exists(outDir)) {
    await fs.rm(outDir, { recursive: true, force: true });
  }
  if (await exists(vercelOutputDir)) {
    await fs.rm(vercelOutputDir, { recursive: true, force: true });
  }

  const entries = await fs.readdir(root);
  for (const entry of entries) {
    await copyPublicTree(path.join(root, entry), path.join(outDir, entry));
  }

  const files = await walk(outDir);
  for (const file of files) {
    if (file.endsWith(".js")) await minifyJs(file);
    else if (file.endsWith(".css")) await minifyCss(file);
    else if (file.endsWith(".html")) await minifyHtmlFile(file);
  }

  const manifest = {
    builtAt: new Date().toISOString(),
    sourceMaps: false,
    note: "Production build contains only public browser assets. Do not place secrets in frontend code."
  };
  await fs.writeFile(path.join(outDir, "BUILD_MANIFEST.json"), JSON.stringify(manifest, null, 2), "utf8");
  await copyDirectory(outDir, vercelStaticDir);
  await fs.writeFile(path.join(vercelOutputDir, "config.json"), JSON.stringify({ version: 3 }, null, 2), "utf8");
  console.log(`Production build written to ${outDir}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
