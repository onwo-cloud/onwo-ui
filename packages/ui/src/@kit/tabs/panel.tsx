import type { PanelProps } from '@onwo/primitives/tabs';
import { Panel as PPanel } from '@onwo/primitives/tabs';

export type TabsPanelProps<N extends string> = PanelProps<N>;

export const TabsPanel = <N extends string>({
  children,
  class: className,
  ...props
}: TabsPanelProps<N>) => (
  <PPanel class={['hidden data-active:block', className]} {...props}>
    {children}
  </PPanel>
);
