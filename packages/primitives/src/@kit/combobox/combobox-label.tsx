import type { PropsOf } from '@qwik.dev/core';
import { Slot, component$, useContext, $ } from '@qwik.dev/core';
import { useCombinedRef } from '~primitives/hooks/use-combined-refs';

import { Label } from '../label';

import { comboboxContextId } from './combobox-context';

type HComboboxLabelProps = PropsOf<'label'>;

export const HComboboxLabel = component$((props: HComboboxLabelProps) => {
  const context = useContext(comboboxContextId);
  const labelId = `${context.localId}-label`;
  const contextRefOpts = { context, givenContextRef: context.labelRef };
  const labelRef = useCombinedRef(props.ref, contextRefOpts);

  const handleClick$ = $(() => {
    context.inputRef.value?.focus();
  });

  return (
    <Label onClick$={handleClick$} id={labelId} ref={labelRef} {...props}>
      <Slot />
    </Label>
  );
});
