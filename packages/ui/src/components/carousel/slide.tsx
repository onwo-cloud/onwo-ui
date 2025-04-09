import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';
import { cn } from '~/utils/cn';

type SlideProps = PropsOf<typeof C.Slide>;

export const Slide = (props: SlideProps) => (
  <C.Slide
    {...props}
    class={cn('rounded-md bg-goku flex items-center justify-center', props.class)}
  >
    {props.children}
  </C.Slide>
);
