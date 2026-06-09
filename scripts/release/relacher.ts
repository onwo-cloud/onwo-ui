import { join } from 'node:path';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { Effect, pipe } from 'effect';
import {
  prepare,
  prettyPrint,
  run,
  makeRCVersionManager,
  VersionManagerService,
  VcsProviderService,
  makeJjVcsProvider,
  printDependencyList,
  log,
} from 'relacher';

import { depsBuilder } from './deps';
// ── Argument Parsing & Validation ──────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const root = join(import.meta.dir, '../..');

const workspaceDeps = depsBuilder(root);

const positionalArgs = args.filter((arg) => !arg.startsWith('-'));
const mode = positionalArgs[0];

if (!mode || (mode !== 'pre-release' && mode !== 'release')) {
  log.error(
    [
      'Invalid or missing mode.',
      '',
      'Usage:',
      '  dev relacher pre-release [--dry-run]',
      '  dev relacher release     [--dry-run]',
    ].join('\n'),
  );
  process.exit(1);
}

async function askConfirmation(query: string): Promise<boolean> {
  const rl = readline.createInterface({ input, output });
  const ans = await rl.question(query);
  rl.close();
  return ans.trim().toLowerCase() === 'y';
}

// ── Execution Flow ─────────────────────────────────────────────────────────
const runRelease = Effect.gen(function*() {
  const isPreRelease = mode === 'pre-release';

  log.step(
    `Preflight checks & Workspace Discovery (${pipe(mode.toUpperCase(), log.c.bold, log.c.magenta)} mode)`,
  );

  log.step(`Scanned ${workspaceDeps.length} dependencies`);
  printDependencyList(workspaceDeps, true);
  const vcs = makeJjVcsProvider(root);

  const vm = makeRCVersionManager(vcs, {
    upgradeReady: !isPreRelease,
    sizes: {
      major: { pattern: '^[a-z]+(?:\\([^)]+\\))?!|^[a-z]+\\([^)]+\\)!:|^BREAKING CHANGE' },
      minor: { pattern: '^(feat|revert|refactor|perf)' },
      patch: { pattern: '^(fix|bugfix|patch|deps)' },
      skip: { pattern: '^(root|release|chore|infra|docs|test|ci|build|nit|style)' },
    },
    cascade: {
      patch: {
        skip: 'patch',
        patch: 'patch',
        minor: 'minor',
        major: 'minor',
      },
    },
  });

  const updates = yield* prepare(workspaceDeps, {
    cwd: root,
  }).pipe(Effect.provideService(VersionManagerService, vm));

  log.step('Proposed Updates');
  prettyPrint(updates);

  let liveRun = !dryRun;
  if (liveRun) {
    const confirmed = yield* Effect.promise(() =>
      askConfirmation(`\nProceed with staging and committing ${mode} updates? [y/N] `),
    );
    if (!confirmed) {
      liveRun = false;
      log.warn('Aborting execution flow.');
      return;
    }
  }

  if (liveRun) {
    log.step('Applying updates and writing changes');
    yield* run(updates, { cwd: root }).pipe(Effect.provideService(VcsProviderService, vcs));
    log.ok(`Updates completed successfully under ${mode} mode.`);
  } else {
    log.step('Dry run mode active');
    log.warn('No modifications written to disk.');
  }
});

Effect.runPromise(runRelease).catch((err) => {
  log.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
