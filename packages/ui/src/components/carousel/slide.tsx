import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C, cn } from '@onwo/primitives';

type SlideProps = PropsOf<typeof C.Slide>;

export const Slide = (props: SlideProps) => (
  <C.Slide
    {...props}
    class={cn('rounded-md bg-paper flex items-center justify-center', props.class)}
  >
    {props.children}
  </C.Slide>
);
