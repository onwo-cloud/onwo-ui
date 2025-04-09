import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';

type ScrollerProps = PropsOf<typeof C.Scroller>;

export const Scroller = (props: ScrollerProps) => (
  <C.Scroller {...props}>{props.children}</C.Scroller>
);
