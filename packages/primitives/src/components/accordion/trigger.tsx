import type { QwikHTMLElements } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { Button } from '../button';
import { useAccordionItemContext } from './item';
import { useAccordionRootContext } from './root';

export type TriggerProps = QwikHTMLElements['button'];

export const Trigger = component$(({ onPointerDown$, onClick$, ...props }: TriggerProps) => {
  const { itemId } = useAccordionItemContext();
  const rootContext = useAccordionRootContext();

  return (
    <Button
      id={'b--' + itemId}
      data-state={rootContext.opened[itemId].value ? 'opened' : 'closed'}
      aria-controls={'c--' + itemId}
      aria-expanded={rootContext.opened[itemId].value ? 'true' : 'false'}
      onClick$={() => {
        if (rootContext.singleOpen === true) {
          // eslint-disable-next-line sonarjs/no-ignored-return, sonarjs/array-callback-without-return
          Object.entries(rootContext.opened).map(([k, v]) => {
            if (k === itemId) return;
            v.value = false;
          });
        }
        rootContext.opened[itemId].value = !rootContext.opened[itemId].value;
      }}
      {...props}
    >
      <Slot />
    </Button>
  );
});
