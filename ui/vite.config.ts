import { qwikCity } from "@builder.io/qwik-city/vite";
import { baseConfig } from './vite.config.lib'
import { defineConfig } from "vite";
import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";

export default defineConfig(() => ({
  ...baseConfig,
  build: {
    ssr: true,
    rollupOptions: {
      input: ["@qwik-city-plan"],
    },
  },
  plugins: [
    qwikCity({}),
    ...baseConfig.plugins,
    staticAdapter({
      origin: 'https://design.onwo.cloud/',
    }),
  ]
}));
