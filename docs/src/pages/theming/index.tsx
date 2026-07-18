import { component$, useSignal, useStore, useComputed$, $ } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { DialInput, DialText, DialRadio, DialSelect, DialGroup, DialTabs, DialTabItem } from '~/commons/dials';
import { CurveArea } from './curve-area';
import { Slider, DialSlider } from './slider';
import { ThemeSidebar, DEFAULT_COLORS } from './theme-sidebar';
import { ShadeSwatches, ALL_SHADE_STEPS } from './shade-swatches';
import { useThemeContext, type ColorPaletteState } from './theme-context';

import {
  DEFAULT_THEME_NAMES,
  clamp,
  applyCubicChromaCurve,
  getOnwoLightnessForStep,
  getMaxChromaForOklch,
  getLightnessGamutLimits,
  computeShadeVars,
} from './utils';

import { ColorsTab } from './tabs/colors-tab';
import { PreviewTab } from './tabs/preview-tab';
import { TypographyTab } from './tabs/typography-tab';
import { AccessibilityTab } from './tabs/accessibility-tab';
import { ThemeControlsSidebar } from './theme-controls-sidebar';

export {
  DialInput,
  DialText,
  DialRadio,
  DialSelect,
  DialGroup,
  DialTabs,
  DialTabItem,
  CurveArea,
  Slider,
  DialSlider,
  ThemeSidebar,
  ShadeSwatches,
};

const createDefaultPalette = (hue: number, isMonochrome = false, isDark = false): ColorPaletteState => ({
  shade0Lightness: 1.0,
  lightnessHighlights: isDark ? 0.5 : 0.3,
  lightnessMidpoint: 0.5,
  lightnessShadows: isDark ? 0.8 : 0.5,
  shade1000Lightness: 0.0,
  chromaAmount: isMonochrome ? 0.0 : 0.6,
  chromaShift: 0.5,
  chromaSpread: 0.6,
  hueAngle: hue,
  hueShift: 0,
  gamut: 'srgb',
});

const DEFAULT_PALETTES: Record<string, ColorPaletteState> = {};
for (const col of DEFAULT_COLORS) {
  const isMonochrome = col.id === 'shade' || col.id === 'white' || col.id === 'black';
  DEFAULT_PALETTES[col.id] = createDefaultPalette(col.hue ?? 0, isMonochrome, false);
}

function computeColorVarsForPalette(
  colorId: string,
  p: ColorPaletteState,
  themeVal: 'light' | 'dark',
  roundingVal: 'none' | 'sm' | 'md' | 'lg' | 'xl'
) {
  const rawVars = computeShadeVars(
    themeVal,
    roundingVal,
    p.chromaShift,
    p.chromaSpread,
    p.gamut,
    p.lightnessHighlights,
    p.lightnessMidpoint,
    p.lightnessShadows,
    p.chromaAmount,
    p.hueAngle,
    p.hueShift,
    p.shade0Lightness,
    p.shade1000Lightness
  );

  if (colorId === 'shade') {
    return rawVars;
  }

  const colorVars: Record<string, string> = {};
  for (const [key, value] of Object.entries(rawVars)) {
    if (key.startsWith('--color-shade-')) {
      const newKey = key.replace('--color-shade-', `--color-${colorId}-`);
      colorVars[newKey] = value;
    }
  }
  return colorVars;
}

export const ThemingPage = component$(() => {
  // Main Settings Signals
  const name = useSignal('Onwo light');
  const theme = useSignal<'light' | 'dark'>('light');
  const iconSet = useSignal('lucide'); // Updated from 'Lucide' -> 'lucide'
  const rounding = useSignal<'none' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const isCopied = useSignal(false);
  const customThemes = useSignal<string[]>([]);
  const activeMainTab = useSignal<'colors' | 'preview' | 'typography' | 'accessibility'>('preview');

  // Color Section & Reactive Stores
  const selectedColor = useSignal('shade');
  const colorList = useSignal(DEFAULT_COLORS);
  const colorPalettes = useStore<Record<string, ColorPaletteState>>(
    JSON.parse(JSON.stringify(DEFAULT_PALETTES)),
    { deep: true }
  );

  // Accordion Group Open Signals
  const isThemeOpen = useSignal(true);
  const isColorOpen = useSignal(true);
  const isColorGroupHovered = useSignal(false);
  const isSliding = useSignal(false);

  const isDefaultTheme = DEFAULT_THEME_NAMES.includes(name.value);

  const handleSlideStart = $(() => {
    isSliding.value = true;
    if (typeof window !== 'undefined') {
      const onUp = () => {
        isSliding.value = false;
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('mouseup', onUp);
        window.removeEventListener('touchend', onUp);
      };
      window.addEventListener('pointerup', onUp);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchend', onUp);
    }
  });

  // Active OKLCH Tab Signal
  const activeTab = useSignal<'lightness' | 'chroma' | 'hue'>('lightness');

  const activePalette = useComputed$(() => {
    return colorPalettes[selectedColor.value] || colorPalettes['shade'];
  });

  const resetToStandardPalette = $((isDarkMode: boolean) => {
    theme.value = isDarkMode ? 'dark' : 'light';
    rounding.value = 'md';
    for (const col of DEFAULT_COLORS) {
      if (colorPalettes[col.id]) {
        const isMonochrome = col.id === 'shade' || col.id === 'white' || col.id === 'black';
        const fresh = createDefaultPalette(col.hue ?? 0, isMonochrome, isDarkMode);
        Object.assign(colorPalettes[col.id], fresh);
      }
    }
  });

  const handleSidebarThemeSelect = $((themeName: string) => {
    name.value = themeName;
    const isDark = themeName.toLowerCase().includes('dark');
    resetToStandardPalette(isDark);
  });

  const handleCreateCustom = $(() => {
    const newThemeName = `Custom Theme ${customThemes.value.length + 1}`;
    customThemes.value = [...customThemes.value, newThemeName];
    name.value = newThemeName;
    resetToStandardPalette(theme.value === 'dark');
  });

  const handleDuplicateTheme = $(() => {
    const newThemeName = `${name.value} Copy`;
    customThemes.value = [...customThemes.value, newThemeName];
    name.value = newThemeName;
  });

  const handleThemeRadioChange = $((val: string) => {
    const isDark = val === 'dark';
    theme.value = val as 'light' | 'dark';
    resetToStandardPalette(isDark);
  });

  const handleSelectColor = $((colorId: string) => {
    selectedColor.value = colorId;
  });

  const handleCreateCustomColor = $(() => {
    const newId = `custom_${Date.now()}`;
    const label = `Custom ${colorList.value.length + 1}`;
    colorPalettes[newId] = createDefaultPalette(180, false, theme.value === 'dark');
    colorList.value = [
      ...colorList.value,
      { id: newId, label, bgClass: 'bg-[var(--color-shade-500)]' },
    ];
    selectedColor.value = newId;
  });

  const handleGamutChange = $((newGamutStr: string) => {
    const newGamut = newGamutStr as 'srgb' | 'p3';
    const p = colorPalettes[selectedColor.value];
    if (!p || p.gamut === newGamut) return;

    const growthFactor = 0.37 / 0.26;

    if (newGamut === 'p3') {
      p.chromaAmount = clamp(p.chromaAmount / growthFactor, 0, 1);
    } else {
      p.chromaAmount = clamp(p.chromaAmount * growthFactor, 0, 1);
    }

    p.gamut = newGamut;
  });

  // Reactive Computed Signals for Context & Curves
  const lValues = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    return Array.from({ length: 21 }, (_, i) => {
      const step = i * 50;
      return getOnwoLightnessForStep(
        step,
        p.lightnessHighlights,
        p.lightnessMidpoint,
        p.lightnessShadows,
        p.shade0Lightness,
        p.shade1000Lightness
      );
    });
  });

  const cValues = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const amount = p.chromaAmount;
    if (amount === 0) return Array(21).fill(0);

    const s = 0.1 + 0.8 * p.chromaShift;
    const w = Math.pow(3, 2 * (p.chromaSpread - 0.5));
    const a = (s / (1 - s)) * w;
    const b = w;
    const den = Math.pow(s, a) * Math.pow(1 - s, b);

    return Array.from({ length: 21 }, (_, i) => {
      const rawT = i / 20;
      const t = 0.025 + 0.95 * rawT;

      const num = Math.pow(t, a) * Math.pow(1 - t, b);

      if (den === 0 || !isFinite(num) || !isFinite(den)) return 0;
      return clamp(amount * (num / den), 0, 1);
    });
  });

  const hValues = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const base = p.hueAngle;
    const shift = p.hueShift;

    return Array.from({ length: 21 }, (_, i) => {
      const t = i / 20;
      const h = (base + t * shift + 3600) % 360;
      return Number(h.toFixed(1));
    });
  });

  const lMaxLimits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const cVals = cValues.value;
    const hVals = hValues.value;
    const isP3 = p.gamut === 'p3';
    const maxChroma = isP3 ? 0.37 : 0.26;

    return cVals.map((cNorm, i) => {
      const realC = cNorm * maxChroma;
      const { maxL } = getLightnessGamutLimits(realC, hVals[i], false);
      return clamp(maxL, 0, 1);
    });
  });

  const lMinLimits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const cVals = cValues.value;
    const hVals = hValues.value;
    const isP3 = p.gamut === 'p3';
    const maxChroma = isP3 ? 0.37 : 0.26;

    return cVals.map((cNorm, i) => {
      const realC = cNorm * maxChroma;
      const { minL } = getLightnessGamutLimits(realC, hVals[i], false);
      return clamp(minL, 0, 1);
    });
  });

  const cLimits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const lVals = lValues.value;
    const hVals = hValues.value;
    const isP3 = p.gamut === 'p3';
    const maxChroma = isP3 ? 0.37 : 0.26;

    return lVals.map((l, i) => {
      const maxSafeC = getMaxChromaForOklch(l, hVals[i], false);
      return clamp(maxSafeC / maxChroma, 0, 1);
    });
  });

  const lMaxP3Limits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    if (p.gamut !== 'p3') return undefined;
    const cVals = cValues.value;
    const hVals = hValues.value;

    return cVals.map((cNorm, i) => {
      const realC = cNorm * 0.37;
      const { maxL } = getLightnessGamutLimits(realC, hVals[i], true);
      return clamp(maxL, 0, 1);
    });
  });

  const lMinP3Limits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    if (p.gamut !== 'p3') return undefined;
    const cVals = cValues.value;
    const hVals = hValues.value;

    return cVals.map((cNorm, i) => {
      const realC = cNorm * 0.37;
      const { minL } = getLightnessGamutLimits(realC, hVals[i], true);
      return clamp(minL, 0, 1);
    });
  });

  const cP3Limits = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    if (p.gamut !== 'p3') return undefined;
    const lVals = lValues.value;
    const hVals = hValues.value;

    return lVals.map((l, i) => {
      const maxSafeC = getMaxChromaForOklch(l, hVals[i], true);
      return clamp(maxSafeC / 0.37, 0, 1);
    });
  });

  const palette = useComputed$(() => {
    const p = colorPalettes[selectedColor.value] || colorPalettes['shade'];
    const steps = ALL_SHADE_STEPS;
    const isDark = theme.value === 'dark';
    const s = 0.1 + 0.8 * p.chromaShift;
    const w = Math.pow(3, 2 * (p.chromaSpread - 0.5));
    const a = (s / (1 - s)) * w;
    const b = w;
    const den = Math.pow(s, a) * Math.pow(1 - s, b);
    const maxChroma = p.gamut === 'p3' ? 0.37 : 0.26;

    return steps.map((step) => {
      const rawT = step / 1000;
      const t = 0.025 + 0.95 * rawT;
      const baseL = getOnwoLightnessForStep(
        step,
        p.lightnessHighlights,
        p.lightnessMidpoint,
        p.lightnessShadows,
        p.shade0Lightness,
        p.shade1000Lightness
      );
      const L = isDark ? 1.0 - baseL : baseL;

      let C = 0;
      if (p.chromaAmount > 0 && den !== 0) {
        const num = Math.pow(t, a) * Math.pow(1 - t, b);
        if (isFinite(num) && isFinite(den)) {
          const rawC = clamp(p.chromaAmount * (num / den), 0, 1);
          C = applyCubicChromaCurve(rawC) * maxChroma;
        }
      }

      const H = (p.hueAngle + rawT * p.hueShift + 3600) % 360;
      return `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H.toFixed(1)})`;
    });
  });

  const shadeVars = useComputed$(() => {
    let allVars: Record<string, string> = {};
    const colorKeys = Object.keys(colorPalettes);

    for (const key of colorKeys) {
      const p = colorPalettes[key];
      if (p) {
        const vars = computeColorVarsForPalette(key, p, theme.value, rounding.value);
        allVars = { ...allVars, ...vars };
      }
    }

    return allVars;
  });

  const topLightnessLabel = useComputed$(() =>
    theme.value === 'dark' ? 'Shadows' : 'Highlights'
  );
  const bottomLightnessLabel = useComputed$(() =>
    theme.value === 'dark' ? 'Highlights' : 'Shadows'
  );

  const selectedColorLabel = useComputed$(() => {
    const col = colorList.value.find((c) => c.id === selectedColor.value);
    return col ? col.label : 'Shade';
  });

  const titleDetails = useComputed$(() => {
    const parts = name.value.trim().split(/\s+/);
    if (parts.length > 1) {
      return {
        mainName: parts.slice(0, -1).join(' '),
        badge: parts[parts.length - 1],
      };
    }
    return { mainName: name.value, badge: theme.value };
  });

  const handleCopyCss = $(async () => {
    const lines = Object.entries(shadeVars.value).map(
      ([key, val]) => `  ${key}: ${val};`
    );
    const cssText = `:root {\n${lines.join('\n')}\n}`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cssText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = cssText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy CSS:', err);
    }
  });

  const handleApplyTheme = $(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    Object.entries(shadeVars.value).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
  });

  // Provide Theme Context State
  useThemeContext.useProvider({
    name,
    theme,
    iconSet,
    rounding,
    isCopied,
    customThemes,
    activeMainTab,
    selectedColor,
    selectedColorLabel,
    colorList,
    colorPalettes,
    activePalette,
    isThemeOpen,
    isColorOpen,
    isColorGroupHovered,
    isSliding,
    activeTab,
    lValues,
    cValues,
    lMaxLimits,
    lMinLimits,
    cLimits,
    fontSans: useSignal('instrument-sans'),
    lMaxP3Limits,
    lMinP3Limits,
    cP3Limits,
    palette,
    shadeVars,
    topLightnessLabel,
    bottomLightnessLabel,
    isDefaultTheme,
    onThemeRadioChange$: handleThemeRadioChange,
    onGamutChange$: handleGamutChange,
    onSlideStart$: handleSlideStart,
    onSidebarThemeSelect$: handleSidebarThemeSelect,
    onCreateCustom$: handleCreateCustom,
    onSelectColor$: handleSelectColor,
    onCreateCustomColor$: handleCreateCustomColor,
  });

  return (
    <div class="flex h-screen w-full font-sans text-xs overflow-hidden">
      {/* 1. Left Sidebar Navigation (256px) */}
      <aside class="flex w-64 shrink-0 flex-col border-r border-solid border-[var(--color-shade-900)]/6 p-2 overflow-y-auto">
        <ThemeSidebar />
      </aside>

      {/* 2. Main View Area */}
      <main class="flex flex-1 flex-col min-w-0 overflow-y-auto">
        {/* Two-Row Aligned Header Navigation Bar */}
        <header class="flex flex-col border-b border-solid border-[var(--color-shade-900)]/6 shrink-0">
          {/* Row 1: Theme Title Path & Utility Actions */}
          <div class="flex h-12 items-center justify-between border-b border-solid border-[var(--color-shade-900)]/6 px-6 gap-2">
            <div class="flex items-center min-w-0 gap-2.5">
              <span class="font-sans text-[18px] font-medium leading-[120%] text-[var(--color-shade-950)] truncate">
                {titleDetails.value.mainName}
              </span>
              <span class="rounded-full px-2.5 py-0.5 bg-[var(--color-shade-150)] font-sans text-[12px] font-medium text-[var(--color-shade-700)]">
                {titleDetails.value.badge}
              </span>
            </div>

            {/* Utility Action Buttons */}
            <div class="flex items-center gap-2 shrink-0">
              {/* Duplicate theme button */}
              <ButtonPrimitive
                as="button"
                type="button"
                onClick$={handleDuplicateTheme}
                class="flex h-7 items-center justify-center gap-1.5 rounded-full px-3 font-sans text-[13px] text-[var(--color-shade-800)] hover:bg-[var(--color-shade-900)]/4 transition-colors cursor-pointer border-none bg-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" class="shrink-0">
                  <rect width="9.333" height="9.333" x="5.333" y="5.333" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.667 10.667c-0.733 0-1.333-0.6-1.334-1.334V2.667c0-0.733 0.6-1.333 1.334-1.334h6.666c0.733 0 1.333 0.6 1.334 1.334" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Duplicate</span>
              </ButtonPrimitive>

              {/* Copy CSS button */}
              <ButtonPrimitive
                as="button"
                type="button"
                onClick$={handleCopyCss}
                class="flex h-7 items-center justify-center gap-1.5 rounded-full bg-[var(--color-shade-150)] px-3 font-sans text-[13px] text-[var(--color-shade-900)] hover:bg-[var(--color-shade-200)] transition-colors cursor-pointer border-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" class="shrink-0">
                  <rect width="5.333" height="2.667" x="5.333" y="1.333" rx="1" ry="1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.667 2.667h1.333a1.333 1.333 90 0 1 1.333 1.333v9.333a1.333 1.333 90 0 1-1.333 1.334H4a1.333 1.333 90 0 1-1.333-1.334V4a1.333 1.333 90 0 1 1.333-1.333h1.333" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{isCopied.value ? 'Copied!' : 'Copy CSS'}</span>
              </ButtonPrimitive>

              {/* Apply theme button */}
              <ButtonPrimitive
                as="button"
                type="button"
                onClick$={handleApplyTheme}
                class="flex h-7 items-center justify-center gap-1.5 rounded-full bg-[var(--color-shade-900)] px-3 font-sans text-[13px] text-[var(--color-shade-0)] hover:bg-[var(--color-shade-950)] active:scale-[0.98] transition-all cursor-pointer border-none"
              >
                <span>Apply theme</span>
              </ButtonPrimitive>
            </div>
          </div>

          {/* Row 2: Tabs Navigation */}
          <div class="flex h-10 items-center px-6 gap-1">
            {[
              { id: 'preview', label: 'Preview' },
              { id: 'colors', label: 'Colors' },
              { id: 'typography', label: 'Typography' },
              { id: 'accessibility', label: 'Accessibility' },
            ].map((tab) => {
              const isActive = activeMainTab.value === tab.id;
              return (
                <ButtonPrimitive
                  as="button"
                  key={tab.id}
                  type="button"
                  onClick$={() => (activeMainTab.value = tab.id as any)}
                  class={[
                    'flex h-7 items-center justify-center rounded-full px-3 font-sans text-[13.5px] font-medium transition-colors cursor-pointer border-none bg-transparent relative',
                    isActive
                      ? 'bg-[var(--color-shade-900)]/6 text-[var(--color-shade-950)] font-semibold'
                      : 'text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4',
                  ]}
                >
                  <span>{tab.label}</span>
                </ButtonPrimitive>
              );
            })}
          </div>
        </header>

        {/* Tab Display Area */}
        <div class="flex flex-1 flex-col overflow-y-auto p-6 min-w-0 w-full">
          {activeMainTab.value === 'colors' && <ColorsTab shadeVars={shadeVars.value} />}
          {activeMainTab.value === 'preview' && <PreviewTab shadeVars={shadeVars.value} />}
          {activeMainTab.value === 'typography' && <TypographyTab shadeVars={shadeVars.value} />}
          {activeMainTab.value === 'accessibility' && <AccessibilityTab shadeVars={shadeVars.value} />}
        </div>
      </main>

      {/* 3. Right Inspector Controls Panel (384px) - Visually Omitted for Default Themes */}
      {!isDefaultTheme && (
        <aside class="flex w-[384px] shrink-0 flex-col border-l border-solid border-[var(--color-shade-900)]/6 p-3 overflow-y-auto">
          <ThemeControlsSidebar />
        </aside>
      )}
    </div>
  );
});
