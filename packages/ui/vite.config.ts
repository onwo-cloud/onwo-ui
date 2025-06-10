import { UserConfig, defineConfig } from 'vite';
import pkg from './package.json';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'
import onwoTailwindPlugin from '@onwo/tailwindcss';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export const baseConfig = {
  build: {
    // NB: May need this:
    //watch: {
    //  include: ['../tailwindcss/**/*'],
    //},
    sourcemap: false,
    target: 'es2020',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      // externalize deps that shouldn't be bundled into the library
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
    tsconfigPaths(),
    tailwindcss({
      plugins: [onwoTailwindPlugin],
    }),
  ],
} satisfies UserConfig;

export default defineConfig(() => baseConfig);
