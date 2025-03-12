import { defineConfig } from "vite";
import { baseConfig } from "./vite.config";
import { hackwatcher } from '../misc/hackwatcher';

// This will update the index.ts utime every time the tailwind plugin
// is updated.
hackwatcher('../tailwindcss/dist', './src/index.ts');
hackwatcher('../tailwindcss/themes', './src/index.ts');

export default defineConfig(() => ({
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
  ],
  build: {
    ...baseConfig.build,
    watch: {},
  }
}));
