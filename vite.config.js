import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Pages: https://jiwoosbirthday.vercel.app/
const BASE = "/";

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
