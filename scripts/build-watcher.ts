// eslint-disable-next-line import/no-unresolved
import { startWatcher } from './lib/watcher-utils';

await startWatcher({
  tailwindcss: {
    name: 'tailwindcss',
    priority: 1,
    build: [{ command: 'pnpm run build', stdout: true }],
    cwd: './packages/tailwindcss/',
    dependencies: ['primitives', 'icons', 'ui'],
    watchPaths: ['./src/', './tailwind.config.ts', './package.json'],
    buildOnLaunch: true,
  },
  primitives: {
    name: 'primitives',
    priority: 2,
    build: [{ command: 'pnpm run build.lib', stdout: true }],
    cwd: './packages/primitives/',
    dependencies: ['icons', 'ui'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
  icons: {
    name: 'icons',
    priority: 3,
    build: [{ command: 'pnpm run build.lib', stdout: true }],
    cwd: './packages/icons/',
    dependencies: ['ui'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
  ui: {
    name: 'ui',
    priority: 4,
    build: [{ command: 'pnpm run build.lib', stdout: true }],
    cwd: './packages/ui/',
    dependencies: ['docs'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
  docs: {
    name: 'docs',
    priority: 5,
    build: [{ command: 'pnpm run build', stdout: true }],
    cwd: './docs/',
    dependencies: [],
    watchPaths: ['./src/', './public', './vite.config.*', './package.json'],
  },
});
