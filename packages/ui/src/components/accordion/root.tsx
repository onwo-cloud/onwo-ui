import { Root as PRoot } from '@onwo/primitives/accordion';
import type { Primitive } from '~/utils/types';

export type RootProps = Primitive<'div'> & {
  singleOpen?: boolean;
};

export const Root = (props: RootProps) => <PRoot {...props}>{props.children}</PRoot>;
