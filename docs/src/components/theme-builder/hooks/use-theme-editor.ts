import type { QRL, Signal} from '@builder.io/qwik';
import { $, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import { M, Obj, Arr, pipe } from '~/utils/effect';

import type { Palette, ScaleData, Theme } from '../types';

interface UseThemeEditorProps {
  // We accept a ReadOnly signal or a regular value, but we emit changes via the callback
  theme: Signal<Theme | undefined>;
  onThemeChange$: QRL<(theme: Theme) => void>;
}

export const useThemeEditor = ({ theme, onThemeChange$ }: UseThemeEditorProps) => {
  const selectedPaletteId = useSignal<number | undefined>(undefined);

  // Effect to deselect a palette if it's removed from the current theme
  useVisibleTask$(({ track }) => {
    const currentTheme = track(() => theme.value);
    if (!currentTheme) return;

    if (selectedPaletteId.value !== undefined && !currentTheme.palettes[selectedPaletteId.value]) {
      selectedPaletteId.value = undefined;
    }
  });

  const handleNameChange$ = $((name: string) => {
    if (!theme.value) return;
    const updatedTheme = { ...theme.value, name };
    onThemeChange$(updatedTheme);
  });

  const handleSelectPalette$ = $((id: number) => {
    selectedPaletteId.value = id;
  });

  const handleScaleChange$ = $((scale: ScaleData) => {
    const id = selectedPaletteId.value;
    const currentTheme = theme.value;

    if (id === undefined || !currentTheme || !currentTheme.palettes[id]) return;

    const currentEntry = currentTheme.palettes[id];

    const updatedTheme: Theme = {
      ...currentTheme,
      palettes: {
        ...currentTheme.palettes,
        [id]: {
          ...scale,
          id: currentEntry.id,
          name: currentEntry.name,
          swatches: { kind: 'outdated' },
        },
      },
    };
    onThemeChange$(updatedTheme);
  });

  const handleAddPalette$ = $(() => {
    const currentTheme = theme.value;
    if (!currentTheme) return;

    const existingNames = pipe(
      currentTheme.palettes,
      Obj.values,
      Arr.forEach((s) => s.name.toLowerCase()),
      (x) => new Set(x),
    );

    let counter = 1;
    let newName = `Palette ${counter}`;
    while (existingNames.has(newName.toLowerCase())) {
      counter++;
      newName = `Palette ${counter}`;
    }

    // Generate a unique ID for the palette within this theme
    const currentIds = pipe(currentTheme.palettes, Obj.keys, Arr.forEach(Number));

    const newId = currentIds.length > 0 ? Math.max(...currentIds) + 1 : 0;

    const newPalette: Palette = {
      id: newId,
      hue: [],
      chroma: [],
      lightness: [],
      name: newName,
      swatches: { kind: 'outdated' },
    };

    const updatedTheme: Theme = {
      ...currentTheme,
      palettes: { ...currentTheme.palettes, [newId]: newPalette },
    };

    onThemeChange$(updatedTheme);
    selectedPaletteId.value = newId;
  });

  const handleRenamePalette$ = $(
    (id: number, newName: string): M.Failable<'aborted' | 'success'> => {
      if (!newName.trim()) return M.succeed('aborted');
      const currentTheme = theme.value;
      if (!currentTheme) return M.succeed('aborted');

      const isDuplicate = pipe(
        currentTheme.palettes,
        Obj.values,
        Arr.some((s) => s.id !== id && s.name.toLowerCase() === newName.toLowerCase()),
      );

      if (isDuplicate) {
        return M.fail('A palette with this name already exists.');
      }

      const scale = currentTheme.palettes[id];
      if (scale) {
        const updatedTheme: Theme = {
          ...currentTheme,
          palettes: { ...currentTheme.palettes, [id]: { ...scale, name: newName } },
        };
        onThemeChange$(updatedTheme);
      }

      return M.succeed('success');
    },
  );

  const handleRemovePalette$ = $((id: number) => {
    const currentTheme = theme.value;
    if (!currentTheme) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [id]: removed, ...remaining } = currentTheme.palettes;
    const updatedTheme: Theme = { ...currentTheme, palettes: remaining };
    onThemeChange$(updatedTheme);
  });

  return {
    selectedPaletteId,
    handleNameChange$,
    handleSelectPalette$,
    handleScaleChange$,
    handleAddPalette$,
    handleRenamePalette$,
    handleRemovePalette$,
  };
};

export type ThemeEditor = ReturnType<typeof useThemeEditor>;
