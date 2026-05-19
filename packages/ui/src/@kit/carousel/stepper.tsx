import type { PropsOf } from '@builder.io/qwik';
import { Stepper } from '@onwo/primitives/carousel';

type CarouselStepperProps = PropsOf<typeof Stepper>;

export const CarouselStepper = (props: CarouselStepperProps) => (
  <Stepper {...props} class={['relative flex justify-around w-full mx-auto', props.class]}>
    {props.children}
  </Stepper>
);
