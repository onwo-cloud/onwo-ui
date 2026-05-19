import type { PropsOf } from '@builder.io/qwik';
import { Player } from '@onwo/primitives/carousel';

export type CarouselPlayerProps = PropsOf<typeof Player>;

export const CarouselPlayer = (props: CarouselPlayerProps) => <Player {...props} />;
