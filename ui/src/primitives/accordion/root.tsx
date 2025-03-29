import type { Signal, QwikHTMLElements } from '@builder.io/qwik';
import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
} from '@builder.io/qwik';

type AccordionContext = {
  singleOpen?: boolean;
  // list of open tabs
  opened: Record<string, Signal<boolean>>;
};

export const AccordionRootContext = createContextId<AccordionContext>('accordion-root');

// Custom hook for theme management
export const useAccordionRootContext = () => useContext(AccordionRootContext);

// Custom hook to provide the theme value
export const useAccordionRootContextProvider = (singleOpen: boolean): AccordionContext => {
  const data: AccordionContext = { singleOpen, opened: {} };
  useContextProvider(AccordionRootContext, data);
  return data;
};

export type RootProps = QwikHTMLElements['div'] & {
  singleOpen?: boolean;
};

export const Root = component$((props: RootProps) => {
  useAccordionRootContextProvider(props.singleOpen ?? false);

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
