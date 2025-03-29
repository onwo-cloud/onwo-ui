import type { QwikHTMLElements } from '@builder.io/qwik';

export type ListProps = QwikHTMLElements['div'];

export const List = (props: ListProps) => (
  <div aria-orientation="horizontal" role="tablist" {...props}>
    {props.children}
  </div>
);
