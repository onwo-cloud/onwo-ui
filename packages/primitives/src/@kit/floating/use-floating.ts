import type { Signal } from '@qwik.dev/core';
import { $, useTask$ } from '@qwik.dev/core';
import { isServer } from '@qwik.dev/core/build';
import {
  computePosition,
  autoUpdate,
  offset as _offset,
  flip as _flip,
  shift as _shift,
  size as _size,
  hide as _hide,
  type ReferenceElement,
  type Middleware,
  type Placement,
  type Strategy,
  type AutoUpdateOptions,
  type Padding,
} from '@floating-ui/dom';

export type FollowCursorAxis = boolean | 'x' | 'y' | 'both' | 'horizontal' | 'vertical';

export interface FloatingOptions {
  placement?: Placement;
  strategy?: Strategy;
  gutter?: number;
  flip?: boolean;
  shift?: boolean;
  size?: boolean;
  collisionPadding?: Padding;
  hide?: 'referenceHidden' | 'escaped';
  transform?: string;
  autoUpdateOptions?: AutoUpdateOptions;
  followCursor?: FollowCursorAxis;
}

function getVirtualReference(
  anchor: HTMLElement,
  followCursor: FollowCursorAxis,
  cursorPos: { x: number; y: number } | null
): ReferenceElement {
  return {
    getBoundingClientRect() {
      const rect = anchor.getBoundingClientRect();
      const cx = cursorPos ? cursorPos.x : rect.left + rect.width / 2;
      const cy = cursorPos ? cursorPos.y : rect.top + rect.height / 2;

      // Clamp cursor position inside anchor bounds
      const x = Math.max(rect.left, Math.min(rect.right, cx));
      const y = Math.max(rect.top, Math.min(rect.bottom, cy));

      const isHorizontal = followCursor === 'x' || followCursor === 'horizontal';
      const isVertical = followCursor === 'y' || followCursor === 'vertical';

      if (isHorizontal) {
        return DOMRect.fromRect({
          x: x,
          y: rect.top,
          width: 0,
          height: rect.height,
        });
      }

      if (isVertical) {
        return DOMRect.fromRect({
          x: rect.left,
          y: y,
          width: rect.width,
          height: 0,
        });
      }

      return DOMRect.fromRect({
        x: x,
        y: y,
        width: 0,
        height: 0,
      });
    },
    contextElement: anchor,
  };
}

export function useFloating(
  anchorRef: Signal<HTMLElement | undefined>,
  panelRef: Signal<HTMLElement | undefined>,
  options: FloatingOptions = {},
  enabledSignal?: Signal<boolean> | Readonly<Signal<boolean>>
) {
  const updatePosition = $(async () => {
    const anchor = anchorRef.value;
    const panel = panelRef.value;

    if (!anchor || !panel) return;

    try {
      const middleware: Middleware[] = [];
      const collisionPadding = options.collisionPadding ?? 8;

      if (options.gutter !== undefined) middleware.push(_offset(options.gutter));
      if (options.flip) middleware.push(_flip({ padding: collisionPadding }));
      if (options.shift) middleware.push(_shift({ padding: collisionPadding }));
      if (options.size) {
        middleware.push(
          _size({
            padding: collisionPadding,
            apply({ availableWidth, availableHeight, elements }) {
              Object.assign(elements.floating.style, {
                maxWidth: `${Math.max(0, availableWidth)}px`,
                maxHeight: `${Math.max(0, availableHeight)}px`,
              });
            },
          })
        );
      }
      if (options.hide) middleware.push(_hide({ strategy: options.hide }));

      const reference = options.followCursor
        ? getVirtualReference(anchor, options.followCursor, null)
        : (anchor as ReferenceElement);

      const { x, y, strategy } = await computePosition(
        reference,
        panel,
        {
          placement: options.placement || 'bottom',
          strategy: options.strategy || 'fixed',
          middleware,
        }
      );

      Object.assign(panel.style, {
        position: strategy,
        left: `${Math.round(x)}px`,
        top: `${Math.round(y)}px`,
      });
    } catch (err) {
      console.warn('Floating computePosition error:', err);
    }
  });

  useTask$(async ({ track, cleanup }) => {
    const anchor = track(() => anchorRef.value);
    const panel = track(() => panelRef.value);
    const enabled = enabledSignal ? track(() => enabledSignal.value) : true;

    // Track options changes
    const placement = track(() => options.placement);
    const strategy = track(() => options.strategy);
    const gutter = track(() => options.gutter);
    const flip = track(() => options.flip);
    const shift = track(() => options.shift);
    const size = track(() => options.size);
    const collisionPadding = track(() => options.collisionPadding ?? 8);
    const hide = track(() => options.hide);
    const followCursor = track(() => options.followCursor);

    // Only set up autoUpdate if active, in browser, and refs are attached
    if (isServer || !anchor || !panel || !enabled) return;

    let cursorPos: { x: number; y: number } | null = null;

    const update = () => {
      if (!anchor || !panel) return;

      const middleware: Middleware[] = [];

      if (gutter !== undefined) middleware.push(_offset(gutter));
      if (flip) middleware.push(_flip({ padding: collisionPadding }));
      if (shift) middleware.push(_shift({ padding: collisionPadding }));
      if (size) {
        middleware.push(
          _size({
            padding: collisionPadding,
            apply({ availableWidth, availableHeight, elements }) {
              Object.assign(elements.floating.style, {
                maxWidth: `${Math.max(0, availableWidth)}px`,
                maxHeight: `${Math.max(0, availableHeight)}px`,
              });
            },
          })
        );
      }
      if (hide) middleware.push(_hide({ strategy: hide }));

      const reference = followCursor
        ? getVirtualReference(anchor, followCursor, cursorPos)
        : (anchor as ReferenceElement);

      computePosition(reference, panel, {
        placement: placement || 'bottom',
        strategy: strategy || 'fixed',
        middleware,
      })
        .then(({ x, y, strategy: computedStrategy }) => {
          Object.assign(panel.style, {
            position: computedStrategy,
            left: `${Math.round(x)}px`,
            top: `${Math.round(y)}px`,
          });
        })
        .catch((err) => {
          console.warn('Floating computePosition error:', err);
        });
    };

    // 1. Calculate initial position once popover is open/visible
    update();

    // 2. Attach pointermove listener with requestAnimationFrame batching
    if (followCursor) {
      let rafId: number | null = null;

      const handlePointerMove = (e: PointerEvent) => {
        cursorPos = { x: e.clientX, y: e.clientY };

        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            rafId = null;
            update();
          });
        }
      };

      anchor.addEventListener('pointermove', handlePointerMove);
      cleanup(() => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
        anchor.removeEventListener('pointermove', handlePointerMove);
      });
    }

    // 3. Attach Floating UI autoUpdate ONLY while popover is open
    const cleanupAutoUpdate = autoUpdate(
      anchor as ReferenceElement,
      panel,
      update,
      {
        ancestorScroll: true,
        ancestorResize: true,
        elementResize: true,
        layoutShift: true,
        ...options.autoUpdateOptions,
      }
    );

    cleanup(() => {
      cleanupAutoUpdate();
    });
  });

  return {
    updatePosition,
  };
}
