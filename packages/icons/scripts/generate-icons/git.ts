import { Effect, Either } from 'effect';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import { GitError, FileSystemError } from './errors.js';
import { log } from './logger.js';

const execAsync = promisify(exec);

/**
 * Executes a shallow `git clone` of the target repository into a designated local directory.
 *
 * @param repoUrl - The remote Git repository URL.
 * @param cacheDir - The local directory path where the repository should be cloned.
 * @returns An `Effect` resolving to `void` on success, or failing with a `GitError`.
 */
const cloneRepository = (
  repoUrl: string,
  cacheDir: string
): Effect.Effect<void, GitError> =>
  Effect.tryPromise({
    try: () => execAsync(`git clone --depth 1 ${repoUrl} ${cacheDir}`),
    catch: (cause) =>
      new GitError({
        message: `Failed to clone repository from ${repoUrl} into ${cacheDir}`,
        cause,
      }),
  }).pipe(Effect.asVoid);

/**
 * Ensures the local Iconify Git repository cache is cloned and up-to-date.
 *
 * Checks if the repository directory exists:
 * - If present: Attempts a `git pull`. If update fails due to local changes or unrecoverable state,
 *   it cleans up the directory and performs a fresh clone.
 * - If absent: Performs an initial shallow clone.
 *
 * @param repoUrl - The remote Git repository URL to sync.
 * @param cacheDir - The local directory path used for caching the repository.
 * @returns An `Effect` resolving to the `cacheDir` path on success, or failing with `GitError` or `FileSystemError`.
 */
export const syncGitRepository = (
  repoUrl: string,
  cacheDir: string
): Effect.Effect<string, GitError | FileSystemError> =>
  Effect.gen(function* () {
    const isCached = yield* Effect.tryPromise({
      try: () => fs.access(cacheDir).then(() => true).catch(() => false),
      catch: (cause) =>
        new FileSystemError({ message: 'Failed to access repository cache directory', cause }),
    });

    if (isCached) {
      log.ok('Found cached repository. Attempting update via git pull...');

      const pullResult = yield* Effect.either(
        Effect.tryPromise({
          try: () => execAsync('git pull', { cwd: cacheDir }),
          catch: (cause) => new GitError({ message: 'Git pull command failed', cause }),
        })
      );

      if (Either.isLeft(pullResult)) {
        log.warn('Cache update failed or repository was modified. Re-cloning fresh copy...');
        yield* Effect.tryPromise({
          try: () => fs.rm(cacheDir, { recursive: true, force: true }),
          catch: (cause) =>
            new FileSystemError({ message: 'Failed to remove corrupted cache directory', cause }),
        });
        yield* cloneRepository(repoUrl, cacheDir);
      } else {
        log.ok('Cached repository successfully updated.');
      }
    } else {
      log.ok('Cache not found. Cloning repository...');
      yield* cloneRepository(repoUrl, cacheDir);
    }

    return cacheDir;
  });
