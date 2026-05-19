import { ClassList, component$ } from '@builder.io/qwik';
import { SwatchData } from '~/components/curve-editor';

interface GradientCircleProps {
  swatches: SwatchData[];
  class?: ClassList;
}

export const GradientCircle = component$((props: GradientCircleProps) => {
  const stops = props.swatches;
  // This shows only the center swatch
  const stopSliced = stops.slice(
    Math.floor(stops.length / 3),
    Math.ceil(stops.length - stops.length / 3),
  );
  if (!stopSliced || stopSliced.length === 0) return 'transparent';

  const gradient = `linear-gradient(90deg, ${stopSliced.map((s) => s.color).join(', ')})`;

  return (
    <div
      class={[
        'h-3 w-3 rounded-full shadow-sm ring-1 ring-inset ring-black/10 shrink-0',
        props.class,
      ]}
      style={{ background: gradient }}
    />
  );
});
