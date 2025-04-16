import { cn } from '@onwo/primitives';
import type { Primitive } from '~/utils/types';

type Y = 'top' | 'bottom';
type X = 'left' | 'right';

type XY = `${Y}-${X}`;

export type StatusProps = Primitive<'div'> & {
  position?: XY;
};

export const Status = ({ position = 'bottom-right', class: className, ...props }: StatusProps) => (
  <div
    class={cn(
      {
        'absolute border-parchment bg-success rounded-full w-3 h-3 border-solid border-2': true,
        'bottom-0 right-0': position === 'bottom-right',
        'bottom-0 left-0': position === 'bottom-left',
        'top-0 right-0': position === 'top-right',
        'top-0 left-0': position === 'top-left',
      },
      className,
    )}
    {...props}
  />
);
