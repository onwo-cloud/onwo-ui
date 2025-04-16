import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

export type RootProps = {
  children?: JSXChildren;
};

export const Root = withAs('div')<RootProps>(({ As, class: className, ...props }) => (
  <As
    {...props}
    class={cn(
      'relative flex p-4 bg-paper text-ink flex-col rounded-onwo-s-sm gap-x-3 gap-y-1 text-onwo-14 w-full',
      className,
    )}
    role="alert"
  />
));
