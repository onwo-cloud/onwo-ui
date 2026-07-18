import { component$, Slot, useVisibleTask$ } from '@qwik.dev/core';
import { useThemeContext } from './theme-context';

// Vite glob import creates lazy CSS chunks for each font
const fontModules = import.meta.glob('../../styles/fonts/*.css');

// Set to keep track of loaded fonts so we don't re-fetch them
const loadedFonts = new Set<string>(['instrument-sans', 'geist-mono']);

export const loadFont = async (fontSlug: string) => {
  if (!fontSlug) return;

  // If font was already loaded, just swap the CSS variable
  if (loadedFonts.has(fontSlug)) {
    document.documentElement.style.setProperty('--font-base-sans', `var(--font-${fontSlug})`);
    return;
  }

  // Dynamically load font CSS file chunk
  const modulePath = `../../styles/fonts/${fontSlug}.css`;
  if (fontModules[modulePath]) {
    await fontModules[modulePath]();
    loadedFonts.add(fontSlug);
    document.documentElement.style.setProperty('--font-base-sans', `var(--font-${fontSlug})`);
  }
};

export const FontProvider = component$(() => {
  const ctx = useThemeContext.use();

  // Watch font selection changes on client side
  useVisibleTask$(({ track }) => {
    const selectedFont = track(() => ctx.fontSans.value);
    if (selectedFont) {
      loadFont(selectedFont);
    }
  });

  return <Slot />;
});
