import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
  useSignal,
  createContextId,
  useContextProvider,
  useContext,
  $,
  type PropsOf,
  type Signal,
} from "@qwik.dev/core";
import { Root, Panel, Trigger, useModalContext } from "~primitives/@kit/modal";

export interface ModalContextState {
  vectorsCalculated: Signal<boolean>;
}

export const ModalVectorContext =
  createContextId<ModalContextState>("modal-vector-context");

// ----------------------------------------------------------------------------
// 1. SCOPED MODAL STYLES (Scoped to .onwo-modal class)
// ----------------------------------------------------------------------------
export const modalStyles = `
  @keyframes onwo-modal-close-keyframes {
    from { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    to { opacity: 0; transform: translate3d(0, 0, 0) scale(0.92); }
  }

  @keyframes searchbar-backdrop-close-keyframes {
    from { opacity: 1; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
    to { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
  }

  @keyframes searchbar-halo-pulse {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50% { opacity: 0.28; transform: scale(1.02); }
  }

  .onwo-modal-halo {
    animation: searchbar-halo-pulse 4s ease-in-out infinite;
  }

  .onwo-modal::backdrop {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    opacity: 1;
    transition: opacity 220ms cubic-bezier(0.23, 1, 0.32, 1), backdrop-filter 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .onwo-modal[open] {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    transform-origin: var(--origin-x, center) var(--origin-y, 20%);
    transition: opacity 220ms cubic-bezier(0.23, 1, 0.32, 1), transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  @starting-style {
    .onwo-modal[open] {
      opacity: 0;
      transform: translate3d(var(--start-dx, 0px), var(--start-dy, -20px), 0) scale(0.8);
    }
    .onwo-modal[open]::backdrop {
      opacity: 0;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
    }
  }

  .onwo-modal.modal-closing {
    transform-origin: center center !important;
    animation: onwo-modal-close-keyframes 160ms cubic-bezier(0.23, 1, 0.32, 1) forwards !important;
  }

  .onwo-modal.modal-closing::backdrop {
    animation: searchbar-backdrop-close-keyframes 160ms cubic-bezier(0.23, 1, 0.32, 1) forwards !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .onwo-modal[open],
    .onwo-modal::backdrop,
    .onwo-modal.modal-closing,
    .onwo-modal.modal-closing::backdrop,
    .onwo-modal-halo {
      animation: none !important;
      transition: opacity 100ms ease-out !important;
    }
  }
`;

export const ModalRoot = component$<PropsOf<typeof Root>>((props) => {
  useStyles$(modalStyles);
  const vectorsCalculated = useSignal(false);

  useContextProvider(ModalVectorContext, { vectorsCalculated });

  return (
    <Root {...props}>
      <Slot />
    </Root>
  );
});

export const ModalTrigger = component$<PropsOf<typeof Trigger>>((props) => {
  return (
    <Trigger {...props}>
      <Slot />
    </Trigger>
  );
});

export interface ModalPanelProps extends PropsOf<typeof Panel> {
  halo?: boolean;
}

export const ModalPanel = component$<ModalPanelProps>(({ halo = true, ...props }) => {
  const modalContext = useModalContext();
  const { vectorsCalculated } = useContext(ModalVectorContext);

  // Directional animation vector calculation with explicit trigger tracking
  useVisibleTask$(
    ({ track, cleanup }) => {
      const dialogEl = track(() => modalContext.control.panelRef.value);
      const opened = track(() => modalContext.control.opened.value);
      const triggerEv = track(() => modalContext.control.triggerEvent?.value);

      cleanup(() => {
        vectorsCalculated.value = false;
        dialogEl?.removeAttribute("style");
      });

      if (!dialogEl) return;

      if (opened) {
        if (triggerEv) {
          const pRect = dialogEl.getBoundingClientRect();
          const modalCenterX = pRect.left + pRect.width / 2;
          const modalCenterY = pRect.top + pRect.height / 2;

          let clickX = window.innerWidth / 2;
          let clickY = window.innerHeight / 2;

          if (triggerEv.clientX > 0 || triggerEv.clientY > 0) {
            clickX = triggerEv.clientX;
            clickY = triggerEv.clientY;
          } else if (triggerEv.targetRect) {
            clickX = triggerEv.targetRect.left + triggerEv.targetRect.width / 2;
            clickY = triggerEv.targetRect.top + triggerEv.targetRect.height / 2;
          }

          const vecX = clickX - modalCenterX;
          const vecY = clickY - modalCenterY;

          const originXPercent = pRect.width > 0 ? ((clickX - pRect.left) / pRect.width) * 100 : 50;
          const originYPercent = pRect.height > 0 ? ((clickY - pRect.top) / pRect.height) * 100 : 20;

          const startDx = vecX * 0.15;
          const startDy = vecY * 0.15;

          dialogEl.style.setProperty("--origin-x", `${originXPercent}%`);
          dialogEl.style.setProperty("--origin-y", `${originYPercent}%`);
          dialogEl.style.setProperty("--start-dx", `${startDx}px`);
          dialogEl.style.setProperty("--start-dy", `${startDy}px`);
          dialogEl.style.transformOrigin = `${originXPercent}% ${originYPercent}%`;
        }

        vectorsCalculated.value = true;
      } else {
        vectorsCalculated.value = false;
        dialogEl.removeAttribute("style");
      }
    },
    { strategy: "document-ready" }
  );

  return (
    <Panel
      {...props}
      onCancel$={$((e: Event) => {
        e.preventDefault();
        console.info('cancel');
        modalContext.control.hide$();
      })}
      class={[
        "onwo-modal mt-32 mb-auto mx-auto p-0 rounded-[18px] bg-transparent border-none outline-none overflow-visible",
        props.class,
      ]}
    >
      <div class="relative w-146.25 max-w-[calc(100vw-2rem)] flex flex-col items-center">
        {halo && (
          <div
            class="absolute -inset-40 rounded-[32px] pointer-events-none onwo-modal-halo bg-gradient-to-b from-shade-1000/3 via-transparent to-transparent"
            aria-hidden="true"
          />
        )}
        <Slot />
      </div>
    </Panel>
  );
});
