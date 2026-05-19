import type { QRL } from '@builder.io/qwik';
import { $, component$, useSignal, useTask$ } from '@builder.io/qwik';

import { useOnChange } from '~/hooks/use-on-change';

import { ScaleData } from '../theme-builder/types';

import { AttributeHeader } from './attribute-header';
import { ColorAttributeEditor } from './color-attribute-editor';

export type SwatchData = {
  color: string;
  val: number;
  lch: [number, number, number];
};

export type ColorScaleEditorProps = {
  scale: ScaleData;
  swatch: SwatchData[];
  onChange$: QRL<(scale: ScaleData) => void>;
};

export const ColorScaleEditor = component$((props: ColorScaleEditorProps) => {
  const hue = useSignal(props.scale.hue);
  const lightness = useSignal(props.scale.lightness);
  const chroma = useSignal(props.scale.chroma);

  useOnChange(
    { hue, chroma, lightness },
    $((values) => {
      props.onChange$({
        ...props.scale,
        ...values,
      });
    }),
  );

  const hueGradient =
    'linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))';

  const midHue = props.swatch[Math.floor(props.swatch.length / 2)]?.lch[2] ?? 0;
  const chromaGradient = `linear-gradient(to right, lch(50% 0 ${midHue}), lch(50% 100 ${midHue}))`;

  const lightnessGradient = 'linear-gradient(to right, black, white)';

  return (
    <div class="flex flex-col w-full h-full">
      {/* Titles and Gradients Section */}
      <div class="flex w-full mb-1">
        <AttributeHeader title="Hue" gradient={hueGradient} />
        <AttributeHeader title="Chroma" gradient={chromaGradient} />
        <AttributeHeader title="Lightness" gradient={lightnessGradient} />
      </div>

      {/* Editors Section */}
      <div class="relative w-full flex-grow">
        <div class="flex w-full h-full">
          <ColorAttributeEditor swatch={props.swatch} name="hue" points={hue} />
          <ColorAttributeEditor swatch={props.swatch} name="chroma" points={chroma} />
          <ColorAttributeEditor swatch={props.swatch} name="lightness" points={lightness} />
        </div>
      </div>
    </div>
  );
});
