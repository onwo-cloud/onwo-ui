import { Effect, Console, Data } from 'effect';
import { exec } from 'child_process';
import { promisify } from 'util';
import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs/promises';

const execAsync = promisify(exec);

// --- CONFIGURATION ---
const ICONIFY_REPO = 'https://github.com/iconify/icon-sets.git';
const PACKAGES_DIR = join(process.cwd(), 'packages');
const ALLOWED_SETS: string[] = []; // empty array = all libraries

class ProcessError extends Data.TaggedError("ProcessError")<{ readonly message: string; readonly cause?: unknown }> {}

// --- EFFECT PIPELINE ---
const cloneRepo = (target: string) =>
  Effect.tryPromise({
    try: () => execAsync(`git clone --depth 1 ${ICONIFY_REPO} ${target}`),
    catch: (e) => new ProcessError({ message: 'Failed to clone iconify', cause: e })
  }).pipe(Effect.tap(() => Console.log('📦 Successfully cloned Iconify repository.')));

const listIconSetsJson = (jsonDir: string) =>
  Effect.tryPromise({
    try: () => fs.readdir(jsonDir),
    catch: (e) => new ProcessError({ message: 'Failed to read json directory', cause: e })
  }).pipe(
    Effect.map((files) =>
      files.filter((f) => f.endsWith('.json') && !['collections.json', 'info.json'].includes(f) && 
      (ALLOWED_SETS.length === 0 || ALLOWED_SETS.includes(f.replace('.json', ''))))
    )
  );

const bumpVersion = Effect.gen(function* (_) {
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
  Effect.gen(function* (_) {
    const prefix = file.replace('.json', '');
    const content = yield* _(Effect.tryPromise(() => fs.readFile(join(jsonDir, file), 'utf8')));
    const data = JSON.parse(content);
    
    const packageDir = join(baseOutDir, `iconset-${prefix}`);
    const iconsDir = join(packageDir, 'src', 'icons');

    yield* _(Effect.tryPromise(() => fs.mkdir(iconsDir, { recursive: true })));

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

    // Process & write the icons concurrently
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

        const tsContent = `export default{body:\`${body}\`,viewBox:'${left} ${top} ${width} ${height}'};`;
        return Effect.tryPromise(() => fs.writeFile(join(iconsDir, `${iconData.name}.ts`), tsContent, 'utf8'));
      }, { concurrency: 200 }
    ));

    const iconSetName = `${toPascalCase(prefix)}IconSet`;
    const iconNamesType = `${toPascalCase(prefix)}IconName`;
    const namesUnion = Array.from(allIcons.keys()).map((name) => `  | '${name}'`).join('\n');

    const indexContent = `export type ${iconNamesType} =
${namesUnion};

export const ${iconSetName} = {
  prefix: '${prefix}' as const,
  loaders: import.meta.glob('./icons/*.ts'),
};
`;
    yield* _(Effect.tryPromise(() => fs.writeFile(join(packageDir, 'src', 'index.ts'), indexContent, 'utf8')));

    // Scaffolding package.json
    const pkgJson = {
      name: `@onwo/iconset-${prefix}`,
      version,
      main: "src/index.ts",
      type: "module"
    };
    yield* _(Effect.tryPromise(() => fs.writeFile(join(packageDir, 'package.json'), JSON.stringify(pkgJson, null, 2), 'utf8')));

    yield* _(Console.log(`✅ Generated @onwo/iconset-${prefix} (${allIcons.size} icons)`));
  }).pipe(Effect.catchAll((e) => Console.error(`❌ Failed processing ${file}:`, e)));

// --- ORCHESTRATOR ---
const program = Effect.scoped(
  Effect.gen(function* (_) {
    yield* _(Console.log('🚀 Starting Multi-Library Icon Generation...'));
    yield* _(Effect.tryPromise(() => fs.mkdir(PACKAGES_DIR, { recursive: true })));

    const tempDir = yield* _(
      Effect.acquireRelease(
        Effect.tryPromise(() => fs.mkdtemp(join(tmpdir(), 'iconify-'))),
        (dir) => Effect.tryPromise(() => fs.rm(dir, { recursive: true, force: true })).pipe(
            Effect.tap(() => Console.log('🧹 Cleaned up temporary repository clones.')),
            Effect.catchAll(() => Effect.succeed(undefined))
          )
      )
    );

    yield* _(cloneRepo(tempDir));
    const jsonDir = join(tempDir, 'json');
    const files = yield* _(listIconSetsJson(jsonDir));
    const newVersion = yield* _(bumpVersion);

    yield* _(Console.log(`📂 Found ${files.length} icon sets to process.`));

    yield* _(Effect.forEach(files, (file) => processIconSet(jsonDir, file, PACKAGES_DIR, newVersion), { concurrency: 10 }));

    yield* _(Console.log('🎉 All icon sets generated successfully!'));
  })
);

Effect.runPromise(program).catch(console.error);
