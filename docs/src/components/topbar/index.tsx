import { MenuTrigger } from '~ui/@kit/menu';

import { ThemeMenuRoot } from '~/components/theme-builder/components/theme-sidebar-head/ThemeMenuRoot';
import { Icon } from '~/utils/icon';
import { Changelog } from './changelog';

const ThemeDropdown = () => (
  <ThemeMenuRoot>
    <MenuTrigger class="group rounded-full flex gap-1 items-center px-4 py-2 cursor-pointer hover:text-ink hover:bg-canvas-input">
      <Icon class="text-ink-tertiary group-hover:text-ink" i="sun" />
      <span class="text-ink"> Light </span>
      <Icon class="text-ink-tertiary group-hover:text-ink" i="chevron-down" />
    </MenuTrigger>
  </ThemeMenuRoot>
);

const GithubLink = () => (
  <button class="group rounded-full flex gap-1 items-center px-4 py-2 cursor-pointer text-ink-contrast bg-canvas-contrast hover:bg-canvas-contrast-hover">
    <Icon size="md" i="github" />
    <span> 489 </span>
  </button>
);


export const Topbar = () => (
  <div class="pt-[20px] w-full flex items-center justify-between">
    <div />
    <Changelog />
    <div class="mx-6 flex justify-end gap-2">
      <ThemeDropdown />
      <GithubLink />
    </div>
  </div>
);
