import type { CSSProperties, JSXChildren } from '@qwik.dev/core';
import type { AsProps } from '@onwo/primitives';
import { withAs } from '@onwo/primitives';

type MasonryItemPropsInner = {
  width: number;
  height: number;
  children: JSXChildren;
  style?: CSSProperties;
};

export const MasonryItem = withAs('div')<MasonryItemPropsInner>(
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

export type MasonryItemProps = AsProps<typeof MasonryItem>;
