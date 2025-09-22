import { MainContent } from './main-content';
import { Sidebar } from './sidebar';

export const BORDER_CLASSES = ' ring-[1.2px] ring-[#d6d6d6] rounded-[0.6rem]';

export const HomePageV2 = () => (
  <div class="flex h-screen lg:gap-8">
    <Sidebar />
    <MainContent />
  </div>
);
