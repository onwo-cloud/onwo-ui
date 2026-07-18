import type { Placement, Strategy } from '@floating-ui/dom';
import type { FollowCursorAxis } from '../floating';

export type Side = 'top' | 'right' | 'bottom' | 'left' | 'inline-end' | 'inline-start';
export type Align = 'start' | 'center' | 'end';

export interface PositionerLayoutData {
  side: Side;
  alignment: Align;
  anchor: { width: number; height: number };
  positioner: { width: number; height: number };
}

export type CollisionAvoidance =
  | boolean
  | {
      side?: 'none' | 'flip';
      align?: 'none' | 'shift';
      fallbackAxisSide?: 'none' | 'end' | 'start';
    };

export interface PositionProps {
  // Direct Floating UI shorthand props
  placement?: Placement;
  gutter?: number;
  flip?: boolean;
  shift?: boolean;
  hide?: 'referenceHidden' | 'escaped';
  strategy?: Strategy;
  followCursor?: FollowCursorAxis;

  // Primitive layout props
  positionMethod?: 'fixed' | 'absolute';
  sticky?: boolean;
  collisionAvoidance?: CollisionAvoidance;
  collisionBoundary?: Element | 'clipping-ancestors' | Element[] | DOMRect;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  sideOffset?: number | ((data: PositionerLayoutData) => number);
  side?: Side;
  disableAnchorTracking?: boolean;
  align?: Align;
  alignment?: Align;
  alignOffset?: number | ((data: PositionerLayoutData) => number);
}
