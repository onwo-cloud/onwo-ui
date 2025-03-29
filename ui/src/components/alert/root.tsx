import type { JSXChildren } from '@builder.io/qwik';
import { withAs } from '~/utils/as';
import { cn } from '~/utils/cn';

export type RootProps = {
  children?: JSXChildren;
};

export const Root = withAs('div')<RootProps>(({ As, class: className, ...props }) => (
  <As
    {...props}
    class={cn(
      'relative flex p-4 bg-goku text-bulma flex-col rounded-onwo-s-sm gap-x-3 gap-y-1 text-onwo-14 w-full',
      className,
    )}
    role="alert"
  />
));
