import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$, useComputed$ } from '@builder.io/qwik';
import type { ValidName } from '~/types/case-control';
import { useTabsContext } from './use-tabs-context';

export type TabProps<Name extends string> = QwikIntrinsicElements['button'] & {
  disabled?: boolean;
  name?: ValidName<Name>;
  class?: string;
  // run after selection occured
  onSelected$?: QRL<(name: string) => void>;
};

export const Tab = component$(
  <Name extends string>({
    disabled = false,
    onSelected$,
    name: defaultName,
    ...props
  }: TabProps<Name>) => {
    const context = useTabsContext();

    const name = useComputed$(() => defaultName ?? String(++context.tabIndex));

    return (
      <button
        type="button"
        disabled={disabled}
        onClick$={() => {
          context.selected.value = name.value;
          onSelected$?.(name.value);
        }}
        role="tab"
        data-selected={name.value === context.selected.value}
        aria-selected={name.value === context.selected.value}
        aria-controls={`${context.name}-panel-${name}`}
        id={`${context.name}-tab-${name}`}
        {...props}
      >
        <Slot />
      </button>
    );
  },
);
