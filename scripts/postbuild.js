import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const clientDir = path.resolve("dist/client");
const distDir = path.resolve("dist");
const outputDir = path.resolve(".output");
const outputPublic = path.resolve(".output/public");

// Run nitro build if nitro is available to generate .output/server & .output/nitro.json
try {
  console.log("Running Nitro build...");
  execSync("npx.cmd nitro build", { stdio: "inherit" });
} catch {
  try {
    execSync("nitro build", { stdio: "inherit" });
  } catch (err) {
    console.warn("Nitro build skipped/fallback:", err.message);
  }
}

if (fs.existsSync(clientDir)) {
  // 1. Ensure dist root has index.html and assets for hosts expecting dist/
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

  // 2. Ensure .output/public is fully populated with all static files & HTML for Nitro
  if (!fs.existsSync(outputPublic)) {
    fs.mkdirSync(outputPublic, { recursive: true });
  }
  fs.cpSync(clientDir, outputPublic, { recursive: true });
}

// 3. Ensure .output/nitro.json exists
const nitroJsonPath = path.join(outputDir, "nitro.json");
if (!fs.existsSync(nitroJsonPath)) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(
    nitroJsonPath,
    JSON.stringify(
      {
        date: new Date().toISOString(),
        preset: "node-server",
        commands: { preview: "node ./server/index.mjs" },
      },
      null,
      2
    )
  );
}

console.log("Postbuild: Output directories successfully generated (.output and dist)");
