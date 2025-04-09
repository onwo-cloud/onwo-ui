import { Tabs } from '@onwo/primitives';
import { cn } from '~/utils/cn';

export type RootProps = Tabs.RootProps;

export const Root = ({ class: className, ...props }: RootProps) => (
  <Tabs.Root class={cn('w-full', className)} {...props}>
    {props.children}
  </Tabs.Root>
);
