import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type MasonryItemProps = {
  width: number;
  height: number;
  children: JSXChildren;
};

export const MasonryItem = withAs('div')<MasonryItemProps>(({ As, width, height, ...props }) => (
  <As
    {...props}
    class={cn('mm-masonry__item rounded-xs border border-line', props.class)}
    style={{ '--w': width, '--h': height, ...props.style }}
  >
    {props.children}
  </As>
));
