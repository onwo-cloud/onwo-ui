import { Logger, defineConfig } from "vite";
import { baseConfig } from "./vite.config";
//import { hackwatcher } from './build-helper';

//hackwatcher('/tmp/onwo-watcher.sock', './build-helper.ts');

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
