import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useContext, $ } from '@builder.io/qwik';
import { useCombinedRef } from '~/hooks/use-combined-refs';
import { Button } from '../button';
import { comboboxContextId } from './combobox-context';

type HComboboxTriggerImplProps = PropsOf<'button'>;

export const HComboboxTrigger = component$((props: HComboboxTriggerImplProps) => {
  const context = useContext(comboboxContextId);
  const contextRefOpts = { context, givenContextRef: context.triggerRef };
  const triggerRef = useCombinedRef(props.ref, contextRefOpts);

  const handleClick$ = $(() => {
    context.inputRef.value?.focus();
    context.isListboxOpenSig.value = !context.isListboxOpenSig.value;
  });

  return (
    <Button
      ref={triggerRef}
      aria-expanded={context.isExpandedSig.value}
      onClick$={[handleClick$, props.onClick$]}
      data-open={context.isListboxOpenSig.value ? '' : undefined}
      data-closed={context.isListboxOpenSig.value ? undefined : ''}
      data-invalid={context.isInvalidSig.value ? '' : undefined}
      preventdefault:mousedown
      tabIndex={-1}
      {...props}
    >
      <Slot />
    </Button>
  );
});
