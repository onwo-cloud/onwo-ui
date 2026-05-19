import { dual } from 'effect/Function';

type StringMatcher = { [Symbol.match](string: string): RegExpMatchArray | null };
type StringSearcher = { [Symbol.search](string: string): number };
type StringSplitter = string | { [Symbol.split](string: string, limit?: number): string[] };

type StringReplacer =
  | { [Symbol.replace](string: string, replaceValue: string): string }
  | {
      [Symbol.replace](
        string: string,
        replacer: (substring: string, ...args: any[]) => string,
      ): string;
    };

type ReplaceValue = string | ((substring: string, ...args: any[]) => string);

/**
 * Matches a string against a matcher (e.g. RegExp).
 *
 * @example
 * match("hello", /hell/)
 * pipe("hello", match(/hell/))
 */
export const match: {
  (matcher: StringMatcher): (self: string) => RegExpMatchArray | null;
  (self: string, matcher: StringMatcher): RegExpMatchArray | null;
} = dual(2, (self: string, matcher: StringMatcher): RegExpMatchArray | null => {
  return self.match(matcher);
});

/**
 * Replaces text in a string using a search value (RegExp/Symbol) and a replacement.
 *
 * @example
 * replace("hello world", "world", "effect")
 * pipe("hello world", replace("world", "effect"))
 */
export const replace: {
  (searchValue: StringReplacer, replaceValue: ReplaceValue): (self: string) => string;
  (self: string, searchValue: StringReplacer, replaceValue: ReplaceValue): string;
} = dual(3, (self: string, searchValue: StringReplacer, replaceValue: ReplaceValue): string =>
  self.replace(searchValue as any, replaceValue as any),
);

/**
 * Finds the index of the first substring match.
 *
 * @example
 * search("hello", /e/) // 1
 * pipe("hello", search(/e/))
 */
export const search: {
  (searcher: StringSearcher): (self: string) => number;
  (self: string, searcher: StringSearcher): number;
} = dual(2, (self: string, searcher: StringSearcher): number => self.search(searcher));

/**
 * Splits a string into substrings using the specified separator.
 *
 * @example
 * split("a,b,c", ",")
 * pipe("a,b,c", split(","))
 */
export const split: {
  (splitter: StringSplitter, limit?: number): (self: string) => string[];
  (self: string, splitter: StringSplitter, limit?: number): string[];
} = dual(2, (self: string, splitter: StringSplitter, limit?: number): string[] =>
  self.split(splitter as any, limit),
);
