import { $, PropsOf, Slot, useSignal } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';
import { ModalTrigger } from '@onwo/ui/modal';

import type { ThemeManager } from '../../hooks/use-theme-manager';
import { CreateThemeModalProvider } from '../../modals/create-theme-modal';
import { SaveThemeModalProvider } from '../../modals/save-theme-modal';

import { component$ } from '@builder.io/qwik';
import { MenuPopup, MenuRoot, MenuTrigger } from '~primitives/@kit/menu';

import { ThemeMenuRoot } from './ThemeMenuRoot';

type ThemeMenuProps = {
  manager: ThemeManager;
  class?: string;
};

export const ThemeMenu = component$((props: ThemeMenuProps) => {
  const {
    selectedTheme,
    themes,
    handleCreateTheme$,
    handleSaveTheme$,
    handleRemoveTheme$,
    handleSelectTheme$,
  } = props.manager;

  // Handle theme switching with a confirmation alert
  const onThemeSelect$ = $((themeId: number, themeName: string) => {
    if (themeId === selectedTheme.value.id) {
      return;
    }

    if (
      confirm(
        `Switching to "${themeName}". Any unsaved changes to "${selectedTheme.value.name}" might be lost if not saved (locally persisted). Continue?`,
      )
    ) {
      handleSelectTheme$(themeId);
    }
  });

  return (
    <div class={props.class}>
      <ThemeMenuRoot>
        <MenuTrigger class="flex cursor-default items-center text-left focus:outline-none">
          <div class="flex items-center gap-2 overflow-hidden pr-2">
            <h2 class="text-sm font-semibold text-gray-900 truncate">{selectedTheme.value.name}</h2>
          </div>

          <div
            class={[
              'p-1 rounded-md cursor-pointer transition-colors',
              'outline-ink/50 text-ink hover:outline',
            ]}
          >
            <Icon i="chevrons-up-down" size="xs" />
          </div>
        </MenuTrigger>
      </ThemeMenuRoot>

      {/* Trigger Button */}
      <Icon i="panel-right" size="xs" />

      <div class="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100 origin-top z-20">
        {/* Theme List
      <div class="max-h-60 overflow-y-auto">
        <div class="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
          Switch Theme
        </div>

        {themes.value.map((theme) => {
          const isActive = theme.id === selectedTheme.value.id;
          return (
            <button
              key={theme.id}
              onClick$={() => onThemeSelect$(theme.id, theme.name)}
              class={`w-full text-left px-3 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600'
                }`}
            >
              <span class="truncate">{theme.name}</span>
              {isActive && <Icon i="check"  class="w-4 h-4 text-gray-900"  />}
            </button>
          );
        })}

        {themes.value.length === 0 && (
          <div class="px-3 py-2 text-xs text-gray-400 italic">No saved themes</div>
        )}
      </div>
      */}

        <div class="h-px bg-gray-100 my-1" />

        {/* Actions Submenu
      <div class="px-1 space-y-0.5 pb-1">
        <CreateThemeModalProvider onCreate$={handleCreateTheme$}>
          <ModalTrigger>
            <Button
              as="span"
              variant="ghost"
              size="sm"
              class="w-full justify-start h-8 px-2 font-normal text-gray-600 hover:text-gray-900"
              q:slot="trigger"
            >
              <Icon i="plus"  class="w-3.5 h-3.5 mr-2 text-gray-400"  /> Create New
            </Button>
          </ModalTrigger>
        </CreateThemeModalProvider>

        <SaveThemeModalProvider themeName={selectedTheme.value.name} onSave$={handleSaveTheme$}>
          <ModalTrigger>
            <Button
              as="span"
              variant="ghost"
              size="sm"
              class="w-full justify-start h-8 px-2 font-normal text-gray-600 hover:text-gray-900"
              q:slot="trigger"
            >
              <Icon i="save"  class="w-3.5 h-3.5 mr-2 text-gray-400"  /> Export Current
            </Button>
          </ModalTrigger>
        </SaveThemeModalProvider>

        <Button
          variant="ghost"
          size="sm"
          onClick$={() => {
            handleRemoveTheme$(selectedTheme.value.id);
          }}
          class="w-full justify-start h-8 px-2 font-normal text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Icon i="trash"  class="w-3.5 h-3.5 mr-2"  /> Delete Current Theme
        </Button>
      </div>
 */}
      </div>
    </div>
  );
});
