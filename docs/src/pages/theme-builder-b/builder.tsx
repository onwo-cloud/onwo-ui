import { component$ } from '@builder.io/qwik';
import { Radio, RadioOption } from '@onwo/ui/radio';

import { isColorLight } from '~/utils/colors';

export const ColorView = () => (
  <Radio name="n1" orientation="horizontal">
    <RadioOption value="accent">
      <span>
        <h4>Accent</h4>
        <p> Where the user gaze go</p>
      </span>
      <span>
        <div class="ring-1 ring-neutral-700 bg-neutral-800 w-9 h-9 rounded-full relative">
          <div class="absolute inset-1 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-300"></div>
        </div>
      </span>
    </RadioOption>
    <RadioOption
      value="background"
      ds={{ root: 'w-1/2', label: 'flex gap-12 w-full item-center justify-between' }}
    >
      <span>
        <h4>Background</h4>
        <p> Where the user gaze go</p>
      </span>
      <span>
        <div class="ring-1 ring-neutral-700 bg-neutral-800 w-9 h-9 rounded-full relative">
          <div class="absolute inset-1 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-300"></div>
        </div>
      </span>
    </RadioOption>
  </Radio>
);

// Define the interface for the component's props
interface ColorPaletteProps {
  colors: string[];
}

export const ColorPalette = component$<ColorPaletteProps>(({ colors }) => {
  return (
    <section class="w-full relative rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900">
      <div class="grid grid-cols-12 h-[320px] md:h-[380px] lg:h-[420px]">
        {colors.map((color) => {
          // Determine the appropriate text color for readability
          const textColorClass = isColorLight(color)
            ? 'text-[black]/80' // Dark text for light backgrounds
            : 'text-[white]/90'; // Light text for dark backgrounds

          return (
            <div
              key={color}
              class="relative"
              // Set the background color dynamically
              style={{ background: color }}
            >
              <span class={`absolute bottom-4 left-4 text-xs tracking-wider ${textColorClass}`}>
                {/* Display the color hex code, converting to uppercase for consistency */}
                {color.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export const Builder = () => {
  const myPalette = [
    '#000000',
    '#0B1B0C',
    '#223418',
    '#3B5121',
    '#6F6323',
    '#83792A',
    '#A8BE30',
    '#D5A239',
    '#F7BA66',
    '#FEDCBA',
    '#FFFFFF',
    '#FFFFFF', // You can have duplicates if needed
  ];

  return (
    <div class="w-full">
      <ColorView />
      <ColorPalette colors={myPalette} />
    </div>
  );
};
