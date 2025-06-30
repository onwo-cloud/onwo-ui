// vite.config.ts
import { defineConfig } from "file:///home/emilien/projects/onwo-ui/node_modules/vite/dist/node/index.js";

// package.json
var package_default = {
  name: "@onwo/primitives",
  version: "0.0.12-alpha",
  url: "https.//primitives/ui.onwo.cloud/",
  description: "An ui library for qwik.js inspired by moon.io",
  repository: "https.//primitives/github.com/onwo-cloud/onwo-ui",
  license: "MIT",
  keywords: [
    "tailwindcss",
    "ui-library",
    "qwik.js"
  ],
  files: [
    "lib",
    "lib-types"
  ],
  engines: {
    node: "^22"
  },
  private: false,
  type: "module",
  scripts: {
    build: "ESLINT_MODE=full qwik build",
    "build.types": "tsc --emitDeclarationOnly",
    "build.lib": "vite build --mode lib -c vite.config.ts",
    "dev.build": "ESLINT=false qwik build",
    dev: "vite build --mode lib -c ./vite.config.dev.ts",
    lint: 'eslint "src/**/*.ts*"',
    "lint.fix": "npm run lint -- --fix",
    "ts-watch": "tsc --emitDeclarationOnly --preserveWatchOutput --pretty --watch"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.14",
    "@onwo/tailwindcss": "link:../tailwindcss",
    "@tailwindcss/vite": "^4.1.10",
    "@types/node": "24.0.3",
    "@types/tailwindcss": "^3.1.0",
    chokidar: "^4.0.3",
    np: "^10.2.0",
    tailwindcss: "^4.1.10",
    typescript: "5.8.3",
    undici: "*",
    vite: "6.3.5",
    "vite-tsconfig-paths": "^5.1.4"
  },
  publishConfig: {
    access: "public"
  },
  dependencies: {
    "@floating-ui/core": "^1.7.1",
    "@floating-ui/dom": "^1.7.1",
    "@oddbird/popover-polyfill": "0.6.0",
    "@tailwindcss/vite": "^4.1.10",
    "body-scroll-lock-upgrade": "^1.1.0",
    clsx: "^2.1.1",
    "focus-trap": "7.6.5",
    "tailwind-merge": "^3.3.1"
  },
  exports: {
    ".": {
      qwik: "./lib/index.qwik.mjs",
      import: "./lib/index.qwik.mjs",
      types: "./lib-types/index.d.ts"
    },
    "./accordion": {
      qwik: "./lib/primitives/accordion/index.qwik.mjs",
      import: "./lib/primitives/accordion/index.qwik.mjs",
      types: "./lib-types/primitives/accordion/index.d.ts"
    },
    "./animated": {
      qwik: "./lib/primitives/animated/index.qwik.mjs",
      import: "./lib/primitives/animated/index.qwik.mjs",
      types: "./lib-types/primitives/animated/index.d.ts"
    },
    "./button": {
      qwik: "./lib/primitives/button/index.qwik.mjs",
      import: "./lib/primitives/button/index.qwik.mjs",
      types: "./lib-types/primitives/button/index.d.ts"
    },
    "./carousel": {
      qwik: "./lib/primitives/carousel/index.qwik.mjs",
      import: "./lib/primitives/carousel/index.qwik.mjs",
      types: "./lib-types/primitives/carousel/index.d.ts"
    },
    "./checkbox": {
      qwik: "./lib/primitives/checkbox/index.qwik.mjs",
      import: "./lib/primitives/checkbox/index.qwik.mjs",
      types: "./lib-types/primitives/checkbox/index.d.ts"
    },
    "./checklist": {
      qwik: "./lib/primitives/checklist/index.qwik.mjs",
      import: "./lib/primitives/checklist/index.qwik.mjs",
      types: "./lib-types/primitives/checklist/index.d.ts"
    },
    "./collapsible": {
      qwik: "./lib/primitives/collapsible/index.qwik.mjs",
      import: "./lib/primitives/collapsible/index.qwik.mjs",
      types: "./lib-types/primitives/collapsible/index.d.ts"
    },
    "./combobox": {
      qwik: "./lib/primitives/combobox/index.qwik.mjs",
      import: "./lib/primitives/combobox/index.qwik.mjs",
      types: "./lib-types/primitives/combobox/index.d.ts"
    },
    "./dropdown": {
      qwik: "./lib/primitives/dropdown/index.qwik.mjs",
      import: "./lib/primitives/dropdown/index.qwik.mjs",
      types: "./lib-types/primitives/dropdown/index.d.ts"
    },
    "./label": {
      qwik: "./lib/primitives/label/index.qwik.mjs",
      import: "./lib/primitives/label/index.qwik.mjs",
      types: "./lib-types/primitives/label/index.d.ts"
    },
    "./modal": {
      qwik: "./lib/primitives/modal/index.qwik.mjs",
      import: "./lib/primitives/modal/index.qwik.mjs",
      types: "./lib-types/primitives/modal/index.d.ts"
    },
    "./page-navigation": {
      qwik: "./lib/primitives/page-navigation/index.qwik.mjs",
      import: "./lib/primitives/page-navigation/index.qwik.mjs",
      types: "./lib-types/primitives/page-navigation/index.d.ts"
    },
    "./pagination": {
      qwik: "./lib/primitives/pagination/index.qwik.mjs",
      import: "./lib/primitives/pagination/index.qwik.mjs",
      types: "./lib-types/primitives/pagination/index.d.ts"
    },
    "./polymorphic": {
      qwik: "./lib/primitives/polymorphic/index.qwik.mjs",
      import: "./lib/primitives/polymorphic/index.qwik.mjs",
      types: "./lib-types/primitives/polymorphic/index.d.ts"
    },
    "./popover": {
      qwik: "./lib/primitives/popover/index.qwik.mjs",
      import: "./lib/primitives/popover/index.qwik.mjs",
      types: "./lib-types/primitives/popover/index.d.ts"
    },
    "./progress": {
      qwik: "./lib/primitives/progress/index.qwik.mjs",
      import: "./lib/primitives/progress/index.qwik.mjs",
      types: "./lib-types/primitives/progress/index.d.ts"
    },
    "./select": {
      qwik: "./lib/primitives/select/index.qwik.mjs",
      import: "./lib/primitives/select/index.qwik.mjs",
      types: "./lib-types/primitives/select/index.d.ts"
    },
    "./separator": {
      qwik: "./lib/primitives/separator/index.qwik.mjs",
      import: "./lib/primitives/separator/index.qwik.mjs",
      types: "./lib-types/primitives/separator/index.d.ts"
    },
    "./svg-icon": {
      qwik: "./lib/primitives/svg-icon/index.qwik.mjs",
      import: "./lib/primitives/svg-icon/index.qwik.mjs",
      types: "./lib-types/primitives/svg-icon/index.d.ts"
    },
    "./tabs": {
      qwik: "./lib/primitives/tabs/index.qwik.mjs",
      import: "./lib/primitives/tabs/index.qwik.mjs",
      types: "./lib-types/primitives/tabs/index.d.ts"
    },
    "./toaster": {
      qwik: "./lib/primitives/toaster/index.qwik.mjs",
      import: "./lib/primitives/toaster/index.qwik.mjs",
      types: "./lib-types/primitives/toaster/index.d.ts"
    },
    "./toggle": {
      qwik: "./lib/primitives/toggle/index.qwik.mjs",
      import: "./lib/primitives/toggle/index.qwik.mjs",
      types: "./lib-types/primitives/toggle/index.d.ts"
    },
    "./toggle-group": {
      qwik: "./lib/primitives/toggle-group/index.qwik.mjs",
      import: "./lib/primitives/toggle-group/index.qwik.mjs",
      types: "./lib-types/primitives/toggle-group/index.d.ts"
    },
    "./tooltip": {
      qwik: "./lib/primitives/tooltip/index.qwik.mjs",
      import: "./lib/primitives/tooltip/index.qwik.mjs",
      types: "./lib-types/primitives/tooltip/index.d.ts"
    }
  }
};

// vite.config.ts
import { qwikVite } from "file:///home/emilien/projects/onwo-ui/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import tsconfigPaths from "file:///home/emilien/projects/onwo-ui/node_modules/vite-tsconfig-paths/dist/index.js";
import tailwindcss from "file:///home/emilien/projects/onwo-ui/node_modules/@tailwindcss/vite/dist/index.mjs";
import onwoTailwindPlugin from "file:///home/emilien/projects/onwo-ui/packages/tailwindcss/dist/index.js";
var { dependencies = {}, peerDependencies = {} } = package_default;
var makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
var excludeAll = (obj) => Object.keys(obj).map(makeRegex);
function generateEntriesFromExports(exports) {
  const entries2 = {};
  for (const [exportPath, exportConfig] of Object.entries(exports)) {
    if (typeof exportConfig === "object" && exportConfig.qwik) {
      const qwikPath = exportConfig.qwik;
      const libPath = qwikPath.replace("./lib/", "").replace(".qwik.mjs", "");
      const srcPath = `./src/${libPath}.ts`;
      entries2[libPath] = srcPath;
    }
  }
  return entries2;
}
var entries = generateEntriesFromExports(package_default.exports || {});
var baseConfig = {
  build: {
    sourcemap: false,
    target: "es2020",
    lib: {
      entry: entries,
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.qwik.${format === "es" ? "mjs" : "cjs"}`
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src"
      },
      // externalize deps that shouldn't be bundled into the library
      external: [
        /^node:.*/,
        ...excludeAll(dependencies),
        ...excludeAll(peerDependencies)
      ]
    }
  },
  plugins: [
    qwikVite(),
    tsconfigPaths(),
    tailwindcss({
      plugins: [onwoTailwindPlugin]
    })
  ]
};
var vite_config_default = defineConfig(() => baseConfig);
export {
  baseConfig,
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZW1pbGllbi9wcm9qZWN0cy9vbndvLXVpL3BhY2thZ2VzL3ByaW1pdGl2ZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2VtaWxpZW4vcHJvamVjdHMvb253by11aS9wYWNrYWdlcy9wcmltaXRpdmVzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2VtaWxpZW4vcHJvamVjdHMvb253by11aS9wYWNrYWdlcy9wcmltaXRpdmVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVXNlckNvbmZpZywgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXInO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXG5pbXBvcnQgb253b1RhaWx3aW5kUGx1Z2luIGZyb20gJ0BvbndvL3RhaWx3aW5kY3NzJztcblxuY29uc3QgeyBkZXBlbmRlbmNpZXMgPSB7fSwgcGVlckRlcGVuZGVuY2llcyA9IHt9IH0gPSBwa2cgYXMgYW55O1xuY29uc3QgbWFrZVJlZ2V4ID0gKGRlcCkgPT4gbmV3IFJlZ0V4cChgXiR7ZGVwfSgvLiopPyRgKTtcbmNvbnN0IGV4Y2x1ZGVBbGwgPSAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopLm1hcChtYWtlUmVnZXgpO1xuXG4vLyBBdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGVudHJ5IHBvaW50cyBmcm9tIHBhY2thZ2UuanNvbiBleHBvcnRzXG5mdW5jdGlvbiBnZW5lcmF0ZUVudHJpZXNGcm9tRXhwb3J0cyhleHBvcnRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IGVudHJpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICBmb3IgKGNvbnN0IFtleHBvcnRQYXRoLCBleHBvcnRDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKGV4cG9ydHMpKSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRDb25maWcgPT09ICdvYmplY3QnICYmIGV4cG9ydENvbmZpZy5xd2lrKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBwYXRoIGZyb20gdGhlIHF3aWsgZXhwb3J0XG4gICAgICBjb25zdCBxd2lrUGF0aCA9IGV4cG9ydENvbmZpZy5xd2lrIGFzIHN0cmluZztcblxuICAgICAgLy8gQ29udmVydCBsaWIgcGF0aCBiYWNrIHRvIHNyYyBwYXRoXG4gICAgICAvLyBcIi4vbGliL2luZGV4LnF3aWsubWpzXCIgLT4gXCJpbmRleFwiXG4gICAgICAvLyBcIi4vbGliL3ByaW1pdGl2ZXMvYWNjb3JkaW9uL2luZGV4LnF3aWsubWpzXCIgLT4gXCJwcmltaXRpdmVzL2FjY29yZGlvbi9pbmRleFwiXG4gICAgICBjb25zdCBsaWJQYXRoID0gcXdpa1BhdGgucmVwbGFjZSgnLi9saWIvJywgJycpLnJlcGxhY2UoJy5xd2lrLm1qcycsICcnKTtcblxuICAgICAgLy8gR2VuZXJhdGUgdGhlIHNvdXJjZSBmaWxlIHBhdGhcbiAgICAgIGNvbnN0IHNyY1BhdGggPSBgLi9zcmMvJHtsaWJQYXRofS50c2A7XG5cbiAgICAgIC8vIFVzZSB0aGUgbGliIHBhdGggYXMgdGhlIGVudHJ5IGtleVxuICAgICAgZW50cmllc1tsaWJQYXRoXSA9IHNyY1BhdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmNvbnN0IGVudHJpZXMgPSBnZW5lcmF0ZUVudHJpZXNGcm9tRXhwb3J0cyhwa2cuZXhwb3J0cyB8fCB7fSk7XG5cbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnID0ge1xuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBlbnRyaWVzLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0LCBlbnRyeU5hbWUpID0+XG4gICAgICAgIGAke2VudHJ5TmFtZX0ucXdpay4ke2Zvcm1hdCA9PT0gJ2VzJyA/ICdtanMnIDogJ2Nqcyd9YCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMnLFxuICAgICAgfSxcbiAgICAgIC8vIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZCBpbnRvIHRoZSBsaWJyYXJ5XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAvXm5vZGU6LiovLFxuICAgICAgICAuLi5leGNsdWRlQWxsKGRlcGVuZGVuY2llcyksXG4gICAgICAgIC4uLmV4Y2x1ZGVBbGwocGVlckRlcGVuZGVuY2llcyksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBxd2lrVml0ZSgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICB0YWlsd2luZGNzcyh7XG4gICAgICBwbHVnaW5zOiBbb253b1RhaWx3aW5kUGx1Z2luXSxcbiAgICB9KVxuICBdLFxufSBzYXRpc2ZpZXMgVXNlckNvbmZpZztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IGJhc2VDb25maWcpO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwiQG9ud28vcHJpbWl0aXZlc1wiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMTItYWxwaGFcIixcbiAgXCJ1cmxcIjogXCJodHRwcy4vL3ByaW1pdGl2ZXMvdWkub253by5jbG91ZC9cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIHVpIGxpYnJhcnkgZm9yIHF3aWsuanMgaW5zcGlyZWQgYnkgbW9vbi5pb1wiLFxuICBcInJlcG9zaXRvcnlcIjogXCJodHRwcy4vL3ByaW1pdGl2ZXMvZ2l0aHViLmNvbS9vbndvLWNsb3VkL29ud28tdWlcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwidGFpbHdpbmRjc3NcIixcbiAgICBcInVpLWxpYnJhcnlcIixcbiAgICBcInF3aWsuanNcIlxuICBdLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImxpYlwiLFxuICAgIFwibGliLXR5cGVzXCJcbiAgXSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMjJcIlxuICB9LFxuICBcInByaXZhdGVcIjogZmFsc2UsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJFU0xJTlRfTU9ERT1mdWxsIHF3aWsgYnVpbGRcIixcbiAgICBcImJ1aWxkLnR5cGVzXCI6IFwidHNjIC0tZW1pdERlY2xhcmF0aW9uT25seVwiLFxuICAgIFwiYnVpbGQubGliXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgbGliIC1jIHZpdGUuY29uZmlnLnRzXCIsXG4gICAgXCJkZXYuYnVpbGRcIjogXCJFU0xJTlQ9ZmFsc2UgcXdpayBidWlsZFwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSBidWlsZCAtLW1vZGUgbGliIC1jIC4vdml0ZS5jb25maWcuZGV2LnRzXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IFxcXCJzcmMvKiovKi50cypcXFwiXCIsXG4gICAgXCJsaW50LmZpeFwiOiBcIm5wbSBydW4gbGludCAtLSAtLWZpeFwiLFxuICAgIFwidHMtd2F0Y2hcIjogXCJ0c2MgLS1lbWl0RGVjbGFyYXRpb25Pbmx5IC0tcHJlc2VydmVXYXRjaE91dHB1dCAtLXByZXR0eSAtLXdhdGNoXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJ1aWxkZXIuaW8vcXdpa1wiOiBcIl4xLjE0XCIsXG4gICAgXCJAb253by90YWlsd2luZGNzc1wiOiBcImxpbms6Li4vdGFpbHdpbmRjc3NcIixcbiAgICBcIkB0YWlsd2luZGNzcy92aXRlXCI6IFwiXjQuMS4xMFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCIyNC4wLjNcIixcbiAgICBcIkB0eXBlcy90YWlsd2luZGNzc1wiOiBcIl4zLjEuMFwiLFxuICAgIFwiY2hva2lkYXJcIjogXCJeNC4wLjNcIixcbiAgICBcIm5wXCI6IFwiXjEwLjIuMFwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeNC4xLjEwXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiNS44LjNcIixcbiAgICBcInVuZGljaVwiOiBcIipcIixcbiAgICBcInZpdGVcIjogXCI2LjMuNVwiLFxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl41LjEuNFwiXG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZmxvYXRpbmctdWkvY29yZVwiOiBcIl4xLjcuMVwiLFxuICAgIFwiQGZsb2F0aW5nLXVpL2RvbVwiOiBcIl4xLjcuMVwiLFxuICAgIFwiQG9kZGJpcmQvcG9wb3Zlci1wb2x5ZmlsbFwiOiBcIjAuNi4wXCIsXG4gICAgXCJAdGFpbHdpbmRjc3Mvdml0ZVwiOiBcIl40LjEuMTBcIixcbiAgICBcImJvZHktc2Nyb2xsLWxvY2stdXBncmFkZVwiOiBcIl4xLjEuMFwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiZm9jdXMtdHJhcFwiOiBcIjcuNi41XCIsXG4gICAgXCJ0YWlsd2luZC1tZXJnZVwiOiBcIl4zLjMuMVwiXG4gIH0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vYWNjb3JkaW9uXCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvYWNjb3JkaW9uL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvYWNjb3JkaW9uL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy9hY2NvcmRpb24vaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vYW5pbWF0ZWRcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9hbmltYXRlZC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL2FuaW1hdGVkL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy9hbmltYXRlZC9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9idXR0b25cIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9idXR0b24vaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy9idXR0b24vaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL2J1dHRvbi9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9jYXJvdXNlbFwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL2Nhcm91c2VsL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvY2Fyb3VzZWwvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL2Nhcm91c2VsL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NoZWNrYm94XCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvY2hlY2tib3gvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy9jaGVja2JveC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvY2hlY2tib3gvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vY2hlY2tsaXN0XCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvY2hlY2tsaXN0L2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvY2hlY2tsaXN0L2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy9jaGVja2xpc3QvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vY29sbGFwc2libGVcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9jb2xsYXBzaWJsZS9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL2NvbGxhcHNpYmxlL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy9jb2xsYXBzaWJsZS9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9jb21ib2JveFwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL2NvbWJvYm94L2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvY29tYm9ib3gvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL2NvbWJvYm94L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2Ryb3Bkb3duXCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvZHJvcGRvd24vaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy9kcm9wZG93bi9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvZHJvcGRvd24vaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGFiZWxcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9sYWJlbC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL2xhYmVsL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy9sYWJlbC9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9tb2RhbFwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL21vZGFsL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvbW9kYWwvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL21vZGFsL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3BhZ2UtbmF2aWdhdGlvblwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3BhZ2UtbmF2aWdhdGlvbi9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL3BhZ2UtbmF2aWdhdGlvbi9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvcGFnZS1uYXZpZ2F0aW9uL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3BhZ2luYXRpb25cIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9wYWdpbmF0aW9uL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvcGFnaW5hdGlvbi9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvcGFnaW5hdGlvbi9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9wb2x5bW9ycGhpY1wiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3BvbHltb3JwaGljL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvcG9seW1vcnBoaWMvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL3BvbHltb3JwaGljL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3BvcG92ZXJcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy9wb3BvdmVyL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvcG9wb3Zlci9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvcG9wb3Zlci9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9wcm9ncmVzc1wiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3Byb2dyZXNzL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvcHJvZ3Jlc3MvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL3Byb2dyZXNzL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3NlbGVjdFwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3NlbGVjdC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL3NlbGVjdC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvc2VsZWN0L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3NlcGFyYXRvclwiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3NlcGFyYXRvci9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL3NlcGFyYXRvci9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvc2VwYXJhdG9yL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3N2Zy1pY29uXCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvc3ZnLWljb24vaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy9zdmctaWNvbi9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvc3ZnLWljb24vaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vdGFic1wiOiB7XG4gICAgICBcInF3aWtcIjogXCIuL2xpYi9wcmltaXRpdmVzL3RhYnMvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy90YWJzL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9saWItdHlwZXMvcHJpbWl0aXZlcy90YWJzL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3RvYXN0ZXJcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy90b2FzdGVyL2luZGV4LnF3aWsubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vbGliL3ByaW1pdGl2ZXMvdG9hc3Rlci9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliLXR5cGVzL3ByaW1pdGl2ZXMvdG9hc3Rlci9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi90b2dnbGVcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy90b2dnbGUvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy90b2dnbGUvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL3RvZ2dsZS9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi90b2dnbGUtZ3JvdXBcIjoge1xuICAgICAgXCJxd2lrXCI6IFwiLi9saWIvcHJpbWl0aXZlcy90b2dnbGUtZ3JvdXAvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvcHJpbWl0aXZlcy90b2dnbGUtZ3JvdXAvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL3RvZ2dsZS1ncm91cC9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi90b29sdGlwXCI6IHtcbiAgICAgIFwicXdpa1wiOiBcIi4vbGliL3ByaW1pdGl2ZXMvdG9vbHRpcC9pbmRleC5xd2lrLm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9wcmltaXRpdmVzL3Rvb2x0aXAvaW5kZXgucXdpay5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2xpYi10eXBlcy9wcmltaXRpdmVzL3Rvb2x0aXAvaW5kZXguZC50c1wiXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQXFCLG9CQUFvQjs7O0FDQWpYO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxLQUFPO0FBQUEsRUFDUCxhQUFlO0FBQUEsRUFDZixZQUFjO0FBQUEsRUFDZCxTQUFXO0FBQUEsRUFDWCxVQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixvQkFBb0I7QUFBQSxJQUNwQixxQkFBcUI7QUFBQSxJQUNyQixxQkFBcUI7QUFBQSxJQUNyQixlQUFlO0FBQUEsSUFDZixzQkFBc0I7QUFBQSxJQUN0QixVQUFZO0FBQUEsSUFDWixJQUFNO0FBQUEsSUFDTixhQUFlO0FBQUEsSUFDZixZQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsSUFDVixNQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsZUFBaUI7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QscUJBQXFCO0FBQUEsSUFDckIsb0JBQW9CO0FBQUEsSUFDcEIsNkJBQTZCO0FBQUEsSUFDN0IscUJBQXFCO0FBQUEsSUFDckIsNEJBQTRCO0FBQUEsSUFDNUIsTUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2Qsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQUs7QUFBQSxNQUNILE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDbkIsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsTUFDaEIsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGOzs7QUR2TEEsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyx3QkFBd0I7QUFFL0IsSUFBTSxFQUFFLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEVBQUUsSUFBSTtBQUNyRCxJQUFNLFlBQVksQ0FBQyxRQUFRLElBQUksT0FBTyxJQUFJLEdBQUcsU0FBUztBQUN0RCxJQUFNLGFBQWEsQ0FBQyxRQUFRLE9BQU8sS0FBSyxHQUFHLEVBQUUsSUFBSSxTQUFTO0FBRzFELFNBQVMsMkJBQTJCLFNBQXNEO0FBQ3hGLFFBQU1BLFdBQWtDLENBQUM7QUFFekMsYUFBVyxDQUFDLFlBQVksWUFBWSxLQUFLLE9BQU8sUUFBUSxPQUFPLEdBQUc7QUFDaEUsUUFBSSxPQUFPLGlCQUFpQixZQUFZLGFBQWEsTUFBTTtBQUV6RCxZQUFNLFdBQVcsYUFBYTtBQUs5QixZQUFNLFVBQVUsU0FBUyxRQUFRLFVBQVUsRUFBRSxFQUFFLFFBQVEsYUFBYSxFQUFFO0FBR3RFLFlBQU0sVUFBVSxTQUFTLE9BQU87QUFHaEMsTUFBQUEsU0FBUSxPQUFPLElBQUk7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFFQSxTQUFPQTtBQUNUO0FBRUEsSUFBTSxVQUFVLDJCQUEyQixnQkFBSSxXQUFXLENBQUMsQ0FBQztBQUVyRCxJQUFNLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFFBQVEsY0FDakIsR0FBRyxTQUFTLFNBQVMsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUFBLElBQ3hEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixpQkFBaUI7QUFBQSxRQUNqQixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBO0FBQUEsTUFFQSxVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0EsR0FBRyxXQUFXLFlBQVk7QUFBQSxRQUMxQixHQUFHLFdBQVcsZ0JBQWdCO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLElBQ2QsWUFBWTtBQUFBLE1BQ1YsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLElBQzlCLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWEsTUFBTSxVQUFVOyIsCiAgIm5hbWVzIjogWyJlbnRyaWVzIl0KfQo=
