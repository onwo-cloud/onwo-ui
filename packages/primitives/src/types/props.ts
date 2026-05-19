import { CSSProperties, QwikIntrinsicElements } from '@builder.io/qwik';

export type PropsOfElem<K extends keyof QwikIntrinsicElements> = Omit<
  QwikIntrinsicElements[K],
  'style'
> & { style?: CSSProperties };
