import { component$, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { useThemeContext, type ColorItem } from './theme-context';

export interface ThemeSidebarProps {
  activeTheme?: string;
  customThemes?: string[];
  defaultThemes?: string[];
  activeColor?: string;
  onSelectTheme$?: QRL<(themeName: string) => void>;
  onCreateCustom$?: QRL<() => void>;
  onSelectColor$?: QRL<(colorId: string) => void>;
}

export const DEFAULT_COLORS: ColorItem[] = [
  { id: 'shade', label: 'Shade', bgClass: 'bg-[var(--color-shade-900)]', hue: 250 },
  { id: 'red', label: 'Red', bgClass: 'bg-[#EF4444]', hue: 20 },
  { id: 'orange', label: 'Orange', bgClass: 'bg-[#FB923C]', hue: 45 },
  { id: 'yellow', label: 'Yellow', bgClass: 'bg-[#EAB308]', hue: 90 },
  { id: 'lime', label: 'Lime', bgClass: 'bg-[#84CC16]', hue: 125 },
  { id: 'green', label: 'Green', bgClass: 'bg-[#22C55E]', hue: 150 },
  { id: 'teal', label: 'Teal', bgClass: 'bg-[#14B8A6]', hue: 175 },
  { id: 'cyan', label: 'Cyan', bgClass: 'bg-[#06B6D4]', hue: 195 },
  { id: 'blue', label: 'Blue', bgClass: 'bg-[#3B82F6]', hue: 250 },
  { id: 'purple', label: 'Purple', bgClass: 'bg-[#A855F7]', hue: 290 },
  { id: 'magenta', label: 'Magenta', bgClass: 'bg-[#D946EF]', hue: 320 },
  { id: 'pink', label: 'Pink', bgClass: 'bg-[#EC4899]', hue: 345 },
];

export const ThemeSidebar = component$<ThemeSidebarProps>((props) => {
  const themeCtx = useThemeContext.use();

  const activeTheme = props.activeTheme ?? themeCtx.name.value;
  const customThemes = props.customThemes ?? themeCtx.customThemes.value;
  const defaultThemes = props.defaultThemes ?? ['Onwo light', 'Onwo dark'];
  const onSelectTheme$ = props.onSelectTheme$ ?? themeCtx.onSidebarThemeSelect$;
  const onCreateCustom$ = props.onCreateCustom$ ?? themeCtx.onCreateCustom$;
  const onSelectColor$ = props.onSelectColor$ ?? themeCtx.onSelectColor$;
  const onCreateCustomColor$ = themeCtx.onCreateCustomColor$;

  const selectedColorId = props.activeColor ?? themeCtx.selectedColor.value;
  const colors = themeCtx.colorList.value;

  const formatThemeName = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length > 1) {
      return {
        mainName: parts.slice(0, -1).join(' '),
        suffix: parts[parts.length - 1],
      };
    }
    return { mainName: name, suffix: null };
  };

  const allThemes = [
    ...defaultThemes.map((t) => ({ name: t, isDefault: true })),
    ...customThemes.map((t) => ({ name: t, isDefault: false })),
  ];

  return (
    <div class="[font-synthesis:none] flex flex-col w-full gap-4 antialiased text-xs/4 select-none">
      {/* 1. Themes Section */}
      <div class="flex flex-col w-full gap-1">
        <div class="mb-1 px-2.5 flex items-center justify-between self-stretch">
          <span class="font-sans text-[12px] font-medium leading-[145%] text-[var(--color-shade-500)]">
            Themes
          </span>
          <button
            type="button"
            onClick$={onCreateCustom$}
            class="flex size-5 items-center justify-center rounded-md hover:bg-[var(--color-shade-900)]/6 text-[var(--color-shade-900)] transition-colors cursor-pointer border-none bg-transparent"
            title="Add Theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              class="shrink-0"
            >
              <path
                d="M3.333 8h9.334M8 3.333v9.334"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="flex flex-col w-full gap-0.5">
          {allThemes.map(({ name: themeName, isDefault }) => {
            const isActive = activeTheme === themeName;
            const { mainName, suffix } = formatThemeName(themeName);

            return (
              <ButtonPrimitive
                as="div"
                key={themeName}
                type="button"
                onClick$={() => onSelectTheme$?.(themeName)}
                class={[
                  'flex h-8 w-full items-center justify-between px-2.5 rounded-full shrink-0 transition-colors cursor-pointer text-left',
                  isActive
                    ? 'bg-[var(--color-shade-900)]/6 text-[var(--color-shade-950)] font-medium'
                    : 'text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4',
                ]}
              >
                <div class="flex items-center min-w-0 gap-2">
                  <span class="font-sans text-sm/5 line-clamp-1">
                    {mainName}
                  </span>
                </div>

                <div class="flex items-center gap-1.5 shrink-0 ml-2">
                  {suffix && (
                    <span class="font-sans text-xs text-[var(--color-shade-500)]">
                      {suffix}
                    </span>
                  )}

                  {isDefault ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-[var(--color-shade-400)] shrink-0"
                      title="Default Theme (Read-Only)"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ) : (
                    <span
                      class="size-1.5 rounded-full bg-[var(--color-shade-900)] shrink-0"
                      title="Custom Theme"
                    />
                  )}
                </div>
              </ButtonPrimitive>
            );
          })}
        </div>
      </div>

      {/* 2. Colors Section */}
      <div class="flex flex-col w-full pt-2 gap-1 border-t border-solid border-[var(--color-shade-900)]/6">
        <div class="mb-1 px-2.5 flex items-center justify-between self-stretch">
          <span class="font-sans text-[12px] font-medium leading-[145%] text-[var(--color-shade-500)]">
            Colors
          </span>
          <button
            type="button"
            onClick$={onCreateCustomColor$}
            class="flex size-5 items-center justify-center rounded-md hover:bg-[var(--color-shade-900)]/6 text-[var(--color-shade-900)] transition-colors cursor-pointer border-none bg-transparent"
            title="Add Color"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              class="shrink-0"
            >
              <path
                d="M3.333 8h9.334M8 3.333v9.334"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="flex flex-col w-full gap-0.5">
          {colors.map((color) => {
            const isSelected = selectedColorId === color.id;
            return (
              <ButtonPrimitive
                as="div"
                key={color.id}
                type="button"
                onClick$={() => {
                  onSelectColor$?.(color.id);
                }}
                class={[
                  'flex h-8 w-full items-center justify-between px-2.5 rounded-full shrink-0 transition-colors cursor-pointer text-left',
                  isSelected
                    ? 'bg-[var(--color-shade-900)]/6 text-[var(--color-shade-950)] font-medium'
                    : 'text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4',
                ]}
              >
                <div class="flex items-center gap-2.5">
                  <span class={`size-2 rounded-full shrink-0 ${color.bgClass}`} />
                  <span class="font-sans text-sm/5">{color.label}</span>
                </div>
              </ButtonPrimitive>
            );
          })}
        </div>
      </div>
    </div>
  );
});
