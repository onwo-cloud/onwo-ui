export type Side = 'top' | 'right' | 'bottom' | 'left' | 'inline-end' | 'inline-start';
export type Align = 'start' | 'center' | 'end';

export interface PositionerLayoutData {
  side: Side;
  align: Align;
  anchor: { width: number; height: number };
  positioner: { width: number; height: number };
}

export type CollisionAvoidance =
  | {
      side?: 'none' | 'flip';
      align?: 'none' | 'flip' | 'shift';
      fallbackAxisSide?: 'none' | 'end' | 'start';
    }
  | {
      side?: 'none' | 'shift';
      align?: 'none' | 'shift';
      fallbackAxisSide?: 'none' | 'end' | 'start';
    }
  | undefined;

export interface PositionProps {
  positionMethod?: 'fixed' | 'absolute';
  sticky?: boolean;
  collisionAvoidance?: CollisionAvoidance;
  collisionBoundary?: Element | 'clipping-ancestors' | Element[] | DOMRect | undefined;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  sideOffset?: number | ((data: PositionerLayoutData) => number);
  side?: Side;
  disableAnchorTracking?: boolean;
  align?: Align;
  alignOffset?: number | ((data: PositionerLayoutData) => number);
}
