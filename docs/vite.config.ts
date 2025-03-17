import { UserConfig, defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import tailwindcss from '@tailwindcss/vite'
import { hackwatcher } from '../misc/hackwatcher';

// This will update the root.tsx utime every time the ui plugin
// is updated.
hackwatcher('../ui/dist', './src/root.tsx');
hackwatcher('../ui/dist', './src/routes/layout.tsx');
hackwatcher('../ui/dist', './vite.config.ts');

export const baseConfig = {
  plugins: [
    qwikVite(),
    tsconfigPaths(),
    tailwindcss()
  ],
} satisfies UserConfig;

// For static build
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
      origin: 'https://ui.onwo.cloud/',
    }),
  ]
}));
