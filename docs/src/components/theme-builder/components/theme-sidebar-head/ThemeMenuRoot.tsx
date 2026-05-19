import { $, component$, PropsOf, Slot } from '@builder.io/qwik';
import {
  MenuRoot,
  MenuPopup,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuItem,
  MenuSubRoot,
  MenuSubTrigger,
  MenuLabel,
  MenuSeparator,
} from '~ui/@kit/menu';

import { Icon } from '~/utils/icon';

export const ThemeMenuRoot = component$((props: PropsOf<'div'>) => (
  <MenuRoot {...props}>
    <Slot />
    <MenuPopup>
      <MenuLabel>Theme</MenuLabel>
      <div role="group">
        <MenuItem class="group gap-2">
          <Icon name="sun" class="text-ink-tertiary group-hover:text-ink" /> Light
        </MenuItem>
        <MenuItem class="group gap-2">
          <Icon name="moon" class="text-ink-tertiary group-hover:text-ink" /> Dark
        </MenuItem>
      </div>

      <MenuSeparator />

      <MenuCheckboxItem>Colors</MenuCheckboxItem>
      <MenuRadioGroup>
        <MenuRadioItem value="date">Date</MenuRadioItem>
        <MenuRadioItem value="name">Name</MenuRadioItem>
        <MenuRadioItem value="type">Type</MenuRadioItem>
      </MenuRadioGroup>

      <div role="group">
        <MenuItem disabled={false}>New File</MenuItem>
        <MenuSubRoot>
          <MenuSubTrigger>Export As...</MenuSubTrigger>

          <MenuPopup>
            <MenuItem onClick$={$(() => console.log('PDF'))}>PDF Document</MenuItem>
            <MenuItem onClick$={$(() => console.log('CSV'))}>CSV Spreadsheet</MenuItem>
            <MenuSubRoot>
              <MenuSubTrigger>Image Format </MenuSubTrigger>
              <MenuPopup>
                <MenuItem>.PNG</MenuItem>
                <MenuItem>.JPG</MenuItem>
              </MenuPopup>
            </MenuSubRoot>
          </MenuPopup>
        </MenuSubRoot>
        <MenuItem>Delete</MenuItem>
      </div>
    </MenuPopup>
  </MenuRoot>
));
