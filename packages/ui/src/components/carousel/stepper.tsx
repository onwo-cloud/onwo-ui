import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Stepper } from '@onwo/primitives/carousel';

type CarouselStepperProps = PropsOf<typeof Stepper>;

export const CarouselStepper = (props: CarouselStepperProps) => (
  <Stepper {...props} class={cn('relative flex justify-around w-full mx-auto', props.class)}>
    {props.children}
  </Stepper>
);
