import { Tabs, cn } from '@onwo/primitives';

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
