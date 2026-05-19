import type { JSXChildren } from '@builder.io/qwik';
import { withAs } from '@onwo/primitives';

export type AlertProps = {
  children?: JSXChildren;
};

export const Alert = withAs('div')<AlertProps>(({ As, class: className, ...props }) => (
  <As
    {...props}
    class={[
      'relative flex p-4 bg-paper text-ink-primary flex-col rounded-onwo-s-sm gap-x-3 gap-y-1 text-onwo-14 w-full',
      className,
    ]}
    role="alert"
  />
));
