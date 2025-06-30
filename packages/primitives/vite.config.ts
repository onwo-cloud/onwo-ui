import { UserConfig, defineConfig } from 'vite';
import pkg from './package.json';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'
import onwoTailwindPlugin from '@onwo/tailwindcss';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

// Automatically generate entry points from package.json exports
function generateEntriesFromExports(exports: Record<string, any>): Record<string, string> {
  const entries: Record<string, string> = {};

  for (const [exportPath, exportConfig] of Object.entries(exports)) {
    if (typeof exportConfig === 'object' && exportConfig.qwik) {
      // Extract the path from the qwik export
      const qwikPath = exportConfig.qwik as string;

      // Convert lib path back to src path
      // "./lib/index.qwik.mjs" -> "index"
      const libPath = qwikPath.replace('./lib/', '').replace('.qwik.mjs', '');

      // Generate the source file path
      const srcPath = `./src/${libPath}.ts`;

      // Use the lib path as the entry key
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
    })
  ],
} satisfies UserConfig;

export default defineConfig(() => baseConfig);
