// Copies the built static site into ./site for Vercel, whichever folder the build used.
import { cpSync, existsSync, rmSync, readdirSync } from "node:fs";

const candidates = ["dist/client", ".output/public", ".vercel/output/static", "dist"];
const found = candidates.find((dir) => existsSync(`${dir}/index.html`));
if (!found) {
  console.error("No built index.html found. Checked:", candidates.join(", "));
  for (const dir of ["dist", ".output", ".vercel/output"]) {
    if (existsSync(dir)) console.error(dir, "->", readdirSync(dir).join(", "));
  }
  process.exit(1);
}
rmSync("site", { recursive: true, force: true });
cpSync(found, "site", { recursive: true });
console.log(`Copied ${found} to site/`);
