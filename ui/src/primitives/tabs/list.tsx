import type { Primitive } from '~/utils/types';

export type ListProps = Primitive<'div'>;

export const List = (props: ListProps) => (
  <div aria-orientation="horizontal" role="tablist" {...props}>
    {props.children}
  </div>
);
