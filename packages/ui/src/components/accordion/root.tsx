import { Root } from '@onwo/primitives/accordion';
import type { Primitive } from '~/utils/types';

export type AccordionProps = Primitive<'div'> & {
  singleOpen?: boolean;
};

export const Accordion = (props: AccordionProps) => <Root {...props}>{props.children}</Root>;
