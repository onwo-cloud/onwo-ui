import { Micro } from 'effect';
import { dual } from 'effect/Function';

import { ParseError } from './error';

// e.g.: Tuple<string, 3> => [string, string, string]
export type Tuple<T, N extends number, R extends T[] = []> = R['length'] extends N
  ? R
  : Tuple<T, N, [T, ...R]>;

/**
 * Validates that an array has a specific length and checks the type to a Tuple.
 *
 * @param size - The expected length (must be a literal number, e.g., 3).
 * @param input - The array to validate.
 */
export const parse: {
  // Data-last (Pipeable)
  <T, N extends number>(size: N): (input: T[]) => Micro.Micro<Tuple<T, N>, ParseError>;
  // Data-first
  <T, N extends number>(input: T[], size: N): Micro.Micro<Tuple<T, N>, ParseError>;
} = dual(2, <T>(input: T[], size: number): Micro.Micro<T[], ParseError> => {
  if (input.length !== size) {
    return Micro.fail(new ParseError({ message: `Expected ${size} items, got ${input.length}` }));
  }
  // Safe cast because runtime check ensures length
  return Micro.succeed(input);
});
