import type { JSXChildren } from '@builder.io/qwik';
import type { TPlacement } from '@onwo/primitives/popover';
import { Root } from '@onwo/primitives/popover';

export type DropdownMenuProps = {
  children: JSXChildren;
  placement?: TPlacement;
};

export const DropdownMenu = (props: DropdownMenuProps) => {
  return <Root floating={props.placement ?? true}>{props.children}</Root>;
};
