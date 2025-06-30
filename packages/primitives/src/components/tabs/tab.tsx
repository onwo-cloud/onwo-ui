import type { QRL, QwikHTMLElements } from '@builder.io/qwik';
import { Slot, component$, useComputed$ } from '@builder.io/qwik';
import type { ValidName } from '~/types/case-control';
import { Button } from '../button';
import { useTabsContext } from './use-tabs-context';

export type TabProps<Name extends string> = QwikHTMLElements['button'] & {
  disabled?: boolean;
  name?: ValidName<Name>;
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
      <Button
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
      </Button>
    );
  },
);
