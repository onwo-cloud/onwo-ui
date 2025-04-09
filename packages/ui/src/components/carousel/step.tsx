import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '~/primitives/carousel';

type StepProps = PropsOf<typeof C.Step>;

export const Step = (props: StepProps) => (
  <C.Step
    {...props}
    class="flex flex-col justify-center items-center rounded-full text-beerus data-active:text-roshi"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="currentColor"></circle>
    </svg>
    <span class="flex text-start text-bulma items-start flex-col gap-2 min-w-0 min-h-fit ">
      {props.children}
    </span>
  </C.Step>
);
