import { UserConfig, defineConfig } from "vite";
import pkg from "./package.json";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export const baseConfig = {
  build: {
    target: "es2020",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName}.qwik.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
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
    // This will need to be moved out at some point
    tailwindcss()
  ],
} satisfies UserConfig;

export default defineConfig(() => baseConfig);
