import type { PropsOf } from '@builder.io/qwik';
import { Accordion } from '@onwo/primitives';

export const Item = (props: PropsOf<typeof Accordion.Item>) => {
  return (
    <Accordion.Item class="border-b border-line" {...props}>
      {props.children}
    </Accordion.Item>
  );
};
