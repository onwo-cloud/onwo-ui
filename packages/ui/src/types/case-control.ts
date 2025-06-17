// prettier-ignore
export type Letter =
  | 'a' | 'b' | 'c' | 'd' | 'e'
  | 'f' | 'g' | 'h' | 'i' | 'j'
  | 'k' | 'l' | 'm' | 'n' | 'o'
  | 'p' | 'q' | 'r' | 's' | 't'
  | 'u' | 'v' | 'w' | 'x' | 'y'
  | 'z';

export type NumberChars = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type ValidNameCharacter = Letter | NumberChars | '-';

export type ValidName<T extends string> = T extends `${Letter}${infer Rest}`
  ? Rest extends `${ValidNameCharacter}${infer _}`
    ? ValidName<Rest>
    : Rest extends ''
      ? T
      : never
  : never;
