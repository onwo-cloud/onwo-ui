import type { RootProps as PRootProps } from '@onwo/primitives/tabs';
import { Root as PRoot } from '@onwo/primitives/tabs';

export type RootProps = PRootProps;

export const Root = ({ ...props }: RootProps) => <PRoot {...props}>{props.children}</PRoot>;
