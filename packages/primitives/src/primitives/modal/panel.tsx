import type { Signal } from '@builder.io/qwik';
import { $, Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';

import { useEscapeKeydown } from '~/hooks/use-escape-keydown';
import { useFocusTrap } from '~/hooks/use-focus-trap';
import { cn } from '~/utils/cn';
import type { Primitive } from '~/utils/types';
import { useModalContext } from './context';

import { closeModal, showModal } from './modal-utils';

export type PanelProps = Omit<Primitive<'dialog'>, 'open'> & {
  'bind:opened'?: Signal<boolean>;
  'bind:override'?: Signal<boolean>;
};

export const Panel = component$(
  ({ 'bind:override': override, 'bind:opened': propsOpened, ...props }: PanelProps) => {
    const context = useModalContext();
    const panelRef = useSignal<HTMLDialogElement>();
    const focus = useFocusTrap(panelRef);
    // eslint-disable-next-line qwik/use-method-usage
    const defaultOpened = useSignal<boolean>(false);
    const opened = propsOpened ?? defaultOpened;

    useTask$(() => {
      context.panel.value = { opened };
    });

    // manage modal toggling
    useTask$(async ({ track, cleanup }) => {
      const isOpen = track(() => override?.value ?? opened.value);

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

    const closeOnBackdropClick$ = $(async (e: MouseEvent) => {
      // We do not want to close elements that dangle outside of the modal
      if (!(e.target instanceof HTMLDialogElement)) return;
      opened.value = false;
    });

    /*
  // const handleKeyDownSync$ = sync$((e: KeyboardEvent) => {
  //   const keys = [' ', 'Enter'];
  //   if (e.target instanceof HTMLDialogElement && keys.includes(e.key)) {
  //     e.preventDefault();
  //   }
  //   if (e.key === 'Escape') {
  //     e.preventDefault();
  //   }
  // });
  */

    useEscapeKeydown(
      $((e) => {
        opened.value = false;
        e.stopPropagation();
      }),
    );

    //const focusOutside = useFocusOutside();

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
        class={cn(
          'bg-transparent max-w-none max-w-none border-none backdrop:bg-transparent',
          props.class,
        )}
        onKeyDown$={[props.onKeyDown$]}
        //onFocus$={[focusOutside.onFocus$, props.onFocus$]}
        //onBlur$={[focusOutside.onBlur$, props.onBlur$]}
        onClick$={async (e) => {
          e.stopPropagation();
          await closeOnBackdropClick$(e);
        }}
      >
        <Slot />
      </dialog>
    );
  },
);
