import type { QRL, Signal } from '@qwik.dev/core';
import { $, Slot, component$, useTask$ } from '@qwik.dev/core';
import { useEscapeKeydown } from '~primitives/hooks/use-escape-keydown';
import { useFocusTrap } from '~primitives/hooks/use-focus-trap';
import type { OwPropsOf } from '~primitives/utils/as';

import { useModalContext } from './context';
import { closeModal, showModal } from './modal-utils';

export type PanelProps = Omit<OwPropsOf<'dialog'>, 'open'> & {
  // Can be used to keep the panel opened
  'bind:override'?: Signal<boolean>;
  onShow$?: QRL<(el: HTMLDialogElement) => void>;
};

export const Panel = component$(
  ({ 'bind:override': override, onShow$, ...props }: PanelProps) => {
    const context = useModalContext();
    const panelRef = context.control.panelRef;
    const focus = useFocusTrap(panelRef);
    const opened = context.control.opened;

    useTask$(() => {
      context.control.opened = opened;
    });

    // Manage modal show/hide and focus trap
    useTask$(async ({ track, cleanup }) => {
      const isOpen = track(() => override?.value ?? opened.value);

      if (!panelRef.value) return;
      if (isOpen) {
        await showModal(panelRef.value);

        // Execute onShow$ synchronously before the browser paints frame 0
        if (onShow$) {
          await onShow$(panelRef.value);
        }

        cleanup(async () => {
          focus.deactivate();
        });
        focus.activate();
      } else {
        if (panelRef.value.open) {
          await closeModal(panelRef.value);
        }
      }
    });

    const closeOnBackdropClick$ = $(async (e: MouseEvent) => {
      if (!(e.target instanceof HTMLDialogElement)) return;
      context.control.hide$();
    });

    useEscapeKeydown(
      $((e) => {
        context.control.hide$();
        e.stopPropagation();
      }),
    );

    return (
      <dialog
        {...props}
        id={`${context.id}-root`}
        aria-labelledby={`${context.id}-title`}
        aria-describedby={`${context.id}-description`}
        data-open={opened.value && ''}
        data-closed={!opened.value && ''}
        role="dialog"
        ref={panelRef}
        class={[
          'bg-transparent max-w-none border-none outline-none',
          props.class,
        ]}
        onKeyDown$={[props.onKeyDown$]}
        onCancel$={[
          $(() => {
            context.control.hide$();
          }),
          props.onCancel$,
        ]}
        preventdefault:cancel
        onClick$={async (e) => {
          e.stopPropagation();
          await closeOnBackdropClick$(e);
        }}
      >
        {opened.value && <Slot />}
      </dialog>
    );
  },
);
