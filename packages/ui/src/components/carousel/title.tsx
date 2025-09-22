import type { PropsOf } from '@builder.io/qwik';
import { Title } from '@onwo/primitives/carousel';

export type CarouselTitleProps = PropsOf<typeof Title>;

export const CarouselTitle = (props: CarouselTitleProps) => <Title {...props} />;
