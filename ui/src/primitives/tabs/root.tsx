import { Slot, component$, type QwikIntrinsicElements } from '@builder.io/qwik';
import { useTabsContextProvider } from './use-tabs-context';

export type RootProps = QwikIntrinsicElements['div'] & {
  defaultSelected: string;
};

export const Root = component$((props: RootProps) => {
  const ctx = useTabsContextProvider(props.defaultSelected);

  return (
    <div id={ctx.name} {...props}>
      <Slot />
    </div>
  );
});
