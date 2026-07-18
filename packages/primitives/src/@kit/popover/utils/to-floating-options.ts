import type { FloatingOptions } from '../../floating';
import type { PositionProps } from '../popover-types';
import type { Placement, Padding } from '@floating-ui/dom';

export function toFloatingOptions(
  props: PositionProps & {
    collisionAvoidance?: boolean;
    size?: boolean;
    sideOffset?: number;
    collisionPadding?: Padding;
    edgeOffset?: Padding;
    padding?: Padding;
  }
): FloatingOptions {
  let placement: Placement | undefined = props.placement;

  if (!placement && props.side) {
    if (props.align && props.align !== 'center') {
      placement = `${props.side}-${props.align}` as Placement;
    } else {
      placement = props.side as Placement;
    }
  }

  const collisionAvoidance = props.collisionAvoidance ?? true;
  const collisionPadding = props.collisionPadding ?? props.edgeOffset ?? props.padding ?? 8;

  return {
    placement: placement || 'bottom',
    strategy: props.strategy || 'fixed',
    gutter: props.gutter ?? props.sideOffset,
    flip: props.flip ?? collisionAvoidance,
    shift: props.shift ?? collisionAvoidance,
    size: props.size ?? collisionAvoidance,
    collisionPadding,
    hide: props.hide,
    followCursor: props.followCursor,
  };
}
