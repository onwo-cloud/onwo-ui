// prettier-ignore
export type Letter =
  | 'a' | 'b' | 'c' | 'd' | 'e'
  | 'f' | 'g' | 'h' | 'i' | 'j'
  | 'k' | 'l' | 'm' | 'n' | 'o'
  | 'p' | 'q' | 'r' | 's' | 't'
  | 'u' | 'v' | 'w' | 'x' | 'y'
  | 'z';

export type Number = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type ValidNameCharacter = Letter | Number | '-';

export type ValidName<T extends string> = T extends `${Letter}${infer Rest}`
  ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Rest extends `${ValidNameCharacter}${infer _}`
    ? ValidName<Rest>
    : Rest extends ''
      ? T
      : never
  : never;
