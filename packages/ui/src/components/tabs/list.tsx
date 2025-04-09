import { Tabs, cn } from '@onwo/primitives';

export type ListProps = Tabs.ListProps & { size?: 'sm' | 'md' };

export const List = ({ class: className, children, size = 'md', ...props }: ListProps) => (
  <Tabs.List
    data--size={size}
    class={cn('group/tablist flex items-center gap-2 justify-left', className)}
    {...props}
  >
    {children}
  </Tabs.List>
);
