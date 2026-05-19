import type { PanelsProps } from '@onwo/primitives/tabs';
import { Panels as PPanels } from '@onwo/primitives/tabs';

export type TabsPanelsProps = PanelsProps;

export const TabsPanels = ({ children, class: className, ...props }: TabsPanelsProps) => (
  <PPanels class={['mt-4', className]} {...props}>
    {children}
  </PPanels>
);
