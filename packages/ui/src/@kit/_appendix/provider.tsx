import { Provider } from '@onwo/primitives/page-navigation';
import { OwPropsOf } from '~primitives/index';

export const PageNavigationProvider = (props: OwPropsOf<typeof Provider>) => (
  <Provider {...props}>{props.children}</Provider>
);
