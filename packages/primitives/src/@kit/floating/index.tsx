import type { CSSProperties, PropsOf, Signal } from '@builder.io/qwik';
import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import {
  arrow as _arrow,
  flip as _flip,
  hide as _hide,
  offset as _offset,
  shift as _shift,
  autoUpdate,
  computePosition,
} from '@floating-ui/dom';
import type { Placement, Strategy, Middleware, ReferenceElement } from '@floating-ui/dom';

export interface FloatingOptions {
  placement?: Placement;
  strategy?: Strategy;
  gutter?: number;
  flip?: boolean;
  shift?: boolean;
  arrow?: boolean;
  hide?: 'referenceHidden' | 'escaped';
  updateOn?:
  | 'ancestorResize'
  | 'ancestorScroll'
  | 'elementResize'
  | 'layoutShift'
  | 'animationFrame';
  transform?: string;
}

export type FloatingProps = {
  anchorRef: Signal<HTMLElement | undefined>;
  floating?: FloatingOptions;
  popoverProps?: Omit<PropsOf<'div'>, 'style'> & { style?: CSSProperties; }
};

export const Floating = component$(({ anchorRef, floating = {}, ...props }: FloatingProps) => {
  const panelRef = useSignal<HTMLElement>();
  const arrowRef = useSignal<HTMLElement>();
  // 1. Signal to track if we have successfully positioned the element
  const isPositioned = useSignal(false);

  useTask$(async ({ track, cleanup }) => {
    const anchor = track(() => anchorRef.value);
    const floatOpts = track(() => floating);
    const panel = track(() => panelRef.value);

    if (isServer || !anchor || !panel) {
      // If we lose anchor, hide again
      isPositioned.value = false;
      return;
    }

    try {
      if (panel.showPopover && !panel.matches(':popover-open')) {
        panel.showPopover();
      }
    } catch (e) {
      /* Fallback */
    }

    const updatePosition = async () => {
      if (!panel || !anchor) return;

      const middleware: Middleware[] = [];

      if (floatOpts.gutter) middleware.push(_offset(floatOpts.gutter));
      if (floatOpts.flip) middleware.push(_flip());
      if (floatOpts.shift) middleware.push(_shift());
      if (floatOpts.hide) middleware.push(_hide({ strategy: floatOpts.hide }));
      if (floatOpts.arrow && arrowRef.value) {
        middleware.push(_arrow({ element: arrowRef.value, padding: 0 }));
      }

      const { x, y, strategy, middlewareData } = await computePosition(
        anchor as ReferenceElement,
        panel,
        {
          placement: floatOpts.placement || 'bottom',
          strategy: 'fixed',
          middleware,
        },
      );

      Object.assign(panel.style, {
        position: strategy,
        left: `${x}px`,
        top: `${y}px`,
        transform: floatOpts.transform,
      });

      if (middlewareData.arrow && arrowRef.value) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        Object.assign(arrowRef.value.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
        });
      }

      // 2. Mark as positioned so we can show it
      isPositioned.value = true;
    };

    const cleanupFunc = autoUpdate(anchor as ReferenceElement, panel, updatePosition);

    cleanup(() => {
      cleanupFunc();
      try {
        if (panel.hidePopover && panel.matches(':popover-open')) {
          panel.hidePopover();
        }
      } catch (e) { }
    });
  });

  return (
    <div
      ref={panelRef}
      popover="manual"
      {...props.popoverProps}
      style={{
        margin: 0,
        inset: 'auto',
        display: 'block',
        position: 'fixed',
        zIndex: 9999,
        width: 'max-content',
        top: 0,
        left: 0,
        // 3. Control visibility based on positioning status
        // This prevents the user from seeing the menu at 0,0 before calculation finishes
        opacity: isPositioned.value ? 1 : 0,
        pointerEvents: isPositioned.value ? 'auto' : 'none',
        ...props.popoverProps?.style,
      }}
    >
      <Slot />
      {floating.arrow && <div ref={arrowRef} style={{ position: 'absolute' }} />}
    </div>
  );
});
