import type { OwPropsOf } from '~primitives/utils/as';

export type TabsListProps = OwPropsOf<'div'>;

export const TabsList = (props: TabsListProps) => (
  <div aria-orientation="horizontal" role="tablist" {...props}>
    {props.children}
  </div>
);
