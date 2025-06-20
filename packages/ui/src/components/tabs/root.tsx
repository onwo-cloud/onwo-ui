import { Tabs } from '@onwo/primitives';

export type RootProps = Tabs.RootProps;

export const Root = ({ ...props }: RootProps) => <Tabs.Root {...props}>{props.children}</Tabs.Root>;
