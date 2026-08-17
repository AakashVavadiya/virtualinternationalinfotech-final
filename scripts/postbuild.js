import fs from "fs";
import path from "path";

const clientDir = path.resolve("dist/client");
const distDir = path.resolve("dist");
const outputPublic = path.resolve(".output/public");

if (fs.existsSync(clientDir)) {
  // Ensure dist root also has index.html and assets for hosts expecting dist/
  const files = fs.readdirSync(clientDir);
  for (const file of files) {
    const src = path.join(clientDir, file);
    const dest = path.join(distDir, file);
    if (file === "assets") {
      const destAssets = path.join(distDir, "assets");
      if (!fs.existsSync(destAssets)) {
        fs.cpSync(src, destAssets, { recursive: true });
      }
    } else if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
    }
  }

  // Also populate .output/public for Nitro/Vercel SSR fallbacks
  if (!fs.existsSync(outputPublic)) {
    fs.mkdirSync(outputPublic, { recursive: true });
  }
  fs.cpSync(clientDir, outputPublic, { recursive: true });
}
console.log("Postbuild: Output directories populated successfully (dist, dist/client, .output/public)");
