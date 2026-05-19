/**
 * Calculates the perceived luminance of a color and determines if it's "light".
 * @param hex - The hex color string (e.g., "#RRGGBB").
 * @returns `true` if the color is light, `false` if it's dark.
 */
export const isColorLight = (hex: string): boolean => {
  // Remove the '#' if it exists
  const color = hex.startsWith('#') ? hex.slice(1) : hex;

  // Parse the R, G, B values
  const r = Number.parseInt(color.slice(0, 2), 16);
  const g = Number.parseInt(color.slice(2, 4), 16);
  const b = Number.parseInt(color.slice(4, 6), 16);

  // Calculate luminance using the WCAG formula
  // https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Use a threshold to decide if the color is light or dark.
  // 0.5 is a common threshold.
  return luminance > 0.5;
};
