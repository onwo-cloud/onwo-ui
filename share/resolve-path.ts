import fs from 'fs';
import path from 'path';

import type { Plugin } from 'vite';

const extensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.mjs', '.mts', '.cjs', '.cts', '.json'];

interface ParsedConfig {
  absoluteBaseUrl: string;
  paths?: Record<string, string[]>;
}

let cachedConfig: ParsedConfig | null = null;

function loadConfig(configPath: string): ParsedConfig | null {
  if (cachedConfig) return cachedConfig;
  if (!fs.existsSync(configPath)) return null;

  try {
    const content = fs.readFileSync(configPath, 'utf-8');

    // Clean comments and trailing commas before parsing
    const cleanedContent = content
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
      .replace(/,(\s*[\]}])/g, '$1');

    const tsconfig = JSON.parse(cleanedContent);
    const compilerOptions = tsconfig.compilerOptions || {};
    const configDir = path.dirname(configPath);

    cachedConfig = {
      absoluteBaseUrl: compilerOptions.baseUrl
        ? path.resolve(configDir, compilerOptions.baseUrl)
        : configDir,
      paths: compilerOptions.paths,
    };
    return cachedConfig;
  } catch {
    return null;
  }
}

function resolveFile(absolutePath: string): string | null {
  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    return absolutePath;
  }
  for (const ext of extensions) {
    const withExt = absolutePath + ext;
    if (fs.existsSync(withExt) && fs.statSync(withExt).isFile()) {
      return withExt;
    }
  }
  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
    for (const ext of extensions) {
      const indexFile = path.join(absolutePath, 'index' + ext);
      if (fs.existsSync(indexFile) && fs.statSync(indexFile).isFile()) {
        return indexFile;
      }
    }
  }
  return null;
}

function matchPaths(
  id: string,
  paths: Record<string, string[]>,
  absoluteBaseUrl: string,
): string | null {
  for (const [pattern, targets] of Object.entries(paths)) {
    const isWildcard = pattern.endsWith('/*');
    const cleanPattern = pattern.replace(/\/\*$/, '');

    if (isWildcard) {
      if (id.startsWith(cleanPattern + '/')) {
        const match = id.slice(cleanPattern.length + 1);
        for (const target of targets) {
          const replacedTarget = target.replace('*', match);
          const resolved = path.resolve(absoluteBaseUrl, replacedTarget);
          const file = resolveFile(resolved);
          if (file) return file;
        }
      }
    } else {
      if (id === cleanPattern) {
        for (const target of targets) {
          const resolved = path.resolve(absoluteBaseUrl, target);
          const file = resolveFile(resolved);
          if (file) return file;
        }
      }
    }
  }
  return null;
}

export function tsconfigPaths(options: { tsconfigFile?: string } = {}): Plugin {
  let configPath: string;
  let config: ParsedConfig | null = null;

  return {
    name: 'vite-tsconfig-paths',
    enforce: 'pre',

    config() {
      return {
        resolve: {
          // Solves monorepo dual-package rendering hazards
          dedupe: ['@qwik.dev/core', '@qwik.dev/router'],
        },
      };
    },

    configResolved(resolvedConfig) {
      configPath = options.tsconfigFile
        ? path.resolve(resolvedConfig.root, options.tsconfigFile)
        : path.resolve(resolvedConfig.root, 'tsconfig.json');
      config = loadConfig(configPath);
    },

    configureServer(server) {
      server.watcher.on('all', (event, file) => {
        if (file === configPath) {
          cachedConfig = null;
          config = loadConfig(configPath);
        }
      });
    },

    resolveId(id, importer) {
      // Ignore relative imports, absolute paths, and virtual modules
      if (!importer || id.startsWith('.') || id.startsWith('/') || id.includes('\0')) {
        return null;
      }
      if (!config || !config.paths) {
        return null;
      }
      return matchPaths(id, config.paths, config.absoluteBaseUrl);
    },
  };
}
