import type { Logger } from 'vite';
import { defineConfig } from 'vite';
import { qwikRouter } from '@qwik.dev/router/vite';
import tailwindcss from '@tailwindcss/vite';
import { qwikVite } from '@qwik.dev/core/optimizer';
import { tsconfigPaths } from '../share/resolve-path';

const customLogger: Logger = {
  info(msg, _options) {
    if (!msg.includes('qwik.mjs')) {
      console.info(msg);
    }
  },
  warn(msg, options) {
    console.warn(msg, options);
  },
  warnOnce(msg, options) {
    console.warn(msg, options);
  },
  error(msg, options) {
    console.error(msg, options);
  },
  clearScreen() { },
  hasErrorLogged(_error) {
    return false;
  },
  hasWarned: false,
};

export default defineConfig(() => ({
  root: process.cwd(),
  plugins: [
    qwikRouter({}),
    qwikVite(),
    tsconfigPaths(),
    tailwindcss({ optimize: false }),
  ],
  customLogger,
}));
