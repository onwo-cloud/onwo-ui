import { component$, Slot, useComputed$ } from '@qwik.dev/core';
import { withAs } from '~primitives/utils/as';

import { useAccordionItemContext } from './item';
import { useAccordionRootContext } from './root';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ContentPropsInner = {};

export const Content = withAs('div')<ContentPropsInner>(component$(({ As, ...props }) => {
  const { itemId } = useAccordionItemContext();
  const rootContext = useAccordionRootContext();

  const status = useComputed$(() => {
    return rootContext.opened[itemId].value ? 'opened' : 'closed';
  });

  return (
    <As
      role="region"
      data-state={status.value}
      aria-hidden={status.value === 'closed'}
      id={'c--' + itemId}
      aria-labelledby={'b--' + itemId}
      {...props}
    >
      <Slot />
    </As>
  );
}));
