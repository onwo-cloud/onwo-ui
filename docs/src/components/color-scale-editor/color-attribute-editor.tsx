import { QRL, component$, useSignal, $, Signal } from '@builder.io/qwik';

import { ControlPoint, CurveEditor, SwatchData } from '../curve-editor';

import { ColorSwatchBackground } from './color-swatch-background';
import { JoystickSlider } from './joystick-slider';

type ColorAttributeEditorProps = {
  name: string;
  points: Signal<ControlPoint[]>;
  swatch: SwatchData[];
};

const SHIFT_FACTOR = 1;

export const ColorAttributeEditor = component$((props: ColorAttributeEditorProps) => {
  const initialPoints = useSignal<ControlPoint[] | null>(null);

  const handleSlideStart = $(() => {
    // Deep copy the points at the start of the drag
    initialPoints.value = JSON.parse(JSON.stringify(props.points.value));
  });

  const handleSlide = $((slidePercent: number) => {
    if (!initialPoints.value) return;

    const shiftAmount = (slidePercent / 100) * SHIFT_FACTOR;

    const newPoints: ControlPoint[] = initialPoints.value.map((point) => ({
      ...point,
      // Correctly access the x-coordinate from the 'point' tuple
      point: [Math.max(0, Math.min(1, point.point[0] + shiftAmount)), point.point[1]],
      // Also shift the handles to keep the curve shape consistent
      inHandle: [Math.max(0, Math.min(1, point.inHandle[0] + shiftAmount)), point.inHandle[1]],
      outHandle: [Math.max(0, Math.min(1, point.outHandle[0] + shiftAmount)), point.outHandle[1]],
    }));

    props.points.value = [...newPoints];
  });

  const handleSlideEnd = $(() => {
    initialPoints.value = null;
  });

  return (
    <div class="flex flex-col w-full h-full px-1">
      <div class="flex-grow relative h-full">
        <ColorSwatchBackground swatch={props.swatch} />
        <CurveEditor points={props.points} decimalPrecision={3} axis="y" />
      </div>
      <div class="h-6 mt-2 w-full">
        <JoystickSlider
          orientation="horizontal"
          position="center"
          onSlideStart$={handleSlideStart}
          onSlide$={handleSlide}
          onSlideEnd$={handleSlideEnd}
        />
      </div>
    </div>
  );
});
