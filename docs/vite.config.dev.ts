import { Logger, defineConfig } from 'vite';

import { basePlugins } from './vite.config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tailwindcss from '@tailwindcss/vite';

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
  clearScreen() {},
  hasErrorLogged(error) {
    return false;
  },
  hasWarned: false,
};

export default defineConfig(() => ({
  root: process.cwd(),
  plugins: [
    tsconfigPaths(),
    qwikCity({}),
    qwikVite(),
    tailwindcss({ optimize: false }),
  ],
  customLogger,
}));
