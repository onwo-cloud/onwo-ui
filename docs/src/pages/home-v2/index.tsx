import { Sidebar } from '~/commons/sidebar2';

import { MainContent } from './main-content';
import { Topbar } from './top-bar';

export const HomePageV2 = () => (
  <div class="flex h-screen lg:gap-8">
    <Sidebar />
    <div class="flex flex-col w-full h-full">
      <Topbar />
      <MainContent />
    </div>
  </div>
);
