import { PropsOf } from '@builder.io/qwik';
import { MenuTrigger } from '~ui/@kit/menu';

import { ThemeMenuRoot } from '~/components/theme-builder/components/theme-sidebar-head/ThemeMenuRoot';
import { Icon } from '~/utils/icon';

const ClickablePill = ({ children, class: className, ...props }: PropsOf<'button'>) => (
  <button
    class={[
      'group rounded-full flex gap-1 items-center font-medium px-2 py-1 hover:text-ink hover:bg-canvas-secondary',
      className,
    ]}
    {...props}
  >
    {children}
  </button>
);

const ThemeDropdown = () => (
  <ThemeMenuRoot>
    <MenuTrigger class="group rounded-full flex gap-1 items-center font-medium px-2 py-1 hover:text-ink hover:bg-canvas-secondary">
      <Icon class="text-ink-tertiary group-hover:text-ink" name="sun" />
      <span class="text-sm text-ink"> Light </span>
      <Icon class="text-ink-tertiary group-hover:text-ink" name="chevron-down" />
    </MenuTrigger>
  </ThemeMenuRoot>
);

const GithubLink = () => (
  <button class="group rounded-full flex gap-1 items-center font-medium px-2 py-1 text-ink-contrast bg-canvas-contrast hover:bg-canvas-contrast-hover">
    <Icon name="github" />
    <span class="text-sm"> 489 </span>
  </button>
);

export const Topbar = () => (
  <div class="mt-6 mx-6 flex justify-end gap-2">
    <ThemeDropdown />
    <GithubLink />
  </div>
);
