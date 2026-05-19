// eslint-disable-next-line import/no-unresolved
import { startWatcher } from './lib/watcher-utils';

await startWatcher({
  tailwindcss: {
    name: 'tailwindcss',
    priority: 1,
    build: [{ command: 'pnpm run build', stdout: true }],
    cwd: './packages/tailwindcss/',
    dependencies: ['docs'],
    watchPaths: ['./src/', './tailwind.config.ts', './package.json'],
    buildOnLaunch: true,
  },
  docs: {
    name: 'docs',
    priority: 2,
    build: [{ command: 'pnpm run dev', stdout: true, keepAlive: true }],
    cwd: './docs/',
    dependencies: [],
    watchPaths: ['./src/', './public', './vite.config.*', './package.json'],
  },
});
