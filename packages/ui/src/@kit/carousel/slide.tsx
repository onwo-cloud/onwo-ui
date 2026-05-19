import type { PropsOf } from '@builder.io/qwik';
import { Slide } from '@onwo/primitives/carousel';

type CarouselSlideProps = PropsOf<typeof Slide>;

export const CarouselSlide = (props: CarouselSlideProps) => (
  <Slide {...props} class={['rounded-md bg-paper flex items-center justify-center', props.class]}>
    {props.children}
  </Slide>
);
