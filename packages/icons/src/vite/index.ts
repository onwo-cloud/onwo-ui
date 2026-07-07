import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';

// Securely get the __dirname in an ESM file
const _dirname = typeof __dirname !== 'undefined' 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

interface ExternalIconsOptions {
  iconsets: string[];
}

export function onwoIconsVite(options: ExternalIconsOptions): Plugin {
  let projectRoot = process.cwd();
  let isBuild = false;

  function getPrefix(pkgName: string) {
    return pkgName.split('iconset-')[1] || pkgName.split('/').pop() || 'unknown';
  }

  // Robustly find the source icons directory
  function getSrcDir(pkgName: string) {
    const prefix = getPrefix(pkgName);
    const iconsSubpath = 'lib/icons';

    // 1. Try resolving from the app root (e.g., docs/node_modules/)
    try {
      const req = createRequire(path.join(projectRoot, 'package.json'));
      const pkgJson = req.resolve(`${pkgName}/package.json`);
      const resolvedPath = path.join(path.dirname(pkgJson), iconsSubpath);
      if (fs.existsSync(resolvedPath)) return resolvedPath;
    } catch {}

    // 2. Fallback to physical monorepo workspace path (matches your manual script)
    // Plugin is in: packages/icons/src/vite
    // Target is in: packages/icons/packages/iconset-[prefix]/lib/icons
    const workspacePath = path.resolve(_dirname, `../../packages/iconset-${prefix}/${iconsSubpath}`);
    if (fs.existsSync(workspacePath)) {
      return workspacePath;
    }

    return null;
  }

  return {
    name: 'onwo-icons-vite',

    config(_, { command }) {
      isBuild = command === 'build';
    },

    // Safely capture the actual app directory (equivalent to __dirname in docs/vite.config.ts)
    configResolved(resolvedConfig) {
      projectRoot = resolvedConfig.root;
    },

    // DEV MODE: Serve the icons dynamically straight from the workspace packages
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? new URL(req.url, 'http://localhost') : null;
        
        if (url && url.pathname.startsWith('/build/icons/')) {
          const parts = url.pathname.split('/');
          const prefix = parts[3]; 
          const iconName = parts[4]; 

          const pkgName = options.iconsets.find(p => p.includes(`iconset-${prefix}`));
          if (pkgName) {
            const srcDir = getSrcDir(pkgName);
            if (srcDir) {
              const iconPath = path.join(srcDir, iconName);
              if (fs.existsSync(iconPath)) {
                res.setHeader('Content-Type', 'application/javascript');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.writeHead(200);
                res.end(fs.readFileSync(iconPath));
                return;
              }
            }
          }
        }
        next();
      });
    },

    // BUILD MODE: Safely copy all icons at the very end of the build process
    closeBundle() {
      if (!isBuild) return;

      // Hardcode to 'dist/build/icons' exactly like your manual setup
      const baseDest = path.resolve(projectRoot, 'dist/build/icons');

      for (const pkg of options.iconsets) {
        const srcDir = getSrcDir(pkg);

        if (!srcDir) {
          console.warn(`\n[onwoIconsVite] ⚠️ Could not find icons directory for ${pkg}\n`);
          continue;
        }

        const prefix = getPrefix(pkg);
        const destDir = path.join(baseDest, prefix);

        try {
          fs.cpSync(srcDir, destDir, { recursive: true });
        } catch (err) {
          console.error(`\n[onwoIconsVite] ❌ Failed to copy icons for ${pkg}:`, err);
        }
      }
    },
  };
}
