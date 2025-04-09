import { defineConfig } from "vite";
import { hackwatcher } from '../misc/hackwatcher';
import { baseConfig } from "./vite.config";

hackwatcher('../packages/', './src/routes/layout.tsx');

export default defineConfig(() => ({
  ...baseConfig,
  plugins: baseConfig.plugins,
}));
