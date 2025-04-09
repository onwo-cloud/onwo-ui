import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

export type MessageProps = {
  children: JSXChildren;
};
export const Message = withAs('p')<MessageProps>(({ As, class: className, ...props }) => (
  <As class={cn('flex gap-3', className)} {...props}>
    {props.children}
  </As>
));
