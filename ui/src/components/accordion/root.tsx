import type { QwikHTMLElements } from '@builder.io/qwik';
import { Accordion } from '~/primitives';

export type RootProps = QwikHTMLElements['div'] & {
  singleOpen?: boolean;
};

export const Root = (props: RootProps) => (
  <Accordion.Root {...props}>{props.children}</Accordion.Root>
);
