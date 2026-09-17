import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Repo GitHub Pages: https://ad-tech75.github.io/jiwoosbirthday/
// Kalau nanti pindah ke domain sendiri, ubah BASE jadi "/"
const BASE = "/jiwoosbirthday/";

export default defineConfig({
  base: BASE,
  plugins: [vue()],
  // .jfif tidak dikenali Vite secara default, jadi didaftarkan manual
  assetsInclude: ["**/*.jfif"],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
