import { defineConfig } from "vite";
import { hackwatcher } from '../misc/hackwatcher';
import { baseConfig } from "./vite.config";

hackwatcher('../ui/lib', './src/root.tsx');
hackwatcher('../ui/lib', './src/routes/layout.tsx');

export default defineConfig(() => ({
  ...baseConfig,
  plugins: baseConfig.plugins,
}));
