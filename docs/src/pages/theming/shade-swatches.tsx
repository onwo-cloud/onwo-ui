import { component$, useSignal, $, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { useThemeContext } from './theme-context';

export interface ShadeSwatchesProps {
  hues?: string[];
  steps?: number[];
  shadeVars?: Record<string, Record<string, string>>;
  onReorder$?: QRL<(draggedIndex: number, targetIndex: number) => void>;
}

export const ALL_SHADE_STEPS = [
  0, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700,
  750, 800, 850, 900, 950, 975, 1000,
];

export const ALL_HUES = [
  'gray',
  'red',
  'amber',
  'green',
  'emerald',
  'blue',
  'indigo',
  'purple',
  'rose',
];

const HUE_CONFIGS: Record<string, { hueAngle: number; peakChroma: number }> = {
  gray: { hueAngle: 250, peakChroma: 0.015 },
  red: { hueAngle: 25, peakChroma: 0.22 },
  amber: { hueAngle: 75, peakChroma: 0.19 },
  green: { hueAngle: 145, peakChroma: 0.20 },
  emerald: { hueAngle: 160, peakChroma: 0.19 },
  blue: { hueAngle: 245, peakChroma: 0.20 },
  indigo: { hueAngle: 270, peakChroma: 0.21 },
  purple: { hueAngle: 300, peakChroma: 0.22 },
  rose: { hueAngle: 15, peakChroma: 0.22 },
};

function getTailwindOklch(hue: string, step: number): string {
  const config = HUE_CONFIGS[hue] || { hueAngle: 250, peakChroma: 0.18 };
  const normStep = step / 1000;
  const lightness = (1 - normStep) * 100;
  let chroma = 0;
  if (step > 0 && step < 1000) {
    chroma = config.peakChroma * Math.sin(normStep * Math.PI);
  }
  return `oklch(${lightness.toFixed(1)}% ${chroma.toFixed(3)} ${config.hueAngle})`;
}

function getIsLight(colorVal: string, step: number): boolean {
  const match = colorVal.match(/oklch\(\s*([\d.]+)(%?)/i);
  if (match && match[1]) {
    const val = parseFloat(match[1]);
    return match[2] === '%' ? val > 55 : val > 0.55;
  }
  return step <= 500;
}

/** WCAG Relative Luminance & Contrast Calculator */
function parseOklch(colorVal: string): { l: number; c: number; h: number } | null {
  const match = colorVal.match(/oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)\s*\)/i);
  if (!match) return null;
  let l = parseFloat(match[1]);
  if (match[2] === '%') l /= 100;
  return { l, c: parseFloat(match[3]), h: parseFloat(match[4]) };
}

function getLuminanceFromOklch(l: number, c: number, h: number): number {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 0.1291980554 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bl = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;

  const rC = Math.max(0, Math.min(1, r));
  const gC = Math.max(0, Math.min(1, g));
  const bC = Math.max(0, Math.min(1, bl));

  return 0.2126 * rC + 0.7152 * gC + 0.0722 * bC;
}

function getLuminance(colorVal: string): number {
  const parsed = parseOklch(colorVal);
  if (parsed) {
    return getLuminanceFromOklch(parsed.l, parsed.c, parsed.h);
  }
  const match = colorVal.match(/oklch\(\s*([\d.]+)(%?)/i);
  if (match && match[1]) {
    let l = parseFloat(match[1]);
    if (match[2] === '%') l /= 100;
    return Math.pow(l, 3);
  }
  return 0.5;
}

function getContrastRatio(colorVal1: string, colorVal2: string): number {
  const y1 = getLuminance(colorVal1);
  const y2 = getLuminance(colorVal2);
  const maxY = Math.max(y1, y2);
  const minY = Math.min(y1, y2);
  return (maxY + 0.05) / (minY + 0.05);
}

export const ShadeSwatches = component$<ShadeSwatchesProps>(
  ({ hues: huesProp, steps = ALL_SHADE_STEPS, shadeVars = {}, onReorder$ }) => {
    const copiedKey = useSignal<string | null>(null);
    const localSelectedHue = useSignal<string | null>(null);

    const draggedIndex = useSignal<number | null>(null);
    const dragOverIndex = useSignal<number | null>(null);

    let ctx: ReturnType<typeof useThemeContext.use> | null = null;
    try {
      ctx = useThemeContext.use();
    } catch {
      ctx = null;
    }

    const availableHues = Object.keys(shadeVars);
    const hues = huesProp ?? (availableHues.length > 0 ? availableHues : ALL_HUES);

    const handleCopyColor = $(async (key: string, colorVal: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(colorVal);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = colorVal;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        copiedKey.value = key;
        setTimeout(() => {
          copiedKey.value = null;
        }, 1500);
      } catch (err) {
        console.error('Failed to copy color:', err);
      }
    });

    const handleSelectHue = $((hue: string) => {
      if (ctx?.onSelectColor$) {
        ctx.onSelectColor$(hue);
      } else {
        localSelectedHue.value = localSelectedHue.value === hue ? null : hue;
      }
    });

    const handleDragStart = $((index: number) => {
      draggedIndex.value = index;
    });

    const handleDragOver = $((e: QwikDragEvent, index: number) => {
      e.preventDefault();
      dragOverIndex.value = index;
    });

    const handleDrop = $((targetIndex: number) => {
      if (draggedIndex.value !== null && draggedIndex.value !== targetIndex) {
        if (onReorder$) {
          onReorder$(draggedIndex.value, targetIndex);
        }
      }
      draggedIndex.value = null;
      dragOverIndex.value = null;
    });

    const activeSelectedColor = ctx ? ctx.selectedColor.value : localSelectedHue.value;

    return (
      <div class="flex flex-col items-start gap-3 self-stretch w-full">
        {/* WCAG Contrast Legend Header */}
        <div class="flex flex-wrap items-center justify-between w-full text-[11px] font-mono text-ink-secondary bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3.5 py-2 gap-3 mt-4">
          <div class="flex items-center gap-4">
            <span class="font-semibold text-ink-primary flex items-center gap-1.5">
              <svg
                class="w-3.5 h-3.5 opacity-70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              WCAG Thresholds:
            </span>
            <div class="flex items-center gap-1.5">
              <div class="w-[2px] h-3 bg-neutral-900 dark:bg-white rounded-full" />
              <span class="font-bold text-ink-primary">AAA Bar</span>
              <span class="text-ink-tertiary">(≥ 7.0:1)</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-[2px] h-3 bg-neutral-900 dark:bg-white/70 rounded-full" />
              <span class="font-bold text-ink-primary">AA Bar</span>
              <span class="text-ink-tertiary">(≥ 4.5:1)</span>
            </div>
          </div>

          <div class="flex items-center gap-2 text-[10px] text-ink-tertiary">
            <span>
              Light steps (0–500) vs{' '}
              <code class="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold">
                shade-1000
              </code>
            </span>
            <span>•</span>
            <span>
              Dark steps (550–1000) vs{' '}
              <code class="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold">
                shade-0
              </code>
            </span>
          </div>
        </div>

        <div class="w-full overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div class="w-full min-w-[680px] select-none flex flex-col gap-2.5">
            {/* Step Headers */}
            <div class="flex items-center w-full">
              <div class="w-24 shrink-0 text-xs font-mono font-medium text-ink-tertiary uppercase tracking-wider pl-7">
                Hue
              </div>
              <div class="flex items-center flex-1 w-full">
                {steps.map((step) => (
                  <div
                    key={`head-${step}`}
                    class="flex-1 min-w-0 text-center font-mono text-[10px] text-ink-tertiary/70 font-medium tracking-tight"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Color Rows */}
            <div class="flex flex-col w-full gap-2">
              {hues.map((hue, index) => {
                const isSelected =
                  activeSelectedColor !== null &&
                  (activeSelectedColor === hue ||
                    activeSelectedColor.toLowerCase() === hue.toLowerCase());

                const isDragging = draggedIndex.value === index;
                const isDragOver = dragOverIndex.value === index;

                // Reference shade-0 (default background) and shade-1000 (default foreground)
                const step0Var1 = `--color-${hue}-0`;
                const step0Var2 = `--color-${hue.replace(/s$/, '')}-0`;
                const shade0Val =
                  shadeVars[hue]?.[step0Var1] ||
                  shadeVars[hue]?.[step0Var2] ||
                  getTailwindOklch(hue, 0);

                const step1000Var1 = `--color-${hue}-1000`;
                const step1000Var2 = `--color-${hue.replace(/s$/, '')}-1000`;
                const shade1000Val =
                  shadeVars[hue]?.[step1000Var1] ||
                  shadeVars[hue]?.[step1000Var2] ||
                  getTailwindOklch(hue, 1000);

                // Compute contrast compliance levels across all steps
                const stepLevels = steps.map((step) => {
                  const varName1 = `--color-${hue}-${step}`;
                  const varName2 = `--color-${hue.replace(/s$/, '')}-${step}`;

                  const colorVal =
                    shadeVars[hue]?.[varName1] ||
                    shadeVars[hue]?.[varName2] ||
                    getTailwindOklch(hue, step);

                  const isLight = getIsLight(colorVal, step);
                  const targetColor = isLight ? shade1000Val : shade0Val;
                  const ratio = getContrastRatio(colorVal, targetColor);

                  const level =
                    ratio >= 7.0 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'Fail';

                  return { step, colorVal, isLight, ratio, level };
                });

                return (
                  <div
                    key={hue}
                    draggable={true}
                    onDragStart$={() => handleDragStart(index)}
                    onDragOver$={(e) => handleDragOver(e, index)}
                    onDrop$={() => handleDrop(index)}
                    onDragEnd$={() => {
                      draggedIndex.value = null;
                      dragOverIndex.value = null;
                    }}
                    class={[
                      'flex items-center w-full transition-all duration-150 ease-out rounded-lg',
                      isDragging ? 'opacity-30 scale-[0.98]' : '',
                      isDragOver ? 'ring-2 ring-blue-500/50 bg-blue-500/5' : '',
                    ]}
                  >
                    {/* Drag Handle & Row Label */}
                    <div class="w-24 shrink-0 flex items-center gap-1.5 py-1.5 pr-2">
                      <div
                        title="Drag to reorder"
                        class="cursor-grab active:cursor-grabbing p-1 text-ink-tertiary/50 hover:text-ink-primary transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="9" cy="5" r="1" />
                          <circle cx="9" cy="12" r="1" />
                          <circle cx="9" cy="19" r="1" />
                          <circle cx="15" cy="5" r="1" />
                          <circle cx="15" cy="12" r="1" />
                          <circle cx="15" cy="19" r="1" />
                        </svg>
                      </div>

                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick$={() => handleSelectHue(hue)}
                        class={[
                          'text-left text-xs font-medium font-mono capitalize cursor-pointer transition-colors duration-150 flex items-center justify-between flex-1 truncate',
                          isSelected
                            ? 'text-ink-primary font-semibold'
                            : 'text-ink-secondary hover:text-ink-primary',
                        ]}
                      >
                        <span class="truncate">{hue}</span>
                        {isSelected && (
                          <span class="w-1.5 h-1.5 rounded-full bg-ink-primary shrink-0 mr-1" />
                        )}
                      </button>
                    </div>

                    {/* Elevated Swatch Strip Capsule */}
                    <div
                      class={[
                        'flex flex-1 w-full rounded-lg border border-black/10 dark:border-white/10 shadow-xs transition-all duration-150 relative',
                        isSelected
                          ? 'ring-2 ring-black dark:ring-white z-10 shadow-md'
                          : '',
                      ]}
                    >
                      {stepLevels.map((item, stepIndex) => {
                        const { step, colorVal, isLight, ratio, level } = item;
                        const key = `${hue}-${step}`;
                        const isCopied = copiedKey.value === key;

                        // Check if a WCAG transition delimiter line belongs on the right edge of this swatch
                        let delimiterRight: 'AAA' | 'AA' | null = null;
                        if (stepIndex < stepLevels.length - 1) {
                          const nextLevel = stepLevels[stepIndex + 1].level;
                          if (level === 'AAA' && nextLevel !== 'AAA') {
                            delimiterRight = 'AAA';
                          } else if (level === 'AA' && nextLevel === 'Fail') {
                            delimiterRight = 'AA';
                          } else if (level === 'Fail' && nextLevel === 'AA') {
                            delimiterRight = 'AA';
                          } else if (level === 'AA' && nextLevel === 'AAA') {
                            delimiterRight = 'AAA';
                          }
                        }

                        const isFirstStep = stepIndex === 0;
                        const isLastStep = stepIndex === stepLevels.length - 1;

                        const cornerClasses = [
                          isFirstStep ? 'rounded-l-lg' : '',
                          isLastStep ? 'rounded-r-lg' : '',
                        ].join(' ');

                        return (
                          <ButtonPrimitive
                            key={key}
                            as="div"
                            onClick$={() => handleCopyColor(key, colorVal)}
                            style={{ backgroundColor: colorVal }}
                            class={[
                              'relative flex-1 min-w-0 h-9 flex items-center justify-center cursor-pointer group transition-all duration-150 ease-out',
                              cornerClasses,
                              'hover:z-30 hover:scale-110 hover:rounded-md hover:shadow-xl hover:ring-2 hover:ring-black dark:hover:ring-white',
                              'active:scale-95',
                            ]}
                          >
                            {/* Copy Feedback Icons */}
                            <span
                              class="relative z-10 flex items-center justify-center w-3.5 h-3.5 pointer-events-none"
                              style={{ color: isLight ? '#000000' : '#FFFFFF' }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class={[
                                  'absolute inset-0 m-auto transition-all duration-100 ease-out',
                                  isCopied
                                    ? 'opacity-0 translate-y-1 scale-90'
                                    : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0',
                                ]}
                              >
                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                              </svg>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class={[
                                  'absolute inset-0 m-auto transition-all duration-150 ease-out',
                                  isCopied
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 -translate-y-1 scale-75',
                                ]}
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>

                            {/* WCAG Boundary Bar Delimiter */}
                            {delimiterRight && (
                              <div class="absolute right-0 top-0 bottom-0 z-20 pointer-events-none flex flex-col items-center justify-center translate-x-1/2">
                                <div class="w-[2px] h-full bg-neutral-900 dark:bg-white shadow-xs opacity-80" />
                                <div class="absolute -top-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[8px] font-mono font-extrabold px-1 rounded shadow-md border border-white/20 dark:border-black/20 leading-tight">
                                  {delimiterRight}
                                </div>
                              </div>
                            )}

                            {/* Refined Floating Tooltip */}
                            <div class="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom">
                              <div class="flex flex-col items-center">
                                <div class="flex items-center gap-2 text-[11px] font-mono text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white px-2.5 py-1 rounded-md shadow-2xl border border-white/10 dark:border-black/10 whitespace-nowrap">
                                  <span class="font-semibold">{hue}-{step}</span>
                                  <span class="opacity-30">|</span>
                                  <span class="font-normal opacity-90">{colorVal}</span>
                                  <span class="opacity-30">|</span>
                                  <span class="font-bold opacity-100 text-[10px]">
                                    {ratio.toFixed(1)}:1 ({level})
                                  </span>
                                </div>
                                <div class="w-2 h-2 bg-neutral-900 dark:bg-white rotate-45 -mt-1 shadow-xs" />
                              </div>
                            </div>
                          </ButtonPrimitive>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
