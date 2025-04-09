import { Tabs } from '@onwo/primitives';
import { cn } from '~/utils/cn';

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
