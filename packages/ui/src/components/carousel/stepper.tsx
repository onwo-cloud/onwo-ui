import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';
import { cn } from '~/utils/cn';

type StepperProps = PropsOf<typeof C.Stepper>;

export const Stepper = (props: StepperProps) => (
  <C.Stepper {...props} class={cn('relative flex justify-around w-full mx-auto', props.class)}>
    {props.children}
  </C.Stepper>
);
