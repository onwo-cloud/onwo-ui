import { cn } from '@onwo/primitives';
import type { PanelsProps as PPanelsProps } from '@onwo/primitives/tabs';
import { Panels as PPanels } from '@onwo/primitives/tabs';

export type PanelsProps = PPanelsProps;

export const Panels = ({ children, class: className, ...props }: PanelsProps) => (
  <PPanels class={cn('mt-4', className)} {...props}>
    {children}
  </PPanels>
);
