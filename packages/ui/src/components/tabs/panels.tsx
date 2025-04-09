import { Tabs, cn } from '@onwo/primitives';

export type PanelsProps = Tabs.PanelsProps;

export const Panels = ({ children, class: className, ...props }: PanelsProps) => (
  <Tabs.Panels class={cn('mt-4', className)} {...props}>
    {children}
  </Tabs.Panels>
);
