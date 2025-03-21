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
        onPointerDown$={() => {
          context.selected.value = name.value;
          onSelected$?.(name.value);
        }}
        onClick$={(event) => {
          const isKeyboard =
            // Main check: click events from keyboard have detail=0
            event.detail === 0 &&
            // Double-check: mouse clicks have screen coordinates
            event.screenX === 0 &&
            event.screenY === 0;
          if (isKeyboard) {
            context.selected.value = name.value;
            onSelected$?.(name.value);
          }
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
