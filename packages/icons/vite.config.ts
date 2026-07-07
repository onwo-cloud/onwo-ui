import { qwikVite } from '@qwik.dev/core/optimizer';
import tailwindcss from '@tailwindcss/vite';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

import { tsconfigPaths } from '../../share/resolve-path';

import pkg from './package.json';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export const baseConfig = {
  build: {
    // 1. Ensure Vite outputs to 'lib' as defined in your package.json exports
    outDir: 'lib',
    sourcemap: false,
    target: 'es2020',
    lib: {
      // 2. Define multiple entry points to build both components and the vite plugin
      entry: {
        index: './src/index.ts',
        'vite/index': './src/vite/index.ts',
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      // 3. Explicitly externalize 'vite' along with node built-ins and dependencies
      external: [
        /^node:.*/,
        'vite',
        ...excludeAll(dependencies),
        ...excludeAll(peerDependencies),
      ],
    },
  },
  plugins: [
    qwikVite(),
    tailwindcss({
      //plugins: [onwoTailwindPlugin],
    }),
    tsconfigPaths(),
  ],
} satisfies UserConfig;

export default defineConfig(() => baseConfig);
