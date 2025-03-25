import { PageNavigation } from '~/primitives';
import type { PageNavigationProviderProps } from '~/primitives/page-navigation/provider';

export const Provider = (props: PageNavigationProviderProps) => (
  <PageNavigation.Provider {...props}>{props.children}</PageNavigation.Provider>
);
