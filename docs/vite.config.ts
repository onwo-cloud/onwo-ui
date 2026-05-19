import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export const basePlugins = [
  tsconfigPaths(),
  qwikCity({}),
  qwikVite(),
  tailwindcss({ optimize: false }),
];

export default defineConfig(() => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      ...basePlugins,
      staticAdapter({
        origin: 'https://ui.onwo.cloud/',
      }),
    ],
  };
});
