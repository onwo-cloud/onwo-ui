import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Stepper as PStepper } from '@onwo/primitives/carousel';

type StepperProps = PropsOf<typeof PStepper>;

export const Stepper = (props: StepperProps) => (
  <PStepper {...props} class={cn('relative flex justify-around w-full mx-auto', props.class)}>
    {props.children}
  </PStepper>
);
