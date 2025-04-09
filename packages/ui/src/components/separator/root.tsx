import type { SeparatorProps } from '@onwo/primitives';
import { Separator, cn } from '@onwo/primitives';

export const Root = ({
  class: className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) => (
  <Separator
    decorative={decorative}
    orientation={orientation}
    class={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
    )}
    {...props}
  />
);
