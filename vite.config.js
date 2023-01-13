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
        includeAssets: ["battle.svg"],
        manifest: {
          name: "Battle Quizz",
          short_name: "BQ",
          description: "Battle Quizz fight with quizz fan",
          theme_color: "#2b3262",
          background_color: "#2b3262",
          icons: [
            {
              src: "/ios/192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/ios/512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        injectRegister: "auto",
        devOptions: {
          enabled: true,
          /* other options */
        },
      }),
    ],
  };
});
