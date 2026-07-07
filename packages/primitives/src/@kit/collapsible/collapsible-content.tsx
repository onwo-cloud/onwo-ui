
import {
  component$,
  Slot,
  useContext,
  type PropsOf
} from '@qwik.dev/core';
import { CollapsibleContext } from './collapsible-context';

export const CollapsibleContent = component$<PropsOf<'div'>>((props) => {
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
