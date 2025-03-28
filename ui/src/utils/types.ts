export type Classes<T extends string> = Partial<Record<T, string>>;

// eslint-disable-next-line sonarjs/no-useless-intersection
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type ExactlyOne<T, K extends keyof T = keyof T> = Prettify<
  {
    [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
  }[K]
>;
