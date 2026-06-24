const path = require("path");

process.env.SITE_ROOT = process.env.SITE_ROOT || path.resolve(__dirname, "..", "dist");
require("../server");
