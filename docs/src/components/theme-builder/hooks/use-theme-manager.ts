import { $, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { z } from '@builder.io/qwik-city';

import { createPersistentStore } from '~/hooks/use-persistent-store';
import { M } from '~/utils/effect';

import { parseTheme, serializeTheme } from '../lib/theme-parsing';
import type { Theme } from '../types';

const DEFAULT_THEME: Theme = { id: 1, name: 'My theme', palettes: {} };

const useStoredThemeData = createPersistentStore(
  $(() =>
    z.object({
      id: z.number(),
      name: z.string(),
      data: z.string(),
    }),
  ),
  {
    dbName: 'use-theme-builder-db',
    storeName: 'themes',
    keyPath: 'id',
    version: 1,
  },
);

export const useThemeManager = () => {
  const themes = useSignal<Theme[]>([]);
  const selectedThemeId = useSignal<number>(DEFAULT_THEME.id);
  const store = useStoredThemeData();

  const persist$ = $(async (theme: Theme) => {
    const res = await store.saveItem$({
      id: theme.id,
      name: theme.name,
      data: serializeTheme(theme),
    });
    if (M.exitIsFailure(res)) {
      console.error('Invalid store status, got error', res.cause);
    }
  });


  useVisibleTask$(async () => {
    const records = await store.getAllItems$();
    if (M.exitIsFailure(records)) {
      console.error('Invalid store status, got error', records.cause);
      return;
    }

    if (records.value.length === 0) {
      themes.value = [DEFAULT_THEME];
      return persist$(DEFAULT_THEME);
    }

    const parsed = (
      await Promise.all(
        records.value.map(async (r) => {
          const exit = await M.runPromiseExit(parseTheme(r.data));
          return M.exitIsSuccess(exit) ? { ...exit.value, id: r.id, name: r.name } : null;
        }),
      )
    ).filter(Boolean) as Theme[];

    themes.value = parsed;
    selectedThemeId.value = parsed[0]?.id || DEFAULT_THEME.id;
  }, { strategy: 'document-ready' });

  const selectedTheme = useComputed$(
    () =>
      themes.value.find((t) => t.id === selectedThemeId.value) || themes.value[0] || DEFAULT_THEME,
  );

  const handleUpdateTheme$ = $(async (updated: Theme) => {
    themes.value = themes.value.map((t) => (t.id === updated.id ? updated : t));
    await persist$(updated);
  });

  const handleCreateTheme$ = $(async () => {
    const nextId = Math.max(0, ...themes.value.map((t) => t.id)) + 1;
    const newTheme = { ...DEFAULT_THEME, id: nextId, name: `Theme ${nextId}` };

    themes.value = [...themes.value, newTheme];
    selectedThemeId.value = nextId;
    await persist$(newTheme);
  });

  const handleRemoveTheme$ = $(async (id: number) => {
    if (themes.value.length <= 1) return;
    themes.value = themes.value.filter((t) => t.id !== id);
    if (selectedThemeId.value === id) selectedThemeId.value = themes.value[0].id;
    const res = await store.deleteItem$(id);
    if (M.exitIsFailure(res)) {
      console.error('Invalid store status, got error', res.cause);
      return;
    }
  });

  const handleLoadTheme$ = $(async (serialized: string) => {
    const exit = await M.runPromiseExit(parseTheme(serialized));
    if (M.exitIsFailure(exit)) return;

    const nextId = Math.max(0, ...themes.value.map((t) => t.id)) + 1;
    const theme = { ...exit.value, id: nextId };

    themes.value = [...themes.value, theme];
    selectedThemeId.value = nextId;
    await persist$(theme);
  });

  return {
    themes,
    selectedTheme,
    selectedThemeId,
    handleCreateTheme$,
    handleUpdateTheme$,
    handleRemoveTheme$,
    handleLoadTheme$,
    handleSaveTheme$: $(() => persist$(selectedTheme.value)),
    handleSelectTheme$: $((id: number) => {
      selectedThemeId.value = id;
    }),
  };
};

export type ThemeManager = ReturnType<typeof useThemeManager>;
