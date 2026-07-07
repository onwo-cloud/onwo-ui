import type { PropsOf } from '@qwik.dev/core';
import { component$ } from '@qwik.dev/core';

import { PopoverContext } from './popover-context';

export const HPopoverPanelArrow = component$((props: PropsOf<'div'>) => {
  const context = PopoverContext.use();

  return <div ref={context.arrowRef} {...props} />;
});
