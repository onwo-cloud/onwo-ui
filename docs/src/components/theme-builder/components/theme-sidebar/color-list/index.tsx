import { component$, useComputed$ } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';

import { pipe, Arr, Obj } from '~/utils/effect';

import type { ThemeEditor } from '../../../hooks/use-theme-editor';
import type { ThemeManager } from '../../../hooks/use-theme-manager';

import { ColorListItem } from './color-item';

type ColorListProps = {
  manager: ThemeManager;
  editor: ThemeEditor;
};

export const ColorList = component$((props: ColorListProps) => {
  const { selectedTheme } = props.manager;
  const { handleRemovePalette$, handleAddPalette$, selectedPaletteId, handleSelectPalette$ } =
    props.editor;

  const palettes = useComputed$(() =>
    pipe(
      selectedTheme.value.palettes,
      Obj.values,
      Arr.toSorted((a, b) => a.id - b.id),
    ),
  );

  return (
    <div class="space-y-6 relative">
      {/* Palettes Section controls the Theme Editor */}
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-semibold text-gray-400">Palettes ({palettes.value.length})</h3>
        </div>

        <div class="space-y-2">
          {palettes.value.map((palette) => (
            <ColorListItem
              key={palette.id}
              palette={palette}
              isSelected={selectedPaletteId.value === palette.id}
              onSelect$={() => handleSelectPalette$(palette.id)}
              onRemove$={handleRemovePalette$}
            />
          ))}

          <Button
            onClick$={handleAddPalette$}
            variant="ghost"
            class="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-900 border border-dashed border-gray-300 hover:border-gray-400 h-9"
          >
            Add palette <Icon i="plus" class="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
});
