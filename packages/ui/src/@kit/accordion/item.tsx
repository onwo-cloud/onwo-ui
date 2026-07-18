import { Item } from '@onwo/primitives/accordion';
import { OwPropsOf } from '~primitives/index';

export const AccordionItem = (props: OwPropsOf<typeof Item>) => {
  return (
    <Item class="border-b border-line" {...props}>
      {props.children}
    </Item>
  );
};
