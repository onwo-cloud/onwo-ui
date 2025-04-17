import type { Signal } from '@builder.io/qwik';
import { $, Slot, component$, useSignal, useTask$, sync$, useContext } from '@builder.io/qwik';

import { useFocusTrap } from '~/hooks/use-focus-trap';
import { cn } from '~/utils/cn';
import type { Primitive } from '~/utils/types';
import { modalContextId } from './context';

import { closeModal, showModal, wasModalBackdropClicked } from './modal-utils';

export type PanelProps = Omit<Primitive<'dialog'>, 'open'> & {
  // This can be used to force the open status while animation are still ongoing
  'bind:override'?: Signal<boolean>;
};

export const Panel = component$(({ 'bind:override': overrideOpened, ...props }: PanelProps) => {
  const context = useContext(modalContextId);
  const panelRef = useSignal<HTMLDialogElement>();
  const focus = useFocusTrap(panelRef);

  useTask$(async function toggleModal({ track, cleanup }) {
    const isOpen = track(() => overrideOpened?.value ?? context.opened.value);

    if (!panelRef.value) return;
    if (isOpen) {
      // HACK: keep modal scroll position in place with iOS
      const storedRequestAnimationFrame = globalThis.requestAnimationFrame;
      globalThis.requestAnimationFrame = () => 42;

      await showModal(panelRef.value);
      globalThis.requestAnimationFrame = storedRequestAnimationFrame;
      focus.activate();
    } else {
      await closeModal(panelRef.value);
    }

    cleanup(async () => {
      focus.deactivate();
    });
  });

  useTask$(async ({ track }) => {
    track(() => context.opened.value);

    if (context.opened.value) {
      await context.onShow$?.();
    } else {
      await context.onClose$?.();
    }
  });

  const closeOnBackdropClick$ = $(async (e: MouseEvent) => {
    if (context.alert === true || context.closeOnBackdropClick === false) {
      return;
    }

    // We do not want to close elements that dangle outside of the modal
    if (!(e.target instanceof HTMLDialogElement)) {
      return;
    }

    if (await wasModalBackdropClicked(panelRef.value, e)) {
      context.opened.value = false;
    }
  });

  const handleKeyDownSync$ = sync$((e: KeyboardEvent) => {
    const keys = [' ', 'Enter'];

    if (e.target instanceof HTMLDialogElement && keys.includes(e.key)) {
      e.preventDefault();
    }

    if (e.key === 'Escape') {
      e.preventDefault();
    }
  });

  const handleKeyDown$ = $((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      context.opened.value = false;
      e.stopPropagation();
    }
  });

  return (
    <dialog
      {...props}
      id={`${context.id}-root`}
      aria-labelledby={`${context.id}-title`}
      aria-describedby={`${context.id}-description`}
      data-open={context.opened.value && ''}
      data-closed={!context.opened.value && ''}
      role={context.alert === true ? 'alertdialog' : 'dialog'}
      ref={panelRef}
      class={cn(
        'bg-transparent max-w-none max-w-none border-none backdrop:bg-transparent',
        props.class,
      )}
      onKeyDown$={[handleKeyDownSync$, handleKeyDown$, props.onKeyDown$]}
      onClick$={async (e) => {
        e.stopPropagation();
        await closeOnBackdropClick$(e);
      }}
    >
      <Slot />
    </dialog>
  );
});
