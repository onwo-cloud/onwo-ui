import { initContext } from '~primitives/utils/context-utils';
import type { Signal, ReadonlySignal, QRL } from '@qwik.dev/core';

export interface ColorPaletteState {
  shade0Lightness: number;
  lightnessHighlights: number;
  lightnessMidpoint: number;
  lightnessShadows: number;
  shade1000Lightness: number;
  chromaAmount: number;
  chromaShift: number;
  chromaSpread: number;
  hueAngle: number;
  hueShift: number;
  gamut: 'srgb' | 'p3';
}

export interface ColorItem {
  id: string;
  label: string;
  bgClass: string;
  hue?: number;
}

export interface ThemeContext {
  name: Signal<string>;
  theme: Signal<'light' | 'dark'>;
  fontSans: Signal<string>; // Added fontSans property
  iconSet: Signal<string>;
  rounding: Signal<'none' | 'sm' | 'md' | 'lg' | 'xl'>;
  isCopied: Signal<boolean>;
  customThemes: Signal<string[]>;
  activeMainTab: Signal<'colors' | 'preview' | 'typography' | 'accessibility'>;

  selectedColor: Signal<string>;
  selectedColorLabel: Readonly<Signal<string>>;
  colorList: Signal<ColorItem[]>;
  colorPalettes: Record<string, ColorPaletteState>;
  activePalette: Readonly<Signal<ColorPaletteState>>;

  isThemeOpen: Signal<boolean>;
  isColorOpen: Signal<boolean>;
  isColorGroupHovered: Signal<boolean>;
  isSliding: Signal<boolean>;

  activeTab: Signal<'lightness' | 'chroma' | 'hue'>;

  lValues: Readonly<Signal<number[]>>;
  cValues: Readonly<Signal<number[]>>;
  lMaxLimits: Readonly<Signal<number[]>>;
  lMinLimits: Readonly<Signal<number[]>>;
  cLimits: Readonly<Signal<number[]>>;
  lMaxP3Limits: Readonly<Signal<number[] | undefined>>;
  lMinP3Limits: Readonly<Signal<number[] | undefined>>;
  cP3Limits: Readonly<Signal<number[] | undefined>>;
  palette: Readonly<Signal<string[]>>;
  shadeVars: Readonly<Signal<Record<string, string>>>;
  topLightnessLabel: Readonly<Signal<string>>;
  bottomLightnessLabel: Readonly<Signal<string>>;
  isDefaultTheme: boolean;

  onThemeRadioChange$: QRL<(val: string) => void>;
  onGamutChange$: QRL<(val: string) => void>;
  onSlideStart$: QRL<() => void>;
  onSidebarThemeSelect$: QRL<(themeName: string) => void>;
  onCreateCustom$: QRL<() => void>;
  onSelectColor$: QRL<(colorId: string) => void>;
  onCreateCustomColor$: QRL<() => void>;
}

export const useThemeContext = initContext<ThemeContext>('theme');
