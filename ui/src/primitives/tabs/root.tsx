import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';
import { useTabsContextProvider } from './use-tabs-context';

export type RootProps = Primitive<'div'> & {
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
