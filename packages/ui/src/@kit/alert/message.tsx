import type { JSXChildren } from '@builder.io/qwik';
import { withAs } from '@onwo/primitives';

export type AlertMessageProps = {
  children: JSXChildren;
};
export const AlertMessage = withAs('p')<AlertMessageProps>(({ As, class: className, ...props }) => (
  <As class={['flex gap-3', className]} {...props}>
    {props.children}
  </As>
));
