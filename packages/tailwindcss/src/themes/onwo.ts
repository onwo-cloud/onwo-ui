import type { OnwoTheme } from './index.js';

export const onwo: OnwoTheme = {
  name: 'onwo-light',
  baseColors: {
    accent: {
      accent: {
        rgb: { r: 63, g: 43, b: 215 },
      },
    },
    border: {
      line: { rgb: { r: 230, g: 229, b: 244 } },
    },
    background: {
      paper: { rgb: { r: 255, g: 255, b: 255 } },
      parchment: { rgb: { r: 248, g: 248, b: 250 } },
      papyrus: { rgb: { r: 242, g: 242, b: 248 } },
    },
    text: {
      ink: { rgb: { r: 2, g: 0, b: 40 } },
      lead: { rgb: { r: 99, g: 98, b: 137 } },
      graphite: { rgb: { r: 117, g: 116, b: 139 } },
    },
    utils: {
      stare: { rgb: { r: 39, g: 125, b: 97 } },
      scan: { rgb: { r: 12, g: 12, b: 33 } },
      gaze: { rgb: { r: 12, g: 12, b: 33 } },
    },
    status: {
      warn: { rgb: { r: 255, g: 179, b: 25 } },
      error: { rgb: { r: 255, g: 78, b: 100 } },
      success: { rgb: { r: 73, g: 179, b: 86 } },
    },
    absolute: {
      'forced-a': { rgb: { r: 255, g: 255, b: 255 } },
      'forced-b': { rgb: { r: 0, g: 0, b: 0 } },
    },
  },
};

//scarab: { rgb: { r: 211, g: 48, b: 48 }},
//mint: { rgb: { r: 149, g: 241, b: 213 }},
//sand: { rgb: { r: 179, g: 128, b: 74 }},
//neutron: { rgb: { r: 52, g: 72, b: 240 }},
//prune: { rgb: { r: 92, g: 51, b: 207 }},

//const raw = `
//@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
//
//:root.theme-onwo-light,
//.theme-onwo-light {
//  --accent: 63, 43, 215;
//  --line: 230, 229, 244;
//  --paper: 255, 255, 255;
//  --parchment: 248, 248, 250;
//  --papyrus: 242, 242, 248;
//  --ink: 2, 0, 40;
//  --lead: 99, 98, 137;
//  --graphite: 117, 116, 139;
//  --forced-a: 255, 255, 255;
//  --forced-b: 0, 0, 0;
//  --stare: 39 125 97 / 0.8;
//  --scan: 12 12 33 / 0.06;
//  --gaze: 12 12 33 / 0.56;
//
//  /* support-colors  */
//  --warn: 255, 179, 25;
//  --error: 255, 78, 100;
//  --success: 73, 179, 86;
//  --scarab: 211, 48, 48;
//  --mint: 149, 241, 213;
//  --sand: 179, 128, 74;
//  --neutron: 52, 72, 240;
//  --prune: 92, 51, 207;
//
//  /* border-radius */
//  --radius-i-xs: 0.25rem;
//  --radius-i-sm: 0.5rem;
//  --radius-i-md: 0.75rem;
//  --radius-s-xs: 0.25rem;
//  --radius-s-sm: 0.5rem;
//  --radius-s-md: 0.75rem;
//  --radius-s-lg: 1rem;
//
//  /* border-width */
//  --border-width: 0.0625rem;
//  --border-i-width: 0.125rem;
//
//  /* opacity */
//  --opacity-onwo: 0.6;
//
//  /* fonts */
//  --dm-sans: 'DM Sans';
//  --grotesk: 'Space Grotesk';
//
//  /* box-shadow */
//  --shadow-xs: 0 4px 12px -6px rgb(0 0 0 / 0.06);
//  --shadow-sm: 0 6px 6px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
//  --shadow-md: 0 12px 12px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
//  --shadow-lg: 0 8px 24px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4);
//  --shadow-xl: 0 32px 32px -8px rgb(0 0 0 / 0.08),
//    0 0 32px -8px rgb(0 0 0 / 0.12), 0 0 1px rgb(0 0 0 / 0.2);
//}`;
