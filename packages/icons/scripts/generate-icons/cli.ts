import { Effect } from 'effect';
import { CliError } from './errors.js';
import type { CliConfig } from './types.js';

export const parseCliArgs = (args: string[]): Effect.Effect<CliConfig, CliError> =>
  Effect.gen(function* () {
    const isAll = args.includes('--all');
    const setsArg = args.find((arg) => arg.startsWith('--sets='));

    if (!isAll && !setsArg) {
      return yield* Effect.fail(
        new CliError({
          message:
            'No target specified. Provide --all or --sets=lucide,mdi to build specific sets.',
        })
      );
    }

    const allowedSets = setsArg && !isAll
      ? setsArg.split('=')[1].split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    if (!isAll && allowedSets.length === 0) {
      return yield* Effect.fail(
        new CliError({
          message:
            'Invalid --sets argument. Provide a comma-separated list (e.g., --sets=lucide,mdi).',
        })
      );
    }

    return { isAll, allowedSets };
  });
