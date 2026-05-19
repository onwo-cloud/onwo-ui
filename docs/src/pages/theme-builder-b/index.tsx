import { Sidebar } from '~/commons/sidebar2';

import { Builder } from './builder';

export const ThemeBuilder = () => (
  <div class="flex h-screen lg:gap-8">
    <Sidebar />
    <Builder />
  </div>
);
