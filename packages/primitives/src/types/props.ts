import { CSSProperties, QwikIntrinsicElements } from '@qwik.dev/core';

export type PropsOfElem<K extends keyof QwikIntrinsicElements> = Omit<
  QwikIntrinsicElements[K],
  'style'
> & { style?: CSSProperties };
