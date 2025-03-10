import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from '@tailwindcss/vite'

export default defineConfig((): UserConfig => ({
  plugins: [qwikVite(), tsconfigPaths(), tailwindcss()],
}));
