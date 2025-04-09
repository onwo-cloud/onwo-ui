import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C, cn } from '@onwo/primitives';

type StepperProps = PropsOf<typeof C.Stepper>;

export const Stepper = (props: StepperProps) => (
  <C.Stepper {...props} class={cn('relative flex justify-around w-full mx-auto', props.class)}>
    {props.children}
  </C.Stepper>
);
