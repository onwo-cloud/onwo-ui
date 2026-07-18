import type { BaseIconProps } from '@onwo/primitives/svg-icon';
import { component$, type Component, type JSXChildren } from '@qwik.dev/core';

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
  return createRegistry<IconMap>(iconMap);
}

export interface UiIconComponent extends Component<BaseIconProps & { i: UiIcons }> {
  named: (name: UiIcons) => Component<BaseIconProps>;
}

const UiIconInternal = component$<BaseIconProps & { i: UiIcons }>(({ i: name, ...props }) => {
  const iconMap = useRegistry<IconMap>();

  if (!iconMap) {
    console.error(`[onwo-ui] Missing UIProvider. Please wrap your app in a UIProvider.`);
    return <></>;
  }

  const Comp = iconMap[name];

  if (!Comp) {
    throw new Error(`[onwo-ui] Missing icon definition for "${name}" in your UIProvider.`);
  }

  return <Comp {...props} />;
});

export const UiIcon = Object.assign(UiIconInternal, {
  named: (name: UiIcons) => {
    return (props: BaseIconProps) => <UiIconInternal i={name} {...props} />;
  },
}) as unknown as UiIconComponent;
