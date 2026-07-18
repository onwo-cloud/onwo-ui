import { component$ } from '@qwik.dev/core';
import { useThemeContext } from './theme-context';
import { DialInput, DialRadio, DialSelect, DialGroup, DialTabs, DialTabItem } from '~/commons/dials';
import { CurveArea } from './curve-area';
import { Slider } from './slider';

export const FONT_OPTIONS = [
  { value: 'instrument-sans', label: 'Instrument Sans' },
  { value: 'afacad', label: 'Afacad' },
  { value: 'aspekta', label: 'Aspekta' },
  { value: 'bricolage-grotesque', label: 'Bricolage Grotesque' },
  { value: 'dm-sans', label: 'DM Sans' },
  { value: 'figtree', label: 'Figtree' },
  { value: 'fraunces', label: 'Fraunces' },
  { value: 'funnel-sans', label: 'Funnel Sans' },
  { value: 'geist', label: 'Geist' },
  { value: 'hanken-grotesk', label: 'Hanken Grotesk' },
  { value: 'inclusive-sans', label: 'Inclusive Sans' },
  { value: 'inter', label: 'Inter' },
  { value: 'lora', label: 'Lora' },
  { value: 'manrope', label: 'Manrope' },
  { value: 'mona-sans', label: 'Mona Sans' },
  { value: 'national-park', label: 'National Park' },
  { value: 'outfit', label: 'Outfit' },
  { value: 'plus-jakarta-sans', label: 'Plus Jakarta Sans' },
  { value: 'public-sans', label: 'Public Sans' },
  { value: 'satoshi', label: 'Satoshi' },
  { value: 'schibsted-grotesk', label: 'Schibsted Grotesk' },
  { value: 'sn-pro', label: 'SN Pro' },
  { value: 'sora', label: 'Sora' },
  { value: 'source-serif-4', label: 'Source Serif 4' },
  { value: 'teachers', label: 'Teachers' },
  { value: 'uncut-sans', label: 'Uncut Sans' },
  { value: 'urbanist', label: 'Urbanist' },
  { value: 'work-sans', label: 'Work Sans' },
];

export const ThemeControlsSidebar = component$(() => {
  const ctx = useThemeContext.use();

  return (
    <div class="flex flex-col gap-2 w-full select-none">
      <DialGroup
        title="Theme"
        isOpen={ctx.isThemeOpen.value}
        onToggle$={() => (ctx.isThemeOpen.value = !ctx.isThemeOpen.value)}
      >
        <DialInput
          label="Name"
          value={ctx.name.value}
          onInput$={(val) => (ctx.name.value = val)}
        />

        <DialRadio
          label="Theme"
          value={ctx.theme.value}
          onSelect$={ctx.onThemeRadioChange$}
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        >
          <svg
            q:slot="icon-light"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            class="shrink-0"
          >
            <circle
              cx="7"
              cy="7"
              r="1.86"
              fill="none"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 1.167v1.166M7 11.667v1.166M2.876 2.876l.822.822M10.302 10.302l.822.822M1.167 7h1.166M11.667 7h1.166M3.698 10.302l-.822.822M11.124 2.876l-.822.822"
              fill="none"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            q:slot="icon-dark"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            class="shrink-0"
          >
            <path
              d="M12.241 7.283a5.25 5.25 0 1 1-5.526-5.525c.236-.013.36.268.235.468a3.5 3.5 0 0 0 4.823 4.823c.201-.125.481-.002.468.234"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </DialRadio>

        <DialSelect
          label="Font"
          value={ctx.fontSans.value ?? 'instrument-sans'}
          onSelect$={(val) => (ctx.fontSans.value = val)}
          options={FONT_OPTIONS}
        />

        <DialSelect
          label="Icons"
          value={ctx.iconSet.value}
          onSelect$={(val) => (ctx.iconSet.value = val)}
          options={[
            // 2023+ Releases
            { value: 'hugeicons', label: 'HugeIcons' },
            { value: 'solar', label: 'Solar' },
            { value: 'mage', label: 'Mage Icons' },
            { value: 'lets-icons', label: "Let's Icons" },
            { value: 'flowbite', label: 'Flowbite' },
            { value: 'mynaui', label: 'Myna UI' },
            { value: 'stash', label: 'Stash' },
            { value: 'iconamoon', label: 'IconaMoon' },
            { value: 'proicons', label: 'ProIcons' },
            { value: 'cuida', label: 'Cuida' },
            { value: 'lsicon', label: 'LSIcon' },

            // 2022 Releases
            { value: 'material-symbols', label: 'Material Symbols' },
            { value: 'gravity-ui', label: 'Gravity UI' },
            { value: 'tdesign', label: 'TDesign' },
            { value: 'circum', label: 'Circum' },
            { value: 'streamline', label: 'Streamline' },

            // 2021 Releases
            { value: 'lucide', label: 'Lucide' },
            { value: 'iconoir', label: 'Iconoir' },
            { value: 'mingcute', label: 'MingCute' },
            { value: 'radix-icons', label: 'Radix' },
            { value: 'line-md', label: 'Line MD (Animated)' },

            // 2020 Releases
            { value: 'heroicons', label: 'Heroicons' },
            { value: 'ph', label: 'Phosphor' },
            { value: 'tabler', label: 'Tabler' },
            { value: 'icon-park', label: 'IconPark' },
            { value: 'fluent', label: 'Fluent UI' },
            { value: 'ri', label: 'Remix Icon' },
            { value: 'system-uicons', label: 'System UIcons' },
            { value: 'teenyicons', label: 'Teenyicons' },
            { value: 'carbon', label: 'Carbon' },
          ]}
        />

        <DialSelect
          label="Rounding"
          value={ctx.rounding.value}
          onSelect$={(val) => (ctx.rounding.value = val as any)}
          options={[
            { value: 'none', label: 'None' },
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ]}
        />
      </DialGroup>

      {/* Color Control Group Accordion */}
      <div
        class="w-full"
        onMouseEnter$={() => (ctx.isColorGroupHovered.value = true)}
        onMouseLeave$={() => (ctx.isColorGroupHovered.value = false)}
      >
        <DialGroup
          title={ctx.selectedColorLabel.value}
          isOpen={ctx.isColorOpen.value}
          onToggle$={() => (ctx.isColorOpen.value = !ctx.isColorOpen.value)}
        >
          <DialTabs>
            <DialTabItem
              label="Lightness"
              active={ctx.activeTab.value === 'lightness'}
              onClick$={() => (ctx.activeTab.value = 'lightness')}
            >
              <svg
                q:slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                class="shrink-0"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="1.86"
                  stroke="currentColor"
                  stroke-width="1.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 1.167v1.166M7 11.667v1.166M2.876 2.876l.822.822M10.302 10.302l.822.822M1.167 7h1.166M11.667 7h1.166M3.698 10.302l-.822.822M11.124 2.876l-.822.822"
                  stroke={ctx.activeTab.value === 'lightness' ? 'var(--color-shade-900)' : 'var(--color-shade-600)'}
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </DialTabItem>

            <DialTabItem
              label="Chroma"
              active={ctx.activeTab.value === 'chroma'}
              onClick$={() => (ctx.activeTab.value = 'chroma')}
            >
              <svg
                q:slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </DialTabItem>

            <DialTabItem
              label="Hue"
              active={ctx.activeTab.value === 'hue'}
              onClick$={() => (ctx.activeTab.value = 'hue')}
            >
              <svg
                q:slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 10 10" />
                <path d="M12 12l4.24-4.24" />
              </svg>
            </DialTabItem>
          </DialTabs>

          {ctx.activeTab.value === 'lightness' && (
            <CurveArea
              isInView={ctx.isColorGroupHovered.value}
              showDots={ctx.isSliding.value}
              values={ctx.lValues.value}
              limitValues={ctx.lMaxLimits.value}
              minLimitValues={ctx.lMinLimits.value}
              p3LimitValues={ctx.lMaxP3Limits.value}
              p3MinLimitValues={ctx.lMinP3Limits.value}
              palette={ctx.palette.value}
            />
          )}

          {ctx.activeTab.value === 'chroma' && (
            <CurveArea
              isInView={ctx.isColorGroupHovered.value}
              showDots={ctx.isSliding.value}
              values={ctx.cValues.value}
              limitValues={ctx.cLimits.value}
              p3LimitValues={ctx.cP3Limits.value}
              palette={ctx.palette.value}
            />
          )}

          {ctx.activeTab.value === 'hue' && (
            <CurveArea
              hideGraph
              palette={ctx.palette.value}
              isInView={ctx.isColorGroupHovered.value}
              showDots={ctx.isSliding.value}
            />
          )}

          {ctx.activeTab.value === 'lightness' && (
            <>
              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Shade 0 lightness"
                  value={ctx.activePalette.value.shade0Lightness}
                  min={0.6}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].shade0Lightness = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label={ctx.topLightnessLabel.value}
                  value={ctx.activePalette.value.lightnessHighlights}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].lightnessHighlights = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Midtones"
                  value={ctx.activePalette.value.lightnessMidpoint}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].lightnessMidpoint = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label={ctx.bottomLightnessLabel.value}
                  value={ctx.activePalette.value.lightnessShadows}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].lightnessShadows = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Shade 1000 lightness"
                  value={ctx.activePalette.value.shade1000Lightness}
                  min={0}
                  max={0.4}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].shade1000Lightness = val;
                  }}
                />
              </div>
            </>
          )}

          {ctx.activeTab.value === 'chroma' && (
            <>
              <DialRadio
                label="Gamut"
                value={ctx.activePalette.value.gamut}
                onSelect$={ctx.onGamutChange$}
                options={[
                  { value: 'srgb', label: 'sRGB (0.26)' },
                  { value: 'p3', label: 'P3 (0.37)' },
                ]}
              />

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Intensity"
                  value={ctx.activePalette.value.chromaAmount}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].chromaAmount = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Peak position"
                  value={ctx.activePalette.value.chromaShift}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].chromaShift = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Curve spread"
                  value={ctx.activePalette.value.chromaSpread}
                  min={0}
                  max={1}
                  step={0.01}
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].chromaSpread = val;
                  }}
                />
              </div>
            </>
          )}

          {ctx.activeTab.value === 'hue' && (
            <>
              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Hue angle"
                  value={ctx.activePalette.value.hueAngle}
                  min={0}
                  max={360}
                  step={1}
                  unit="°"
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].hueAngle = val;
                  }}
                />
              </div>

              <div
                onPointerDown$={ctx.onSlideStart$}
                onMouseDown$={ctx.onSlideStart$}
                onTouchStart$={ctx.onSlideStart$}
              >
                <Slider
                  label="Hue shift"
                  value={ctx.activePalette.value.hueShift}
                  min={-180}
                  max={180}
                  step={1}
                  unit="°"
                  showSign
                  hasTicks
                  onChange$={(val) => {
                    ctx.colorPalettes[ctx.selectedColor.value].hueShift = val;
                  }}
                />
              </div>
            </>
          )}
        </DialGroup>
      </div>
    </div>
  );
});
