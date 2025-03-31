import fs from 'node:fs/promises';
import path from 'node:path';
import { watch } from 'chokidar';

/**
 * Watches a directory for changes and updates the file times of a project entry point.
 *
 * @param {string} pathToWatch - Path to the directory to watch for changes.
 * @param {string} projectEntryPath - Path to the project entry point file or any file in hot reloading.
 */
export const hackwatcher = (pathToWatch: string, projectEntryPath: string) => {
  const watcher = watch(pathToWatch, {
    ignoreInitial: true,
  });

  const watcherFn = () => {
    const filePath = path.join(process.cwd(), projectEntryPath);
    setTimeout(() => fs.utimes(filePath, new Date(), new Date()), Math.random() * 200);
  };

  watcher.on('add', watcherFn);
  watcher.on('change', watcherFn);
  watcher.on('unlink', watcherFn);
};
