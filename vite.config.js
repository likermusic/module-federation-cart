import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [
    react(),
    federation({
      name: "cart-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Cart": "./src/pages/Cart",
      },
      shared: ["react", "react-dom", "react-redux"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
