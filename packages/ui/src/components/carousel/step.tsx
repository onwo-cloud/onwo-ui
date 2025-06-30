import type { PropsOf } from '@builder.io/qwik';
import { Step as PStep } from '@onwo/primitives/carousel';

type StepProps = PropsOf<typeof PStep>;

export const Step = (props: StepProps) => (
  <PStep
    {...props}
    class="flex flex-col justify-center items-center rounded-full text-line data-active:text-success"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="currentColor"></circle>
    </svg>
    <span class="flex text-start text-ink items-start flex-col gap-2 min-w-0 min-h-fit ">
      {props.children}
    </span>
  </PStep>
);
