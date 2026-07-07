import { qwikVite } from '@qwik.dev/core/optimizer';
import tailwindcss from '@tailwindcss/vite';
import { type UserConfig, defineConfig } from 'vite';

import { tsconfigPaths } from '../../share/resolve-path';

import pkg from './package.json';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

function generateEntriesFromExports(exports: Record<string, any>): Record<string, string> {
  const entries: Record<string, string> = {};

  for (const [_, exportConfig] of Object.entries(exports)) {
    if (typeof exportConfig === 'object' && exportConfig.qwik) {
      const qwikPath = exportConfig.qwik as string;
      const libPath = qwikPath.replace('./lib/', '').replace('.qwik.mjs', '');
      const srcPath = `./src/${libPath}.ts`;
      entries[libPath] = srcPath;
    }
  }

  return entries;
}

const entries = generateEntriesFromExports(pkg.exports || {});

export const baseConfig = {
  build: {
    sourcemap: false,
    target: 'es2020',
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
    },
  },
  plugins: [qwikVite(), tailwindcss({}), tsconfigPaths()],
} satisfies UserConfig;

export default defineConfig(() => baseConfig);
