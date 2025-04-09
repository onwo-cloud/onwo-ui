import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type ItemProps = {
  width: number;
  height: number;
  children: JSXChildren;
};

export const Item = withAs('div')<ItemProps>(({ As, width, height, ...props }) => (
  <As
    {...props}
    class={cn('mm-masonry__item rounded-xs border border-beerus', props.class)}
    style={{ '--w': width, '--h': height, ...props.style }}
  >
    {props.children}
  </As>
));
