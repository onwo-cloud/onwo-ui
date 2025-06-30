import { cn } from '@onwo/primitives';
import type { PanelProps as PPanelProps } from '@onwo/primitives/tabs';
import { Panel as PPanel } from '@onwo/primitives/tabs';

export type PanelProps<N extends string> = PPanelProps<N>;

export const Panel = <N extends string>({
  children,
  class: className,
  ...props
}: PanelProps<N>) => (
  <PPanel class={cn('hidden data-active:block', className)} {...props}>
    {children}
  </PPanel>
);
