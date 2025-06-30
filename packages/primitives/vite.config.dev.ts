import { Logger, defineConfig } from "vite";
import { baseConfig } from "./vite.config";

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
  plugins: [
    ...baseConfig.plugins,
  ],
  build: {
    ...baseConfig.build,
    watch: {},
  },
  customLogger
}));
