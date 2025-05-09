import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useContext, $, sync$ } from '@builder.io/qwik';
import { useCombinedRef } from '~/hooks/use-combined-refs';
import SelectContextId from './select-context';

export const HSelectLabel = component$((props: PropsOf<'div'>) => {
  const context = useContext(SelectContextId);
  const labelId = `${context.localId}-label`;
  const contextRefOpts = { context, givenContextRef: context.labelRef };
  const labelRef = useCombinedRef(props.ref, contextRefOpts);

  const handleClick$ = $(() => {
    if (context.isDisabledSig.value) return;

    context.triggerRef.value?.focus();
  });

  const handleMouseDownSync$ = sync$((e: MouseEvent) => {
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  });

  return (
    <div
      data-disabled={context.isDisabledSig.value ? '' : undefined}
      ref={labelRef}
      id={labelId}
      onClick$={[handleClick$, props.onClick$]}
      onMouseDown$={[handleMouseDownSync$, props.onMouseDown$]}
      {...props}
    >
      <Slot />
    </div>
  );
});
