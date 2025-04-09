import { Tabs } from '@onwo/primitives';
import { cn } from '~/utils/cn';

export type PanelProps<N extends string> = Tabs.PanelProps<N>;

export const Panel = <N extends string>({
  children,
  class: className,
  ...props
}: PanelProps<N>) => (
  <Tabs.Panel class={cn('hidden data-active:block', className)} {...props}>
    {children}
  </Tabs.Panel>
);
