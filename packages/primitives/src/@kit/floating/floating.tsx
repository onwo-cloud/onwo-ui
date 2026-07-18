import type { Signal } from '@qwik.dev/core';
import { withAs } from '~primitives/index';
import { component$, Slot, useSignal, useVisibleTask$, $ } from '@qwik.dev/core';
import { isServer } from '@qwik.dev/core/build';
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
  transform?: string;
}

type FloatingProps = {
  anchorRef: Signal<HTMLElement | undefined>;
  floating?: FloatingOptions;
  ref?: Signal<HTMLElement | undefined> | Signal<Element | undefined> | any;
};

export const Floating = withAs('div')<FloatingProps>(
  component$(({ As, anchorRef, floating = {}, ref: externalRef, ...props }) => {
    const internalPanelRef = useSignal<HTMLElement>();
    const arrowRef = useSignal<HTMLElement>();

    useVisibleTask$(({ track, cleanup }) => {
      const floatOpts = track(() => floating);
      const panel = track(() => internalPanelRef.value);
      const anchor = track(() => anchorRef.value);

      if (isServer || !panel) return;

      const updatePosition = async () => {
        const currentAnchor = anchorRef.value;
        const currentPanel = internalPanelRef.value;

        if (!currentPanel || !currentAnchor) return;

        // Only compute position if native popover is open
        if (!currentPanel.matches(':popover-open')) {
          currentPanel.style.visibility = 'hidden';
          return;
        }

        try {
          const middleware: Middleware[] = [];

          if (floatOpts.gutter) middleware.push(_offset(floatOpts.gutter));
          if (floatOpts.flip) middleware.push(_flip());
          if (floatOpts.shift) middleware.push(_shift());
          if (floatOpts.hide) middleware.push(_hide({ strategy: floatOpts.hide }));
          if (floatOpts.arrow && arrowRef.value) {
            middleware.push(_arrow({ element: arrowRef.value, padding: 0 }));
          }

          const { x, y, strategy, middlewareData } = await computePosition(
            currentAnchor as ReferenceElement,
            currentPanel,
            {
              placement: floatOpts.placement || 'bottom',
              strategy: floatOpts.strategy || 'fixed',
              middleware,
            },
          );

          Object.assign(currentPanel.style, {
            position: strategy,
            left: `${x}px`,
            top: `${y}px`,
            transform: floatOpts.transform || '',
            visibility: 'visible',
            pointerEvents: 'auto',
          });

          if (middlewareData.arrow && arrowRef.value) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            Object.assign(arrowRef.value.style, {
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
            });
          }
        } catch (err) {
          console.warn('Floating computePosition error:', err);
        }
      };

      const handleUpdate = () => {
        updatePosition();
      };

      // 💥 Always attach event listeners as soon as panel is mounted
      panel.addEventListener('update-floating', handleUpdate);
      panel.addEventListener('toggle', handleUpdate);

      let cleanupAutoUpdate: (() => void) | undefined;
      if (anchor) {
        cleanupAutoUpdate = autoUpdate(anchor as ReferenceElement, panel, updatePosition);
      }

      cleanup(() => {
        panel.removeEventListener('update-floating', handleUpdate);
        panel.removeEventListener('toggle', handleUpdate);
        if (cleanupAutoUpdate) cleanupAutoUpdate();
      });
    });

    const setRef$ = $((el: HTMLElement) => {
      internalPanelRef.value = el;
      if (externalRef) {
        externalRef.value = el;
      }
    });

    return (
      <As ref={setRef$} {...props}>
        <Slot />
        {floating.arrow && <div ref={arrowRef} style={{ position: 'absolute' }} />}
      </As>
    );
  })
);
