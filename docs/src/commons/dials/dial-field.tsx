import { component$, Slot } from '@qwik.dev/core';
import { DialLabel } from './dial-label';

export interface DialFieldProps {
  label?: string;
  for?: string;
  class?: string;
}

export const DialField = component$<DialFieldProps>(
  ({ label, for: htmlFor, class: className }) => {
    return (
      <div class="items-center flex gap-4 self-stretch">
        {label ? <DialLabel label={label} for={htmlFor} /> : <Slot name="label" />}
        <div class={['items-center flex basis-[0%] grow min-w-0 gap-1.5', className]}>
          <Slot />
        </div>
      </div>
    );
  }
);
