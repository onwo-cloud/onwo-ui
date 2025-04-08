import type { PropFunction, QRL } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

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
      'relative p-0 rounded-md text-center text-sm hover:bg-heles h-8 w-full',
      props.dim && 'text-trunks',
      props.highlight && 'bg-beerus',
      props.isSelected && 'bg-piccolo hover:bg-piccolo text-goten',
      props.isFocused && 'ring-1 ring-jiren',
    )}
    tabIndex={-1}
  >
    <button
      disabled={props.isDisabled}
      name="day"
      onKeyDown$={(event) => props.onKeyDown$?.(event)}
      class={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 h-full w-full p-0 font-normal',

        props.isDisabled && 'text-trunks',
      )}
      role="gridcell"
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
