import { $, component$, PropsOf, Slot } from '@qwik.dev/core';
import { PropsOfElem } from '~primitives/types/props';

import { MenuContext } from '../dropdown-context';

import { Positioner } from './positioner';
import { PositionProps } from './types';

type PopupProps = {
  popoverProps?: PropsOfElem<'div'>;
  panelProps?: PropsOfElem<'div'>;
} & PositionProps;

export const MenuPopup = component$((props: PopupProps) => {
  const ctx = MenuContext.use();

  // 1. Extract PositionProps to pass to the Positioner
  const {
    positionMethod,
    sticky,
    collisionAvoidance,
    collisionBoundary,
    collisionPadding,
    sideOffset,
    side,
    disableAnchorTracking,
    align,
    alignOffset,
    panelProps,
    popoverProps,
  } = props;

  if (!ctx.isOpen.value) return null;

  const handleKeyDown = $((e: KeyboardEvent) => {
    if (!ctx) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        ctx.activeIndex.value = (ctx.activeIndex.value + 1) % ctx.itemIds.value.length;
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        ctx.activeIndex.value =
          (ctx.activeIndex.value - 1 + ctx.itemIds.value.length) % ctx.itemIds.value.length;
        break;
      case 'ArrowRight':
        break;
      case 'ArrowLeft':
        if (ctx.isSubmenu && ctx.parentContext) {
          e.preventDefault();
          e.stopPropagation();
          ctx.isOpen.value = false;
        }
        break;
      case 'Escape':
        e.preventDefault();
        e.stopPropagation();
        ctx.isOpen.value = false;
        break;
      case 'Tab':
        ctx.closeAll();
        break;
    }
  });

  return (
    <Positioner
      isSubmenu={ctx.isSubmenu}
      positionMethod={positionMethod}
      sticky={sticky}
      collisionAvoidance={collisionAvoidance}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      side={side}
      disableAnchorTracking={disableAnchorTracking}
      align={align}
      alignOffset={alignOffset}
      popoverProps={popoverProps}
    >
      <div {...panelProps} role="menu" onKeyDown$={[handleKeyDown, panelProps?.onKeyDown$]}>
        <Slot />
      </div>
    </Positioner>
  );
});

export type { PositionProps };
