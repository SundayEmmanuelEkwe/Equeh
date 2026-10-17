import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDirectory = fileURLToPath(new URL(".", import.meta.url));
const pageEntries = Object.fromEntries(
  readdirSync(rootDirectory)
    .filter((fileName) => fileName.endsWith(".html"))
    .map((fileName) => [fileName.slice(0, -5), resolve(rootDirectory, fileName)])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: pageEntries
    }
  }
});