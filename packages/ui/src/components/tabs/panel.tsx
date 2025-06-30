import { cn } from '@onwo/primitives';
import type { PanelProps } from '@onwo/primitives/tabs';
import { Panel as PPanel } from '@onwo/primitives/tabs';

export type TabsPanelProps<N extends string> = PanelProps<N>;

export const TabsPanel = <N extends string>({
  children,
  class: className,
  ...props
}: TabsPanelProps<N>) => (
  <PPanel class={cn('hidden data-active:block', className)} {...props}>
    {children}
  </PPanel>
);
