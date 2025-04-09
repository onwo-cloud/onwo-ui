import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useId,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';
import { useAccordionRootContext } from './root';

type AccordionContext = {
  itemId: string;
};

export const AccordionItemContext = createContextId<AccordionContext>('accordion-item');

// Custom hook for theme management
export const useAccordionItemContext = () => useContext(AccordionItemContext);

export type ItemProps = Primitive<'div'> & {
  disabled?: boolean;
  name?: string;
  defaultOpen?: boolean;
};

export const Item = component$((props: ItemProps) => {
  // eslint-disable-next-line qwik/use-method-usage
  const itemId = props.name ?? useId();
  useContextProvider(AccordionItemContext, { itemId });
  const rootContext = useAccordionRootContext();
  const isOpen = useSignal(props.defaultOpen ?? false);

  useTask$(() => {
    rootContext.opened[itemId] = isOpen;
  });

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
