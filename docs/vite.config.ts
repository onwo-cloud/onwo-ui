import { UserConfig, defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import tailwindcss from '@tailwindcss/vite'

export const baseConfig = {
  plugins: [
    qwikCity({}),
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
    ...baseConfig.plugins,
    staticAdapter({
      origin: 'https://ui.onwo.cloud/',
    }),
  ]
}));
