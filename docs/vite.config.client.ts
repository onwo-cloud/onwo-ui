import { qwikCity } from "@builder.io/qwik-city/vite";
import { defineConfig } from "vite";
import { baseConfig } from "./vite.config";

export default defineConfig(() => ({
  ...baseConfig,
  build: {},
  plugins: [
    qwikCity({}),
    ...baseConfig.plugins,
  ]
}));
