import type { RootProps } from '@onwo/primitives/tabs';
import { Root } from '@onwo/primitives/tabs';

export type TabsProps = RootProps;

export const Tabs = ({ ...props }: RootProps) => <Root {...props}>{props.children}</Root>;
