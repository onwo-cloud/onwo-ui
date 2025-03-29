import { Slot, component$, type QwikHTMLElements } from '@builder.io/qwik';
import { useTabsContextProvider } from './use-tabs-context';

export type RootProps = QwikHTMLElements['div'] & {
  defaultSelected?: string;
};

export const Root = component$((props: RootProps) => {
  const ctx = useTabsContextProvider(props.defaultSelected);

  return (
    <div id={ctx.name} {...props}>
      <Slot />
    </div>
  );
});
