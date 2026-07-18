import { withAs } from '@onwo/primitives';

export const AlertMessage = withAs('p')(({ As, class: className, ...props }) => (
  <As class={['flex gap-3', className]} {...props}>
    {props.children}
  </As>
));
