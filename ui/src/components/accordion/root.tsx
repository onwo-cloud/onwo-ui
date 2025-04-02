import { Accordion } from '~/primitives';
import type { Primitive } from '~/utils/types';

export type RootProps = Primitive<'div'> & {
  singleOpen?: boolean;
};

export const Root = (props: RootProps) => (
  <Accordion.Root {...props}>{props.children}</Accordion.Root>
);
