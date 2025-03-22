import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    hmr: true,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
