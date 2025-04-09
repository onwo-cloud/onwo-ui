import type { PropsOf } from '@builder.io/qwik';
import { PageNavigation } from '@onwo/primitives';

export const Provider = (props: PropsOf<typeof PageNavigation.Provider>) => (
  <PageNavigation.Provider {...props}>{props.children}</PageNavigation.Provider>
);
