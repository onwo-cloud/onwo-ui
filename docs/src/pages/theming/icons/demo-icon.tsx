import type { BaseIconProps } from '@onwo/primitives/svg-icon';
import { component$, type Component } from '@qwik.dev/core';
import { useThemeContext } from '../theme-context';
import { getDemoIconMap } from './create-icons';
import type { IconLibraryKey } from './mapping-table';

export type DemoIconName =
  | 'alert-circle'
  | 'archive'
  | 'arrow-right'
  | 'bell'
  | 'bot'
  | 'chevron-down'
  | 'chevrons-up-down'
  | 'circle-dot'
  | 'clock'
  | 'file-text'
  | 'filter'
  | 'folder'
  | 'inbox'
  | 'layers'
  | 'link'
  | 'list'
  | 'more-horizontal'
  | 'plus'
  | 'search'
  | 'send'
  | 'square'
  | 'star'
  | 'trash-2'
  | 'x';

export type IconMap = Record<DemoIconName, Component<BaseIconProps>>;

export interface DemoIconComponent extends Component<BaseIconProps & { name: DemoIconName }> {
  named: (name: DemoIconName) => Component<BaseIconProps>;
}

const DemoIconInternal = component$<BaseIconProps & { name: DemoIconName }>(({ name, ...props }) => {
  // Subscribe directly to theme context signal
  const ctx = useThemeContext.use();
  const currentSet = (ctx.iconSet.value || 'lucide').toLowerCase() as IconLibraryKey;
  const iconMap = getDemoIconMap(currentSet);

  const Comp = iconMap[name];

  if (!Comp) {
    console.error(`[onwo-ui] Missing icon definition for "${name}" in icon set "${currentSet}".`);
    return <></>;
  }

  return <Comp {...props} />;
});

export const DemoIcon = Object.assign(DemoIconInternal, {
  named: (name: DemoIconName) => {
    return (props: BaseIconProps) => <DemoIconInternal name={name} {...props} />;
  },
}) as unknown as DemoIconComponent;
