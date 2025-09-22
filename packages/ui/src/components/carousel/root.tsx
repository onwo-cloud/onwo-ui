import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Root } from '@onwo/primitives/carousel';

import { CarouselBullet } from './bullet';
import { CarouselSlide } from './slide';
import { CarouselStep } from './step';
import { CarouselTitle } from './title';

type CarouselProps = PropsOf<typeof Root>;

export const Carousel = (props: CarouselProps) => (
  <Root
    slideComponent={CarouselSlide}
    bulletComponent={CarouselBullet}
    stepComponent={CarouselStep}
    titleComponent={CarouselTitle as any}
    {...props}
    class={cn('relative', props.class)}
  >
    {props.children}
  </Root>
);
