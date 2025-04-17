import { Logger, defineConfig } from "vite";
import { hackwatcher } from '../misc/hackwatcher';
import { baseConfig } from "./vite.config";

hackwatcher([
  '../packages/primitives/lib',
  '../packages/primitives/lib-types',
  '../packages/icons/lib',
  '../packages/icons/lib-types',
  '../packages/ui/lib',
  '../packages/ui/lib-types'
], ['./src/routes/layout.tsx'], 2000);

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
  hasErrorLogged(error) {
    //const e = String(error);
    //if (e.includes(' Does the file exist?') || e.includes('no such file or directory,')) {
    //  return true
    //}
    return false;
  },
  hasWarned: false,
};

export default defineConfig(() => ({
  ...baseConfig,
  plugins: baseConfig.plugins,
  customLogger
}));
