import type { PropsOf} from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import {
  MenuRoot,
  MenuPopup,
  MenuItem,
  MenuLabel,
} from '~ui/@kit/menu';

import { Icon } from '~/utils/icon';

export const ThemeMenuRoot = component$((props: PropsOf<'div'>) => (
  <MenuRoot {...props}>
    <Slot />
    <MenuPopup side="bottom" sideOffset={8}>
      <MenuLabel>Theme</MenuLabel>
      <div role="group">
        <MenuItem class="group gap-2">
          <Icon i="sun" class="text-ink-tertiary group-hover:text-ink" /> Light
        </MenuItem>
        <MenuItem class="group gap-2">
          <Icon i="moon" class="text-ink-tertiary group-hover:text-ink" /> Dark
        </MenuItem>
      </div>
    </MenuPopup>
  </MenuRoot>
));
