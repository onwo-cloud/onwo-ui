import { component$ } from '@builder.io/qwik';
import type { ThemeManager } from '../../hooks/use-theme-manager';
import { SIDEBAR_HEAD_HEIGHT, SIDEBAR_UNIVERSAL_MARGIN } from '../../constants';
import { spacing } from '~/utils/spacing';
import { ThemeMenu } from './theme-menu';

type ThemeSidebarHeadProps = {
  manager: ThemeManager;
};

export const ThemeSidebarHead = component$((props: ThemeSidebarHeadProps) => {
  return (
    <div class={["flex items-center border-b border-gray-100 relative z-20", spacing.px(SIDEBAR_UNIVERSAL_MARGIN)]} style={{ height: SIDEBAR_HEAD_HEIGHT }}>
      <ThemeMenu class="group w-full flex items-center justify-between text-left focus:outline-none" manager={props.manager} />
    </div>
  );
});

