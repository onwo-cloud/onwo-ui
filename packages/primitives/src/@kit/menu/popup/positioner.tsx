import { component$, Slot } from '@qwik.dev/core';
import { Placement } from '@floating-ui/dom';
import { PropsOfElem } from '~primitives/types/props';

import { Floating, FloatingOptions } from '../../floating';
import { MenuContext } from '../dropdown-context';

import { PositionProps } from './types';

type PositionerInternalProps = PositionProps & {
  isSubmenu: boolean;
  popoverProps?: PropsOfElem<'div'>;
};

export const Positioner = component$<PositionerInternalProps>((props) => {
  const ctx = MenuContext.use();

  const getPlacement = (): Placement => {
    const side = props.side || 'right';
    const align = props.align || 'start';

    if (align === 'center') return side as Placement;

    // Normalize 'inline' values if needed, though 'right-start' is standard
    const normalizedSide = side.replace('inline-', '') as 'top' | 'bottom' | 'left' | 'right';
    return `${normalizedSide}-${align}` as Placement;
  };

  // 3. Always enable Flip/Shift for Submenus to prevent screen overflow
  const shouldAvoidCollision =
    props.collisionAvoidance !== undefined ? !!props.collisionAvoidance : props.isSubmenu;

  const floatingOptions: FloatingOptions = {
    placement: getPlacement(),
    strategy: props.positionMethod || 'absolute',
    gutter: typeof props.sideOffset === 'number' ? props.sideOffset : 0,
    flip: shouldAvoidCollision,
    shift: shouldAvoidCollision,
  };

  return (
    <Floating
      anchorRef={ctx.triggerRef}
      floating={floatingOptions}
      popoverProps={{
        ...props.popoverProps,
        style: { zIndex: 50, width: 'max-content', ...props.popoverProps?.style },
      }}
    >
      <Slot />
    </Floating>
  );
});
