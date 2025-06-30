import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Slide as PSlide } from '@onwo/primitives/carousel';

type SlideProps = PropsOf<typeof PSlide>;

export const Slide = (props: SlideProps) => (
  <PSlide
    {...props}
    class={cn('rounded-md bg-paper flex items-center justify-center', props.class)}
  >
    {props.children}
  </PSlide>
);
