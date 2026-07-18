import type { CSSProperties } from '@qwik.dev/core';
import { withAs } from '@onwo/primitives';

type MasonryItemProps = {
  width: number;
  height: number;
  style?: CSSProperties;
};

export const MasonryItem = withAs('div')<MasonryItemProps>(
  ({ As, width, height, ...props }) => (
    <As
      {...props}
      class={['mm-masonry__item rounded-xs border border-line', props.class]}
      style={{ '--w': width, '--h': height, ...props.style }}
    >
      {props.children}
    </As>
  ),
);
