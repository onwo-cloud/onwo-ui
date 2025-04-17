import fs from 'node:fs/promises';
import path from 'node:path';
import { watch } from 'chokidar';

const debounced = <CB extends () => unknown>(cb: CB, ms: number) => {
  let currentTimeout: undefined | NodeJS.Timeout;

  return () => {
    if (currentTimeout) clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => cb(), ms);
  };
};

/**
 * Watches a directory for changes and updates the file times of a project entry point.
 *
 * @param {string} pathToWatch - Path to the directory to watch for changes.
 * @param {string} projectEntryPath - Path to the project entry point file or any file in hot reloading.
 */
export const hackwatcher = (
  pathToWatch: string | string[],
  projectEntryPath: string | string[],
  debouncedMs = 1000,
) => {
  const watcher = watch(pathToWatch, { ignoreInitial: true });

  const entries = Array.isArray(projectEntryPath) ? projectEntryPath : [projectEntryPath];
  const filePaths = entries.map((entry) => path.join(process.cwd(), entry));

  const watcherFn = debounced(() => {
    for (const fp of filePaths) {
      fs.utimes(fp, new Date(), new Date());
    }
  }, debouncedMs);

  watcher.on('add', watcherFn);
  watcher.on('change', watcherFn);
  watcher.on('unlink', watcherFn);
};
