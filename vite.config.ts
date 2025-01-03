import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifest: {
        name: "RM-Ecommerce",
        short_name: "RM-Shop",
        description: "A progressive web app built with Vite",
        start_url: ".",
        display: "standalone",
        background_color: "#FFC93C",
        theme_color: "#FFC93C",
        icons: [
          {
            src: "/logo.png",
            sizes: "260x260",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
