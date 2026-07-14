const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const root = path.resolve(__dirname, "..");
const catalogPath = path.join(root, "assets", "nutrition.js");
const minimumEdge = 1000;
const legacyLowResolutionImages = new Set();

function pngDimensions(buffer) {
  if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function jpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  const startOfFrameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;

  while (offset + 8 < buffer.length) {
    while (offset < buffer.length && buffer[offset] !== 0xff) offset += 1;
    while (offset < buffer.length && buffer[offset] === 0xff) offset += 1;
    if (offset >= buffer.length) break;

    const marker = buffer[offset];
    offset += 1;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (offset + 2 > buffer.length) break;

    const segmentLength = buffer.readUInt16BE(offset);
    if (startOfFrameMarkers.has(marker) && offset + 7 < buffer.length) {
      return { width: buffer.readUInt16BE(offset + 5), height: buffer.readUInt16BE(offset + 3) };
    }
    if (segmentLength < 2) break;
    offset += segmentLength;
  }
  return null;
}

function webpDimensions(buffer) {
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return null;
  const format = buffer.toString("ascii", 12, 16);

  if (format === "VP8X") {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3)
    };
  }

  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return {
      width: 1 + (bits & 0x3fff),
      height: 1 + ((bits >>> 14) & 0x3fff)
    };
  }

  const frameHeader = buffer.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), 20);
  if (format === "VP8 " && frameHeader !== -1 && frameHeader + 7 <= buffer.length) {
    return {
      width: buffer.readUInt16LE(frameHeader + 3) & 0x3fff,
      height: buffer.readUInt16LE(frameHeader + 5) & 0x3fff
    };
  }
  return null;
}

function imageDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  return pngDimensions(buffer) || jpegDimensions(buffer) || webpDimensions(buffer);
}

function validateTransparentPng(filePath, publicPath) {
  const image = PNG.sync.read(fs.readFileSync(filePath));
  const cornerIndexes = [
    3,
    ((image.width - 1) * 4) + 3,
    ((image.width * (image.height - 1)) * 4) + 3,
    (((image.width * image.height) - 1) * 4) + 3
  ];
  if (cornerIndexes.some((index) => image.data[index] > 10)) {
    return `${publicPath}: product PNG must have transparent corners`;
  }

  let transparentPixels = 0;
  for (let index = 3; index < image.data.length; index += 4) {
    if (image.data[index] < 245) transparentPixels += 1;
  }
  if (transparentPixels / (image.width * image.height) < 0.01) {
    return `${publicPath}: product PNG must contain a transparent background`;
  }
  return null;
}

function main() {
  const catalog = fs.readFileSync(catalogPath, "utf8");
  const imagePaths = [...catalog.matchAll(/image:\s*"(\/assets\/nutrition\/[^"]+)"/g)]
    .map((match) => match[1])
    .filter((value, index, values) => values.indexOf(value) === index);
  const errors = [];
  const legacyAssets = [];

  for (const publicPath of imagePaths) {
    const filePath = path.join(root, publicPath.replace(/^\//, ""));
    const fileName = path.basename(filePath);
    if (!fs.existsSync(filePath)) {
      errors.push(`${publicPath}: file is missing`);
      continue;
    }

    if (/\.jpe?g$/i.test(fileName)) {
      errors.push(`${publicPath}: product images must use PNG or WebP with transparency, not JPEG`);
      continue;
    }

    const dimensions = imageDimensions(filePath);
    if (!dimensions) {
      errors.push(`${publicPath}: unsupported or unreadable image`);
      continue;
    }

    if (dimensions.width < minimumEdge || dimensions.height < minimumEdge) {
      const detail = `${publicPath}: ${dimensions.width}x${dimensions.height}px`;
      if (legacyLowResolutionImages.has(fileName)) legacyAssets.push(detail);
      else errors.push(`${detail}; new product images must be at least ${minimumEdge}x${minimumEdge}px`);
    }

    if (/\.png$/i.test(fileName)) {
      const transparencyError = validateTransparentPng(filePath, publicPath);
      if (transparencyError) errors.push(transparencyError);
    }
  }

  if (errors.length) {
    throw new Error(`Nutrition image validation failed:\n- ${errors.join("\n- ")}`);
  }

  if (legacyAssets.length) {
    console.warn(`Nutrition image check: ${legacyAssets.length} legacy asset(s) remain below ${minimumEdge}px; new assets cannot use this exception.`);
  }
  console.log(`Nutrition image check passed for ${imagePaths.length} product image(s).`);
}

main();
