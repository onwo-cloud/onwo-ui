import type { PropsOf } from '@builder.io/qwik';
import { Provider } from '@onwo/primitives/page-navigation';

export const PageNavigationProvider = (props: PropsOf<typeof Provider>) => (
  <Provider {...props}>{props.children}</Provider>
);
