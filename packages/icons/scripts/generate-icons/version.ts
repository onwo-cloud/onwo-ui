import { Effect } from 'effect';
import fs from 'fs/promises';
import { FileSystemError, JsonParseError } from './errors.js';

/**
 * Increments the patch number (semantic versioning `x.y.Z`) in the project version file.
 *
 * Reads the specified version file (defaulting to `"1.14.0"` if missing), parses the JSON structure,
 * bumps the patch component by 1, and writes the updated JSON back to disk.
 *
 * @param versionPath - Path to the version JSON file. Defaults to `'./version.json'`.
 * @returns An `Effect` resolving to the newly updated version string (e.g., `"1.14.1"`),
 *          or failing with `FileSystemError` or `JsonParseError`.
 */
export const incrementPatchVersion = (
  versionPath = './version.json'
): Effect.Effect<string, FileSystemError | JsonParseError> =>
  Effect.gen(function* () {
    const content = yield* Effect.tryPromise({
      try: () => fs.readFile(versionPath, 'utf8'),
      catch: (cause) =>
        new FileSystemError({ message: `Failed to read version file at ${versionPath}`, cause }),
    }).pipe(
      Effect.orElseSucceed(() => '{"version": "1.14.0"}')
    );

    const json = yield* Effect.try({
      try: () => JSON.parse(content) as { version: string },
      catch: (cause) =>
        new JsonParseError({ message: `Failed to parse JSON content from ${versionPath}`, cause }),
    });

    const parts = json.version.split('.');
    parts[2] = (parseInt(parts[2], 10) + 1).toString();
    json.version = parts.join('.');

    yield* Effect.tryPromise({
      try: () => fs.writeFile(versionPath, JSON.stringify(json, null, 2) + '\n', 'utf8'),
      catch: (cause) =>
        new FileSystemError({ message: `Failed to write updated version to ${versionPath}`, cause }),
    });

    return json.version;
  });
