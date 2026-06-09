import { component$, type Component, type JSXChildren } from '@builder.io/qwik';
import type { BaseIconProps } from '@onwo/primitives/svg-icon';

import { createRegistry, useRegistry } from './registry';

// 1. The strict union of all icons required internally by the UI library
export type UiIcons =
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'check'
  | 'x'
  | 'circle-check'
  | 'circle-alert'
  | 'circle-question-mark'
  | 'triangle-alert';

export type IconMap = Record<UiIcons, Component<BaseIconProps>>;

export function createUiProvider(iconMap: IconMap) {
  const Provider = createRegistry<IconMap>(iconMap);
  return ({ children }: { children: JSXChildren }) => <Provider>{children}</Provider>;
}

export interface UiIconComponent extends Component<BaseIconProps & { name: UiIcons }> {
  named: (name: UiIcons) => Component<BaseIconProps>;
}

const UiIconInternal = component$<BaseIconProps & { name: UiIcons }>(({ name, ...props }) => {
  const iconMap = useRegistry<IconMap>();

  if (!iconMap) {
    throw new Error(`[onwo-ui] Missing UIProvider. Please wrap your app in a UIProvider.`);
  }

  const Comp = iconMap[name];

  if (!Comp) {
    throw new Error(`[onwo-ui] Missing icon definition for "${name}" in your UIProvider.`);
  }

  return <Comp {...props} />;
});

export const UiIcon = Object.assign(UiIconInternal, {
  named: (name: UiIcons) => {
    return (props: BaseIconProps) => <UiIconInternal name={name} {...props} />;
  },
}) as unknown as UiIconComponent;
