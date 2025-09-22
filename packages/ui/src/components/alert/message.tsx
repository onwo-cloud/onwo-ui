import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

export type AlertMessageProps = {
  children: JSXChildren;
};
export const AlertMessage = withAs('p')<AlertMessageProps>(({ As, class: className, ...props }) => (
  <As class={cn('flex gap-3', className)} {...props}>
    {props.children}
  </As>
));
