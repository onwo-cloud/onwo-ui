import type { PropsOf } from '@builder.io/qwik';
import { Item } from '@onwo/primitives/accordion';

export const AccordionItem = (props: PropsOf<typeof Item>) => {
  return (
    <Item class="border-b border-line" {...props}>
      {props.children}
    </Item>
  );
};
