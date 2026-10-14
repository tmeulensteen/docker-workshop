// A tiny "build": copies src/ to dist/ and stamps the build time into the page.
const fs = require("fs");
const path = require("path");

fs.mkdirSync("dist", { recursive: true });
const html = fs.readFileSync(path.join("src", "index.html"), "utf8")
  .replace("{{BUILD_TIME}}", new Date().toISOString());
fs.writeFileSync(path.join("dist", "index.html"), html);
console.log("Built dist/index.html");
