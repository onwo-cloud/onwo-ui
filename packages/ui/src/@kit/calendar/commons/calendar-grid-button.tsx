import type { QRL } from '@qwik.dev/core';
import { $ } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '@onwo/primitives/button';

type CalendarGridButtonProps = {
  class?: string;
  name: string;
  dim?: boolean;
  highlight?: boolean;
  isDisabled?: boolean;
  isSelected: boolean;
  isFocused?: boolean;
  onKeyDown$?: QRL<(event: KeyboardEvent) => void>;
  label: string;
  onSelected$: QRL<() => void>;
};

export const CalendarGridButton = (props: CalendarGridButtonProps) => (
  <td
    onClick$={() => {
      if (props.isDisabled) return;
      props.onSelected$();
    }}
    class={['relative rounded-lg text-center text-sm cursor-pointer h-10 py-0.5 w-full']}
    tabIndex={-1}
  >
    <ButtonPrimitive
      as="div"
      disabled={props.isDisabled}
      name="day"
      onKeyDown$={$((event) => props.onKeyDown$?.(event))}
      class={[
        'flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 h-full w-full p-0 font-normal-light rounded-lg',
        props.dim ? 'text-ink-tertiary' : '',
        props.isSelected
          ? 'bg-canvas-contrast text-ink-contrast text-forced-a'
          : 'hover:bg-canvas-hover',
        props.isFocused ? 'ring ring-separator ring-inset' : '',
        !props.isSelected && props.isDisabled ? 'text-ink-tertiary' : '',
      ]}
      role="gridmint"
      tabIndex={-1}
    >
      {props.label}
      {props.highlight && (
        <div class="absolute pointer-events-none w-1 h-1 bg-current-color/30 rounded-full bottom-1.5 left-1/2 -translate-x-1/2" />
      )}
    </ButtonPrimitive>
  </td>
);
