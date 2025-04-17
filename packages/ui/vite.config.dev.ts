import { Logger, defineConfig } from "vite";
import { baseConfig } from "./vite.config";
import { hackwatcher } from '../../misc/hackwatcher';

// This will update the index.ts utime every time the tailwind plugin
// is updated.
hackwatcher([
  '../tailwindcss/dist',
  '../tailwindcss/themes',
  '../primitives/lib',
  '../primitives/lib-types',
  '../icons/lib',
  '../icons/lib-types'
], './src/index.ts', 400);


const customLogger: Logger = {
  info(msg, _options) {
    if (!msg.includes('gzip') && !msg.includes('modules transformed.')) {
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
  hasErrorLogged(_error) { return false; },
  hasWarned: false,
};

export default defineConfig(() => ({
  ...baseConfig,
  reportCompressedSize: false,
  plugins: [
    ...baseConfig.plugins,
  ],
  build: {
    ...baseConfig.build,
    watch: {},
  },
  customLogger
}));
