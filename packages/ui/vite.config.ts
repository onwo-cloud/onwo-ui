import { qwikVite } from '@qwik.dev/core/optimizer';
import tailwindcss from '@tailwindcss/vite';
import { type UserConfig, defineConfig } from 'vite';

import { tsconfigPaths } from '../../share/resolve-path';

import pkg from './package.json';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export const baseConfig = {
  build: {
    sourcemap: false,
    target: 'es2020',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      external: [
        /^node:.*/,
        'date-fns',
        /^date-fns\/.*/,
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
