import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3000',
    }
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
        /* other options */
      },
    }),
  ],
});
