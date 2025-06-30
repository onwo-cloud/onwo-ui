import type { PropsOf } from '@builder.io/qwik';
import { Provider as PProvider } from '@onwo/primitives/page-navigation';

export const Provider = (props: PropsOf<typeof PProvider>) => (
  <PProvider {...props}>{props.children}</PProvider>
);
