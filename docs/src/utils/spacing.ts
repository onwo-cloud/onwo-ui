import type { Opaque } from "~primitives/index";

export type ThemeSpacing = Opaque<number, 'spacing'>;

type AllowedSpacing = 2 | 4 | 6 | 8 | 10 | 12 | 16;

const spacing = Object.assign((spacing: AllowedSpacing) => spacing as ThemeSpacing, {
  px: (n: ThemeSpacing) => `px-${n}`,
  py: (n: ThemeSpacing) => `py-${n}`,
  pl: (n: ThemeSpacing) => `pl-${n}`,
  pr: (n: ThemeSpacing) => `pr-${n}`,
  pt: (n: ThemeSpacing) => `pt-${n}`,
  pb: (n: ThemeSpacing) => `pb-${n}`,
});

// KEEP THIS! for tailwind inclusion
// px-2 px-4 px-6 px-8 px-16
// py-2 py-4 py-6 py-8 py-16
// pl-2 pl-4 pl-6 pl-8 pl-16
// pr-2 pr-4 pr-6 pr-8 pr-16
// pt-2 pt-4 pt-6 pt-8 pt-16
// pb-2 pb-4 pb-6 pb-8 pb-16

export { spacing }
