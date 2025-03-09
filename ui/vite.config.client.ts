import { qwikCity } from "@builder.io/qwik-city/vite";
import { baseConfig } from './vite.config.lib'
import { defineConfig } from "vite";

export default defineConfig(() => ({
  ...baseConfig,
  build: {},
  plugins: [
    qwikCity({}),
    ...baseConfig.plugins,
  ]
}));
