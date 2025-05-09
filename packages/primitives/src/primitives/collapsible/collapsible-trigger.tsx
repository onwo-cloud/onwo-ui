import type { PropsOf } from '@builder.io/qwik';
import { $, Slot, component$, useContext, useOnWindow } from '@builder.io/qwik';
import { Button } from '../button';
import { collapsibleContextId } from './collapsible-context';

export const HCollapsibleTrigger = component$<PropsOf<'button'>>(({ onClick$, ...props }) => {
  const context = useContext(collapsibleContextId);
  const contentId = `${context.itemId}-content`;
  const triggerId = `${context.itemId}-trigger`;

  const handleClick$ = $(async () => {
    if (context.isOpenSig.value && context.collapsible === false) return;
    context.isOpenSig.value = !context.isOpenSig.value;
  });

  useOnWindow('resize', context.getContentDimensions$);

  return (
    <Button
      {...props}
      id={triggerId}
      ref={context.triggerRef}
      disabled={context.disabled}
      data-disabled={context.disabled ? '' : undefined}
      aria-disabled={context.disabled ? 'true' : 'false'}
      data-open={context.isOpenSig.value ? '' : undefined}
      data-closed={context.isOpenSig.value ? undefined : ''}
      aria-expanded={context.isOpenSig.value}
      aria-controls={contentId}
      onClick$={[handleClick$, onClick$]}
    >
      <Slot />
    </Button>
  );
});
