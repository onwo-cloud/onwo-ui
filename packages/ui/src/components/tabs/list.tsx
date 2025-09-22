import { cn } from '@onwo/primitives';
import type { ListProps } from '@onwo/primitives/tabs';
import { List as PList } from '@onwo/primitives/tabs';

export type TabsListProps = ListProps & { size?: 'sm' | 'md' };

export const TabsList = ({ class: className, children, size = 'md', ...props }: TabsListProps) => (
  <PList
    data--size={size}
    class={cn('group/tablist flex items-center gap-2 justify-left', className)}
    {...props}
  >
    {children}
  </PList>
);
