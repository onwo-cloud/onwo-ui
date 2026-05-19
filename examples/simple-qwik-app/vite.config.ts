import { qwikVite } from '@builder.io/qwik/optimizer';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(
  (): UserConfig => ({
    plugins: [qwikVite(), tsconfigPaths(), tailwindcss()],
  }),
);
