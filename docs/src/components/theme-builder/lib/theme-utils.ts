import { ScaleData } from '../types';

export const getColorPreview = (scale: ScaleData) => {
  const midIndex = 5;
  if (!scale || scale.hue.length <= midIndex) {
    return 'grey';
  }
  //return `hsl(${scale.hue[midIndex]}, ${scale.saturation[midIndex]}%, ${scale.lightness[midIndex]}%)`;
  return 'red';
};
