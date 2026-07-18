import {
  component$,
  Slot,
  useContext,
} from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { CollapsibleContext } from './collapsible-context';

export const CollapsibleContent = component$<OwPropsOf<'div'>>((props) => {
  const ctx = useContext(CollapsibleContext);

  return (
    <div
      id={ctx.contentId}
      data-state={ctx.isExpanded.value ? 'open' : 'closed'}
      inert={!ctx.isExpanded.value ? true : false}
      {...props}
    >
      <Slot />
    </div>
  );
});
