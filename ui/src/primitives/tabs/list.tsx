import type { QwikIntrinsicElements } from '@builder.io/qwik';

export type ListProps = QwikIntrinsicElements['div'];

export const List = (props: ListProps) => (
  <div aria-orientation="horizontal" role="tablist" {...props}>
    {props.children}
  </div>
);
