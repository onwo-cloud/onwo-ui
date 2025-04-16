import type { PropFunction, QRL } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';

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
  onSelected$: PropFunction<() => void>;
};

export const CalendarGridButton = (props: CalendarGridButtonProps) => (
  <td
    class={cn(
      'relative p-0 rounded-md text-center text-sm hover:bg-scan h-8 w-full',
      props.dim && 'text-lead',
      props.highlight && 'bg-line',
      props.isSelected && 'bg-accent hover:bg-accent text-forced-a',
      props.isFocused && 'ring-1 ring-stare',
    )}
    tabIndex={-1}
  >
    <button
      disabled={props.isDisabled}
      name="day"
      onKeyDown$={(event) => props.onKeyDown$?.(event)}
      class={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 h-full w-full p-0 font-normal',

        props.isDisabled && 'text-lead',
      )}
      role="gridmint"
      tabIndex={-1}
      type="button"
      onClick$={() => {
        if (props.isDisabled) return;
        props.onSelected$();
      }}
    >
      {props.label}
    </button>
  </td>
);
