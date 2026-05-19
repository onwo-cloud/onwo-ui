import { component$ } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';
import { ModalTrigger } from '~ui/components/modal';
import { CreateThemeModalProvider } from './modals/create-theme-modal';
import { LoadThemeProviderModal } from './modals/load-theme-modal';
import { SaveThemeModalProvider } from './modals/save-theme-modal';
import { ThemeManager } from './hooks/use-theme-manager';

type ThemeHeaderProps = {
  manager: ThemeManager;
};

export const ThemeHeader = component$((props: ThemeHeaderProps) => {
  const {
    selectedTheme,
    themes,
    handleLoadTheme$,
    handleCreateTheme$,
    handleSaveTheme$,
    handleRemoveTheme$,
    handleApplyTheme$,
  } = props.manager;

  return (
    <div class="border-b px-8 py-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold mb-1">Theme Builder</h1>
          <p class="text-sm text-gray-400">Current: {selectedTheme.value.name}</p>
        </div>

        <div class="flex items-center gap-2">
          <LoadThemeProviderModal savedThemes={themes.value} onLoad$={handleLoadTheme$}>
            <ModalTrigger>
              <Button as="div" variant="outline" class="bg-transparent" size="sm" q:slot="trigger">
                <Icon name="Folder"  class="w-4 h-4 mr-2"  /> Load Theme
              </Button>
            </ModalTrigger>
          </LoadThemeProviderModal>

          <CreateThemeModalProvider onCreate$={handleCreateTheme$}>
            <ModalTrigger>
              <Button as="span" variant="outline" class="bg-transparent" size="sm" q:slot="trigger">
                <Icon name="Plus"  class="w-4 h-4 mr-2"  /> Create Theme
              </Button>
            </ModalTrigger>
          </CreateThemeModalProvider>

          <div class="w-px h-6 bg-[blue]" />

          <SaveThemeModalProvider themeName={currentTheme.value.name} onSave$={handleSaveTheme$}>
            <ModalTrigger>
              <Button as="span" variant="outline" class="bg-transparent" size="sm" q:slot="trigger">
                <Icon name="Save"  class="w-4 h-4 mr-2"  /> Save
              </Button>
            </ModalTrigger>
          </SaveThemeModalProvider>

          <Button variant="outline" class="bg-transparent" size="sm" onClick$={handleRemoveTheme$}>
            <Icon name="Trash"  class="w-4 h-4 mr-2"  /> Remove
          </Button>

          <div class="w-px h-6 bg-[blue]" />

          <Button onClick$={handleApplyTheme$} size="sm">
            <Icon name="Palette"  class="w-4 h-4 mr-2"  /> Apply Theme
          </Button>
        </div>
      </div>
    </div>
  );
});
