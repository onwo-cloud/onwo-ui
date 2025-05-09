import type { PropsOf } from '@builder.io/qwik';
import { component$, useContext, Slot, useTask$, $, useSignal } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { useCombinedRef } from '~/hooks/use-combined-refs';
import { HPopoverPanel } from '../popover/popover-panel';
import { HPopoverRoot } from '../popover/popover-root';
import { usePopover } from '../popover/use-popover';

import { comboboxContextId } from './combobox-context';

export const HComboboxPopover = component$<PropsOf<typeof HPopoverRoot>>((props) => {
  const context = useContext(comboboxContextId);
  const { showPopover, hidePopover } = usePopover(context.localId);
  const contextRefOpts = { context, givenContextRef: context.panelRef };
  const panelRef = useCombinedRef(props.ref, contextRefOpts);
  const initialLoadSig = useSignal<boolean>(true);

  const { floating, flip, hover, gutter, ...rest } = props;

  useTask$(async ({ track }) => {
    track(() => context.isListboxOpenSig.value);

    if (isServer) return;

    if (!initialLoadSig.value) {
      if (context.isListboxOpenSig.value) {
        showPopover();
      } else {
        hidePopover();
      }
    }
  });

  const listboxId = `${context.localId}-panel`;

  const isOutside = $((rect: DOMRect, x: number, y: number) => {
    return x < rect.left || x > rect.right || y < rect.top || y > rect.bottom;
  });

  const handleDismiss$ = $(async (e: PointerEvent) => {
    if (!context.isListboxOpenSig.value) {
      return;
    }

    if (!panelRef.value || !context.controlRef.value) {
      return;
    }

    const listboxRect = panelRef.value.getBoundingClientRect();
    const boxRect = context.controlRef.value.getBoundingClientRect();
    const { clientX, clientY } = e;

    const isOutsideListbox = await isOutside(listboxRect, clientX, clientY);
    const isOutsideBox = await isOutside(boxRect, clientX, clientY);

    if (isOutsideListbox && isOutsideBox) {
      context.isListboxOpenSig.value = false;
    }
  });

  // Dismiss code should only matter when the listbox is open
  useTask$(({ track, cleanup }) => {
    track(() => context.isListboxOpenSig.value);

    if (isServer) return;

    if (context.isListboxOpenSig.value) {
      globalThis.addEventListener('pointerdown', handleDismiss$);
    }

    cleanup(() => {
      globalThis.removeEventListener('pointerdown', handleDismiss$);
    });
  });

  useTask$(() => {
    initialLoadSig.value = false;
  });

  const handleMouseEnter$ = $(() => {
    context.isKeyboardFocusSig.value = false;
    context.isMouseOverPopupSig.value = true;
  });

  return (
    <HPopoverRoot
      floating={floating}
      flip={flip}
      hover={hover}
      gutter={gutter}
      bind:anchor={props['bind:anchor'] ?? context.controlRef}
      bind:panel={panelRef}
      manual
      id={context.localId}
    >
      <HPopoverPanel
        id={listboxId}
        data-open={context.isListboxOpenSig.value ? '' : undefined}
        data-closed={context.isListboxOpenSig.value ? undefined : ''}
        data-invalid={context.isInvalidSig.value ? '' : undefined}
        role="listbox"
        aria-expanded={context.isListboxOpenSig.value ? 'true' : 'false'}
        aria-multiselectable={context.multiple ? 'true' : undefined}
        onMouseEnter$={[handleMouseEnter$, props.onMouseEnter$]}
        {...rest}
      >
        <Slot />
      </HPopoverPanel>
    </HPopoverRoot>
  );
});
