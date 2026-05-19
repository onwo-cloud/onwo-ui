import type { Primitive } from '~primitives/utils/as';

export type ListProps = Primitive<'div'>;

export const List = (props: ListProps) => (
  <div aria-orientation="horizontal" role="tablist" {...props}>
    {props.children}
  </div>
);
