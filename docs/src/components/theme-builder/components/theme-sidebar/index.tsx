import type { ThemeEditor } from '../../hooks/use-theme-editor';
import type { ThemeManager } from '../../hooks/use-theme-manager';
import { ThemeSidebarHead } from '../theme-sidebar-head';

import { ColorList } from './color-list';

type ThemeSidebarProps = {
  class?: string;
  manager: ThemeManager;
  editor: ThemeEditor;
};

export const ThemeSidebar = (props: ThemeSidebarProps) => (
  <div class={props.class}>
    <ThemeSidebarHead manager={props.manager} />
    <ColorList manager={props.manager} editor={props.editor} />
  </div>
);
