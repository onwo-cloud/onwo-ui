import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '~/primitives/carousel';
import { cn } from '~/utils/cn';

type ScrollerProps = PropsOf<typeof C.Scroller>;

export const Scroller = (props: ScrollerProps) => (
  <C.Scroller {...props}>
    {props.children}
  </C.Scroller>
);
