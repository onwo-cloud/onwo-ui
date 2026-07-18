import { Effect } from 'effect';
import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs/promises';
import { parseCliArgs } from './cli.js';
import { syncGitRepository } from './git.js';
import { incrementPatchVersion } from './version.js';
import { processIconSet } from './generator/processor.js';
import { log } from './logger.js';
import { FileSystemError } from './errors.js';

const ICONIFY_REPO = 'https://github.com/iconify/icon-sets.git';
const PACKAGES_DIR = join(process.cwd(), 'packages');
const CACHE_DIR = join(tmpdir(), 'iconify-repo-cache');

const listIconSetsJson = (jsonDir: string, isAll: boolean, allowedSets: ReadonlyArray<string>) =>
  Effect.tryPromise({
    try: () => fs.readdir(jsonDir),
    catch: (e) => new FileSystemError({ message: 'Failed to read JSON directory', cause: e }),
  }).pipe(
    Effect.map((files) =>
      files.filter(
        (f) =>
          f.endsWith('.json') &&
          !['collections.json', 'info.json'].includes(f) &&
          (isAll || allowedSets.includes(f.replace('.json', '')))
      )
    )
  );

const main = Effect.gen(function* () {
  log.step('Starting Multi-Library Icon Generation...');

  const cli = yield* parseCliArgs(process.argv.slice(2));

  yield* Effect.tryPromise({
    try: () => fs.mkdir(PACKAGES_DIR, { recursive: true }),
    catch: (e) => new FileSystemError({ message: 'Failed to create packages folder', cause: e }),
  });

  const tempDir = yield* syncGitRepository(ICONIFY_REPO, CACHE_DIR);
  const jsonDir = join(tempDir, 'json');
  const files = yield* listIconSetsJson(jsonDir, cli.isAll, cli.allowedSets);

  if (files.length === 0) {
    log.warn('No matching icon sets found to generate. Check your --sets argument.');
    return;
  }

  const newVersion = yield* incrementPatchVersion();
  log.ok(`Found ${files.length} icon sets to process.`);

  yield* Effect.forEach(
    files,
    (file) => processIconSet(jsonDir, file, PACKAGES_DIR, newVersion),
    { concurrency: 10 }
  );

  log.step('All icon sets generated successfully!');
});

// Run program
Effect.runPromise(main).catch((err) => {
  if (err && typeof err === 'object' && 'message' in err) {
    log.error(err.message as string);
  } else {
    log.error(String(err));
  }
  process.exit(1);
});
