import type { PropsOf } from '@builder.io/qwik';
import { Scroller } from '@onwo/primitives/carousel';

export type CarouselScrollerProps = PropsOf<typeof Scroller>;

export const CarouselScroller = (props: CarouselScrollerProps) => <Scroller {...props} />;
