import { ClassList, component$, useComputed$ } from '@builder.io/qwik';
import { useSwatchProvider } from './context/swatch-context';
import { useThemeEditor } from './hooks/use-theme-editor';
import { useThemeManager } from './hooks/use-theme-manager';
import { ThemeSidebar } from './components/theme-sidebar';

type ThemeBuilderProps = {
  class?: ClassList;
};

export const ThemeBuilder = component$((props: ThemeBuilderProps) => {
  const manager = useThemeManager();

  // Initialize Editor with the currently selected theme from Manager
  const editor = useThemeEditor({
    theme: manager.selectedTheme,
    onThemeChange$: manager.handleUpdateTheme$,
  });


  // Compute derived state for the active palette visualization
  const { selectedPaletteId } = editor;

  const currentScale = useComputed$(() => {
    const theme = manager.selectedTheme.value;
    if (!theme || selectedPaletteId.value === undefined) return undefined;
    return theme.palettes[selectedPaletteId.value];
  });

  useSwatchProvider(manager.selectedTheme);

  return (
    // this should grow to 360px smoothly when colorSelectedSidebarIsVisible is true
    <div class={['relative h-full grid grid-cols-[320px_1fr] gap-8 min-h-screen', props.class]}>
      <div class="relative w-full h-full border-l border-[blue]/20">
        <div class="overflow-hidden">
          <ThemeSidebar manager={manager} editor={editor} />
        </div>
      </div>
    </div>
  );
});
