import type { JSXChildren } from '@builder.io/qwik';
import { withAs } from '~/utils/as';
import { cn } from '~/utils/cn';

export type MessageProps = {
  children: JSXChildren;
};
export const Message = withAs('p')<MessageProps>(({ As, class: className, ...props }) => (
  <As class={cn('flex gap-3', className)} {...props}>
    {props.children}
  </As>
));
