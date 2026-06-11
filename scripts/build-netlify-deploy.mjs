import { spawn } from "node:child_process";
import { execSync } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "dist", "netlify-deploy");
const clientAssets = join(root, "dist", "client", "assets");
const port = 4173 + Math.floor(Math.random() * 1000);

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      shell: true,
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function waitForHtml(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const html = await response.text();
        if (html.includes("<!DOCTYPE html") && !html.includes("ERR_MODULE_NOT_FOUND")) {
          return html;
        }
      }
    } catch {
      // preview still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("No se pudo obtener el HTML del preview local.");
}

console.log("1/3 Compilando el sitio...");
execSync("npm run build", { cwd: root, stdio: "inherit" });

console.log(`2/3 Generando HTML estático (preview en :${port})...`);
const preview = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
  shell: true,
});

try {
  const html = await waitForHtml(`http://127.0.0.1:${port}/`);

  console.log("3/3 Empaquetando dist/netlify-deploy...");
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  await cp(clientAssets, join(outDir, "assets"), { recursive: true });
  await writeFile(join(outDir, "index.html"), html, "utf8");
  await writeFile(join(outDir, "_redirects"), "/*    /index.html   200\n", "utf8");

  console.log("\nListo: dist/netlify-deploy/");
  console.log("Arrastra esa carpeta a https://app.netlify.com/drop");
} finally {
  preview.kill("SIGTERM");
}
