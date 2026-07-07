import { Effect, Data, pipe } from 'effect';
import { exec } from 'child_process';
import { promisify } from 'util';
import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs/promises';

// ── CLI Polish Formatting Helpers ──────────────────────────────────────────
export const c = {
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[34m${s}\x1b[0m`,
  magenta: (s: string) => `\x1b[35m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
  reset: '\x1b[0m',
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  gray: (s: string) => `\x1b[90m${s}\x1b[0m`,
};

export const log = {
  c,
  step: (msg: string) => console.info(`\n${pipe(msg, c.bold, c.blue)}`),
  ok: (msg: string) => console.log(`  ${c.green('✓')} ${msg}`),
  warn: (msg: string) => console.warn(`  ${c.yellow('⚠')} ${msg}`),
  error: (msg: string) => console.error(`\n${c.red(`✗ ${msg}`)}`),
};

// --- ARGUMENT PARSING ---
const args = process.argv.slice(2);
const isAll = args.includes('--all');
const setsArg = args.find((arg) => arg.startsWith('--sets='));

if (!isAll && !setsArg) {
  log.warn('No target specified. Please provide --all to generate all iconsets, or --sets=lucide,mdi to build specific ones. Skipping build.');
  process.exit(0);
}

const ALLOWED_SETS: string[] = setsArg && !isAll
  ? setsArg.split('=')[1].split(',').map((s) => s.trim()).filter(Boolean)
  : [];

if (!isAll && ALLOWED_SETS.length === 0) {
  log.error('Invalid --sets argument. Please provide a comma-separated list of icon sets (e.g., --sets=lucide,mdi).');
  process.exit(1);
}

const execAsync = promisify(exec);

// --- CONFIGURATION ---
const ICONIFY_REPO = 'https://github.com/iconify/icon-sets.git';
const PACKAGES_DIR = join(process.cwd(), 'packages');
const CACHE_DIR = join(tmpdir(), 'iconify-repo-cache');

class ProcessError extends Data.TaggedError("ProcessError")<{ readonly message: string; readonly cause?: unknown }> { }

// --- CACHING & CLONING ---
const setupRepo = Effect.gen(function*(_) {
  const exists = yield* _(
    Effect.tryPromise({
      try: () => fs.access(CACHE_DIR).then(() => true).catch(() => false),
      catch: () => false,
    })
  );

  if (exists) {
    yield* _(Effect.sync(() => log.ok('Found cached repository. Attempting update via git pull...')));
    const pullResult = yield* _(
      Effect.tryPromise({
        try: () => execAsync('git pull', { cwd: CACHE_DIR }),
        catch: (e) => e,
      })
    );

    if (pullResult instanceof Error) {
      yield* _(Effect.sync(() => log.warn('Cache update failed or repository was modified. Re-cloning...')));
      yield* _(Effect.tryPromise(() => fs.rm(CACHE_DIR, { recursive: true, force: true })));
      yield* _(
        Effect.tryPromise({
          try: () => execAsync(`git clone --depth 1 ${ICONIFY_REPO} ${CACHE_DIR}`),
          catch: (e) => new ProcessError({ message: 'Failed to clone iconify repo', cause: e }),
        })
      );
    } else {
      yield* _(Effect.sync(() => log.ok('Cached repository successfully updated.')));
    }
  } else {
    yield* _(Effect.sync(() => log.ok('Cache not found. Cloning repository...')));
    yield* _(
      Effect.tryPromise({
        try: () => execAsync(`git clone --depth 1 ${ICONIFY_REPO} ${CACHE_DIR}`),
        catch: (e) => new ProcessError({ message: 'Failed to clone iconify repo', cause: e }),
      })
    );
  }
  return CACHE_DIR;
});

const listIconSetsJson = (jsonDir: string) =>
  Effect.tryPromise({
    try: () => fs.readdir(jsonDir),
    catch: (e) => new ProcessError({ message: 'Failed to read json directory', cause: e })
  }).pipe(
    Effect.map((files) =>
      files.filter((f) =>
        f.endsWith('.json') &&
        !['collections.json', 'info.json'].includes(f) &&
        (isAll || ALLOWED_SETS.includes(f.replace('.json', '')))
      )
    )
  );

const bumpVersion = Effect.gen(function*(_) {
  const versionPath = './version.json';
  const content = yield* _(Effect.tryPromise({ try: () => fs.readFile(versionPath, 'utf8'), catch: () => '{"version": "1.14.0"}' }));
  const json = JSON.parse(content);
  const parts = json.version.split('.');
  parts[2] = (parseInt(parts[2], 10) + 1).toString();
  json.version = parts.join('.');
  yield* _(Effect.tryPromise(() => fs.writeFile(versionPath, JSON.stringify(json, null, 2) + '\n', 'utf8')));
  return json.version;
});

const toPascalCase = (str: string): string => str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());

// --- CORE GENERATION ---
const processIconSet = (jsonDir: string, file: string, baseOutDir: string, version: string) =>
  Effect.gen(function*(_) {
    const prefix = file.replace('.json', '');
    const content = yield* _(Effect.tryPromise(() => fs.readFile(join(jsonDir, file), 'utf8')));
    const data = JSON.parse(content);

    const packageDir = join(baseOutDir, `iconset-${prefix}`);
    const libDir = join(packageDir, 'lib');
    const libIconsDir = join(libDir, 'icons');
    const typesDir = join(packageDir, 'lib-types');
    const typesIconsDir = join(typesDir, 'icons');

    // Create output directories
    yield* _(Effect.tryPromise(() => fs.mkdir(libIconsDir, { recursive: true })));
    yield* _(Effect.tryPromise(() => fs.mkdir(typesIconsDir, { recursive: true })));

    const globalWidth = data.width || 24;
    const globalHeight = data.height || 24;
    const allIcons = new Map<string, any>();

    // Register actual icons
    for (const [name, iconData] of Object.entries(data.icons || {})) {
      allIcons.set(name, { ...(iconData as any), name });
    }

    // Resolve parent aliases & transformations
    for (const [name, aliasData] of Object.entries(data.aliases || {})) {
      const parentName = (aliasData as any).parent;
      const parentData = allIcons.get(parentName);
      if (parentData) allIcons.set(name, { ...parentData, ...(aliasData as any), name });
    }

    // Process & write pre-built ESM/CJS and .d.ts files for icons
    yield* _(Effect.forEach(allIcons.values(), (iconData: any) => {
      const left = iconData.left || 0;
      const top = iconData.top || 0;
      const width = iconData.width || globalWidth;
      const height = iconData.height || globalHeight;
      let body = iconData.body;

      if (iconData.hFlip || iconData.vFlip || iconData.rotate) {
        let transform = '';
        const cx = left + width / 2;
        const cy = top + height / 2;
        if (iconData.hFlip) transform += ` translate(${width + 2 * left}, 0) scale(-1, 1)`;
        if (iconData.vFlip) transform += ` translate(0, ${height + 2 * top}) scale(1, -1)`;
        if (iconData.rotate) transform += ` rotate(${iconData.rotate * 90} ${cx} ${cy})`;
        body = `<g transform="${transform.trim()}">${body}</g>`;
      }

      const escapedBody = body.replace(/`/g, '\\`');

      const mjsContent = `export default{body:\`${escapedBody}\`,viewBox:'${left} ${top} ${width} ${height}'};`;
      const cjsContent = `"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nconst _default = { body: \`${escapedBody}\`, viewBox: '${left} ${top} ${width} ${height}' };\nexports.default = _default;\n`;
      const dtsContent = `declare const _default:{body:string;viewBox:string};\nexport default _default;\n`;

      // Write as standard .mjs and .cjs so the Qwik AST Optimizer ignores these files!
      const writeMjs = fs.writeFile(join(libIconsDir, `${iconData.name}.mjs`), mjsContent, 'utf8');
      const writeCjs = fs.writeFile(join(libIconsDir, `${iconData.name}.cjs`), cjsContent, 'utf8');
      const writeDts = fs.writeFile(join(typesIconsDir, `${iconData.name}.d.ts`), dtsContent, 'utf8');

      return Effect.tryPromise(() => Promise.all([writeMjs, writeCjs, writeDts]));
    }, { concurrency: 200 }
    ));

    const iconSetName = `${toPascalCase(prefix)}IconSet`;
    const iconNamesType = `${toPascalCase(prefix)}IconName`;

    const iconNames = Array.from(allIcons.keys());
    const namesUnion = iconNames.map((name) => `  | '${name}'`).join('\n');
    const keysArrayString = JSON.stringify(iconNames);

    // Generate lib/index.qwik.mjs using import.meta.glob (Processed by Vite/Qwik naturally)
    const indexMjsContent = `const modules = import.meta.glob('./icons/*.mjs', { import: 'default' });

export const ${iconSetName} = {
  prefix: '${prefix}',
  name: '${prefix}',
  loaders: Object.fromEntries(
    Object.entries(modules).map(([path, load]) => [
      path.slice(8, -4), // removes './icons/' and '.mjs'
      load
    ])
  )
};
`;

    // Generate lib/index.qwik.cjs using dynamic import fallback for Node SSR environments
    const indexCjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const keys = ${keysArrayString};
const keysSet = new Set(keys);

exports.${iconSetName} = {
  prefix: '${prefix}',
  name: '${prefix}',
  loaders: new Proxy({}, {
    get: (_, prop) => {
      if (typeof prop === 'string' && keysSet.has(prop)) {
        return () => import(\`./icons/\${prop}.mjs\`).then(m => m.default);
      }
      return undefined;
    },
    has: (_, prop) => keysSet.has(prop),
    ownKeys: () => keys,
    getOwnPropertyDescriptor: (_, prop) => {
      if (typeof prop === 'string' && keysSet.has(prop)) {
        return {
          enumerable: true,
          configurable: true,
          writable: true,
          value: () => import(\`./icons/\${prop}.mjs\`).then(m => m.default)
        };
      }
      return undefined;
    }
  })
};
`;

    // Generate lib-types/index.d.ts with matching __names property for types
    const indexDtsContent = `export type ${iconNamesType} =
${namesUnion};

export interface IconData {
  body: string;
  viewBox: string;
}

export const ${iconSetName}: {
  __names: ${iconNamesType};
  prefix: '${prefix}';
  name: '${prefix}';
  loaders: Record<${iconNamesType}, () => Promise<IconData>>;
};
`;

    yield* _(Effect.tryPromise(() => fs.writeFile(join(libDir, 'index.qwik.mjs'), indexMjsContent, 'utf8')));
    yield* _(Effect.tryPromise(() => fs.writeFile(join(libDir, 'index.qwik.cjs'), indexCjsContent, 'utf8')));
    yield* _(Effect.tryPromise(() => fs.writeFile(join(typesDir, 'index.d.ts'), indexDtsContent, 'utf8')));

    // Scaffolding package.json with Qwik requirements
    const pkgJson = {
      name: `@onwo/iconset-${prefix}`,
      version,
      main: "./lib/index.qwik.mjs",
      qwik: "./lib/index.qwik.mjs",
      types: "./lib-types/index.d.ts",
      type: "module",
      exports: {
        ".": {
          "types": "./lib-types/index.d.ts",
          "import": "./lib/index.qwik.mjs",
          "require": "./lib/index.qwik.cjs"
        },
        "./lib/icons/*.mjs": "./lib/icons/*.mjs",
        "./lib/icons/*.cjs": "./lib/icons/*.cjs"
      },
      files: [
        "lib",
        "lib-types"
      ],
      sideEffects: false
    };

    yield* _(Effect.tryPromise(() => fs.writeFile(join(packageDir, 'package.json'), JSON.stringify(pkgJson, null, 2), 'utf8')));

    yield* _(Effect.sync(() => log.ok(`Generated pre-built Qwik library @onwo/iconset-${prefix} (${allIcons.size} icons)`)));
  }).pipe(Effect.catchAll((e) => Effect.sync(() => log.error(`Failed processing ${file}: ${e}`))));

// --- ORCHESTRATOR ---
const program = Effect.scoped(
  Effect.gen(function*(_) {
    yield* _(Effect.sync(() => log.step('Starting Multi-Library Icon Generation...')));
    yield* _(Effect.tryPromise(() => fs.mkdir(PACKAGES_DIR, { recursive: true })));

    const tempDir = yield* _(setupRepo);
    const jsonDir = join(tempDir, 'json');
    const files = yield* _(listIconSetsJson(jsonDir));

    if (files.length === 0) {
      yield* _(Effect.sync(() => log.warn('No matching icon sets found to generate. Check your --sets argument.')));
      return;
    }

    const newVersion = yield* _(bumpVersion);

    yield* _(Effect.sync(() => log.ok(`Found ${files.length} icon sets to process.`)));

    yield* _(Effect.forEach(files, (file) => processIconSet(jsonDir, file, PACKAGES_DIR, newVersion), { concurrency: 10 }));

    yield* _(Effect.sync(() => log.step('All icon sets generated successfully!')));
  })
);

Effect.runPromise(program).catch((e) => log.error(String(e)));
