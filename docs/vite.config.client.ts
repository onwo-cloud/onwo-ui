import { defineConfig } from "vite";
import { baseConfig } from "./vite.config";

export default defineConfig(() => ({
  ...baseConfig,
  build: {},
  plugins: baseConfig.plugins,
}));
