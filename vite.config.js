import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/api": env.VITE_API_BASE_URL,
      },
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
  };
});
