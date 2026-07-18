import { ALL_SHADE_STEPS } from './shade-swatches';

export const DEFAULT_THEME_NAMES = ['Onwo light', 'Onwo dark'];

export const clamp = (val: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, val));

/**
 * Cubic curve transformation for chroma calculation:
 * 0 -> 0, 0.05 -> 0.02, 0.5 -> 0.5, 0.95 -> 0.98, 1 -> 1
 */
export function applyCubicChromaCurve(val: number): number {
  const x = clamp(val, 0, 1);
  const u = x - 0.5;
  const a = -40 / 29;
  const b = 39 / 29;
  return clamp(a * u * u * u + b * u + 0.5, 0, 1);
}

export function getRoundingMultiplier(rounding: string): number {
  switch (rounding) {
    case 'none':
      return 0;
    case 'sm':
      return 0.75;
    case 'md':
      return 1;
    case 'lg':
      return 1.25;
    case 'xl':
      return 1.5;
    default:
      return 1;
  }
}

export function getOnwoLightnessForStep(
  step: number,
  highlights: number,
  midpoint: number,
  shadows: number,
  shade0Lightness = 1.0,
  shade1000Lightness = 0.0
): number {
  const normX = 1 - step / 1000;
  const range = shade0Lightness - shade1000Lightness;
  const baseL = shade1000Lightness + normX * range;

  if (highlights === 0.5 && midpoint === 0.5 && shadows === 0.5) {
    return clamp(baseL, 0, 1);
  }

  const x = normX;

  // Normalized Bernstein basis functions (each peaks smoothly at 1.0)
  const f_S = 6.75 * x * (1 - x) * (1 - x); // Peaks at x = 1/3 (shadows)
  const f_M = 4.0 * x * (1 - x);             // Peaks at x = 1/2 (midtones)
  const f_H = 6.75 * x * x * (1 - x);         // Peaks at x = 2/3 (highlights)

  // Expanded scale factors allow natural 70-75% midtone shifts without maxing out
  const dS = (shadows - 0.5) * 0.38;
  const dM = (midpoint - 0.5) * 0.50;
  const dH = (highlights - 0.5) * 0.38;

  const delta = (dS * f_S + dM * f_M + dH * f_H) * range;

  return clamp(baseL + delta, 0, 1);
}

export function isOklchInGamut(L: number, C: number, H: number, isP3 = false): boolean {
  if (L <= 0.0001 || L >= 0.9999) return true;

  const rad = (H * Math.PI) / 180;
  const a = C * Math.cos(rad);
  const b = C * Math.sin(rad);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  let r: number, g: number, b_rgb: number;

  if (isP3) {
    r = +3.1282218 * l - 2.2571216 * m + 0.1289000 * s;
    g = -1.0912239 * l + 2.4132711 * m - 0.3220472 * s;
    b_rgb = -0.0365736 * l - 0.4791834 * m + 1.5157570 * s;
  } else {
    r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    b_rgb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
  }

  const eps = 0.00001;
  return (
    r >= -eps &&
    r <= 1 + eps &&
    g >= -eps &&
    g <= 1 + eps &&
    b_rgb >= -eps &&
    b_rgb <= 1 + eps
  );
}

export function getMaxChromaForOklch(L: number, H: number, isP3 = false): number {
  if (L <= 0.001 || L >= 0.999) return 0;

  let min = 0;
  let max = 0.4;

  for (let i = 0; i < 12; i++) {
    const mid = (min + max) / 2;
    if (isOklchInGamut(L, mid, H, isP3)) {
      min = mid;
    } else {
      max = mid;
    }
  }

  return min;
}

export function getPeakLightnessForHue(H: number, isP3 = false): number {
  let bestL = 0.6;
  let maxC = -1;
  for (let i = 2; i <= 8; i++) {
    const testL = i / 10;
    const c = getMaxChromaForOklch(testL, H, isP3);
    if (c > maxC) {
      maxC = c;
      bestL = testL;
    }
  }
  return bestL;
}

export function getLightnessGamutLimits(C: number, H: number, isP3 = false): { minL: number; maxL: number } {
  if (C <= 0.001) {
    return { minL: 0, maxL: 1 };
  }

  const peakL = getPeakLightnessForHue(H, isP3);

  if (!isOklchInGamut(peakL, C, H, isP3)) {
    return { minL: peakL, maxL: peakL };
  }

  let low = 0, high = peakL;
  for (let i = 0; i < 12; i++) {
    const mid = (low + high) / 2;
    if (isOklchInGamut(mid, C, H, isP3)) {
      high = mid;
    } else {
      low = mid;
    }
  }
  const minL = high;

  low = peakL; high = 1.0;
  for (let i = 0; i < 12; i++) {
    const mid = (low + high) / 2;
    if (isOklchInGamut(mid, C, H, isP3)) {
      low = mid;
    } else {
      high = mid;
    }
  }
  const maxL = low;

  return { minL: Math.max(0, minL), maxL: Math.min(1, maxL) };
}

export function computeShadeVars(
  theme: 'light' | 'dark',
  rounding: string,
  chromaShift: number,
  chromaSpread: number,
  gamut: 'srgb' | 'p3',
  lightnessHighlights: number,
  lightnessMidpoint: number,
  lightnessShadows: number,
  chromaAmount: number,
  hueAngle: number,
  hueShift: number,
  shade0Lightness = 1.0,
  shade1000Lightness = 0.0
): Record<string, string> {
  const isDark = theme === 'dark';
  const roundingMul = getRoundingMultiplier(rounding);

  const s = 0.1 + 0.8 * chromaShift;
  const w = Math.pow(3, 2 * (chromaSpread - 0.5));
  const a = (s / (1 - s)) * w;
  const b = w;
  const den = Math.pow(s, a) * Math.pow(1 - s, b);

  const maxChroma = gamut === 'p3' ? 0.37 : 0.26;

  const result: Record<string, string> = {
    '--theme': theme,
    '--theme-rounding-mul': `${roundingMul}`,
    '--radius-xs': `calc(var(--theme-rounding-mul) * 0.125rem)`,
    '--radius-sm': `calc(var(--theme-rounding-mul) * 0.25rem)`,
    '--radius-md': `calc(var(--theme-rounding-mul) * 0.375rem)`,
    '--radius-lg': `calc(var(--theme-rounding-mul) * 0.5rem)`,
    '--radius-xl': `calc(var(--theme-rounding-mul) * 0.75rem)`,
    '--radius-2xl': `calc(var(--theme-rounding-mul) * 1rem)`,
    '--radius-3xl': `calc(var(--theme-rounding-mul) * 1.5rem)`,
    '--radius-4xl': `calc(var(--theme-rounding-mul) * 2rem)`,
    '--color-current-color': 'currentColor',
  };

  ALL_SHADE_STEPS.forEach((step) => {
    const rawT = step / 1000;
    const t = 0.025 + 0.95 * rawT;
    const baseL = getOnwoLightnessForStep(
      step,
      lightnessHighlights,
      lightnessMidpoint,
      lightnessShadows,
      shade0Lightness,
      shade1000Lightness
    );

    const L = isDark ? 1.0 - baseL : baseL;

    let C = 0;
    if (chromaAmount > 0 && den !== 0) {
      const num = Math.pow(t, a) * Math.pow(1 - t, b);
      if (isFinite(num) && isFinite(den)) {
        const rawC = clamp(chromaAmount * (num / den), 0, 1);
        C = applyCubicChromaCurve(rawC) * maxChroma;
      }
    }

    const H = (hueAngle + rawT * hueShift + 3600) % 360;
    const lPct = (L * 100).toFixed(1);

    result[`--color-shade-${step}`] = `oklch(${lPct}% ${C.toFixed(3)} ${H.toFixed(1)})`;
  });

  return result;
}
