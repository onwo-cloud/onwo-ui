import { cn } from '~/utils/cn';
import type { Primitive } from '~/utils/types';

// TODO: animate-pulse
export const Skeleton = ({ class: className, ...props }: Primitive<'div'>) => (
  <div class={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />
);
