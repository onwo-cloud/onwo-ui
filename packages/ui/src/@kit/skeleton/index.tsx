import type { Primitive } from '~ui/utils/types';

// TODO: animate-pulse
export const Skeleton = ({ class: className, ...props }: Primitive<'div'>) => (
  <div class={['animate-pulse rounded-md bg-primary/10', className]} {...props} />
);
