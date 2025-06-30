import { cn } from '@onwo/primitives';
import type { ListProps as PListProps } from '@onwo/primitives/tabs';
import { List as PList } from '@onwo/primitives/tabs';

export type ListProps = PListProps & { size?: 'sm' | 'md' };

export const List = ({ class: className, children, size = 'md', ...props }: ListProps) => (
  <PList
    data--size={size}
    class={cn('group/tablist flex items-center gap-2 justify-left', className)}
    {...props}
  >
    {children}
  </PList>
);
