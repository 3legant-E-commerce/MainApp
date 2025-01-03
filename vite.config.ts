import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // auto-register the service worker
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
      workbox: {
        // Enable offline support by caching assets
        runtimeCaching: [
          {
            urlPattern: /\/.*\.(?:js|css|html|json|png|jpg|jpeg|svg)/, // match js, css, html, image files
            handler: "CacheFirst", // Cache assets for offline use
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 100, // maximum number of entries to store in cache
                maxAgeSeconds: 60 * 60 * 24 * 30, // cache for 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/your-api-endpoint/, // Cache API requests
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
      },
    }),
  ],
});
