import { SwatchData } from '.';

type ColorSwatchBackgroundProps = {
  swatch: SwatchData[];
};

export const ColorSwatchBackground = (props: ColorSwatchBackgroundProps) => {
  const swatchHeightPercent = (1 / props.swatch.length) * 100;
  return (
    <>
      {props.swatch.map(({ val, color }, idx) => {
        return (
          <div
            key={val}
            class="absolute w-full z-[-1]"
            style={{
              height: swatchHeightPercent + '%',
              top: swatchHeightPercent * idx + '%',
              backgroundColor: color,
            }}
          />
        );
      })}
    </>
  );
};
