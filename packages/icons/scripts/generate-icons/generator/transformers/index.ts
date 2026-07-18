import type { IconifyIcon } from '../../types';
import { createPrefixTransformer, createSizeVariantTransformer, createSuffixTransformer } from './utils';

export type AddIconFn = (
  subPrefix: string,
  cleanName: string,
  originalIcon: IconifyIcon & { name: string },
  score?: number
) => void;

export interface IconSetTransformer {
  prefix: string;
  transform: (
    prefix: string,
    allIcons: Map<string, IconifyIcon & { name: string }>,
    addIcon: AddIconFn
  ) => void;
}

export const defaultTransformer: IconSetTransformer = {
  prefix: 'default',
  transform: (prefix, allIcons, addIcon) => {
    for (const [name, iconData] of allIcons.entries()) {
      addIcon(prefix, name, iconData);
    }
  },
};

// ============================================================================
// MULTI-SIZE TRANSFORMERS
// ============================================================================

export const fluentTransformer = createSizeVariantTransformer({
  prefix: 'fluent',
  styles: [
    ['-filled', 'fluent-filled'],
    ['-regular', 'fluent'],
    ['-light', 'fluent-light'],
    ['-color', 'fluent-color'],
    ['-high-contrast', 'fluent-high-contrast'],
  ],
  scores: {
    '20': 100,
    '24': 90,
    '16': 80,
    '28': 70,
    '32': 60,
    '48': 50,
    '12': 40,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const fluentColorTransformer = createSizeVariantTransformer({
  prefix: 'fluent-color',
  styles: [],
  scores: {
    '20': 100,
    '24': 90,
    '16': 80,
    '32': 70,
    '28': 60,
    '48': 50,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const gardenTransformer = createSizeVariantTransformer({
  prefix: 'garden',
  styles: [
    ['-stroke', 'garden-stroke'],
    ['-fill', 'garden-fill'],
  ],
  scores: {
    '12': 100,
    '16': 90,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const qlementineIconsTransformer = createSizeVariantTransformer({
  prefix: 'qlementine-icons',
  styles: [
    ['-filled', 'qlementine-icons-filled'],
    ['-fill', 'qlementine-icons-filled'], // Standardized fill -> filled
  ],
  scores: {
    '16': 100,
    '24': 90,
    '12': 80,
    '32': 70,
    '20': 60,
    '40': 50,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const octiconTransformer = createSizeVariantTransformer({
  prefix: 'octicon',
  styles: [],
  scores: {
    '16': 100,
    '24': 90,
    '12': 80,
    '48': 70,
    '32': 60,
    '96': 50,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const heroiconsTransformer = createSizeVariantTransformer({
  prefix: 'heroicons',
  styles: [
    ['-solid', 'heroicons-solid'],
    ['-outline', 'heroicons-outline'],
    ['-mini', 'heroicons-mini'],
    ['-micro', 'heroicons-micro'],
  ],
  scores: {
    '20': 100,
    '16': 90,
    '24': 80,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const osmicTransformer = createSizeVariantTransformer({
  prefix: 'osmic',
  styles: [],
  scores: {
    '14': 100,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const sidekickiconsTransformer = createSizeVariantTransformer({
  prefix: 'sidekickicons',
  styles: [
    ['-solid', 'sidekickicons-solid'],
  ],
  scores: {
    '16': 100,
    '20': 90,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

export const noniconsTransformer = createSizeVariantTransformer({
  prefix: 'nonicons',
  styles: [],
  scores: {
    '16': 100,
  },
  defaultScore: 30,
  noSizeScore: 95,
});

// ============================================================================
// STYLE VARIANT TRANSFORMERS
// ============================================================================

export const materialSymbolsTransformer = createSuffixTransformer(
  'material-symbols',
  [
    ['-outline-rounded', 'material-symbols-outline-rounded'],
    ['-outline-sharp', 'material-symbols-outline-sharp'],
    ['-rounded', 'material-symbols-rounded'],
    ['-sharp', 'material-symbols-sharp'],
    ['-outline', 'material-symbols-outline'],
  ]
);

export const materialSymbolsLightTransformer = createSuffixTransformer(
  'material-symbols-light',
  [
    ['-outline-rounded', 'material-symbols-light-outline-rounded'],
    ['-outline-sharp', 'material-symbols-light-outline-sharp'],
    ['-rounded', 'material-symbols-light-rounded'],
    ['-sharp', 'material-symbols-light-sharp'],
    ['-outline', 'material-symbols-light-outline'],
  ]
);

export const phTransformer = createSuffixTransformer('ph', [
  ['-bold', 'ph-bold'],
  ['-duotone', 'ph-duotone'],
  ['-fill', 'ph-fill'],
  ['-light', 'ph-light'],
  ['-thin', 'ph-thin'],
]);

export const icTransformer = createPrefixTransformer('ic', [
  ['outline-', 'ic-outline'],
  ['round-', 'ic-round'],
  ['sharp-', 'ic-sharp'],
  ['twotone-', 'ic-twotone'],
  ['baseline-', 'ic'],
]);

export const solarTransformer = createSuffixTransformer('solar', [
  ['-bold-duotone', 'solar-bold-duotone'],
  ['-line-duotone', 'solar-line-duotone'],
  ['-bold', 'solar-bold'],
  ['-line', 'solar-line'],
  ['-broken', 'solar-broken'],
  ['-outline', 'solar-outline'],
  ['-duotone', 'solar-duotone'],
]);

export const mingcuteTransformer = createSuffixTransformer('mingcute', [
  ['-fill', 'mingcute-fill'],
  ['-line', 'mingcute-line'],
]);

export const riTransformer = createSuffixTransformer('ri', [
  ['-fill', 'ri-fill'],
  ['-line', 'ri-line'],
]);

export const letsIconsTransformer = createSuffixTransformer('lets-icons', [
  ['-duotone-line', 'lets-icons-duotone-line'],
  ['-duotone', 'lets-icons-duotone'],
  ['-fill', 'lets-icons-fill'],
  ['-line', 'lets-icons-line'],
  ['-light', 'lets-icons-light'],
]);

// Combined -outlined/-outline and -filled/-fill to prevent package fragmentation
export const antDesignTransformer = createSuffixTransformer('ant-design', [
  ['-outlined', 'ant-design-outlined'],
  ['-outline', 'ant-design-outlined'],
  ['-filled', 'ant-design-filled'],
  ['-fill', 'ant-design-filled'],
]);

export const evaTransformer = createSuffixTransformer('eva', [
  ['-fill', 'eva-fill'],
  ['-outline', 'eva-outline'],
]);

export const biTransformer = createSuffixTransformer('bi', [
  ['-fill', 'bi-fill'],
]);

export const iconamoonTransformer = createSuffixTransformer('iconamoon', [
  ['-fill', 'iconamoon-fill'],
  ['-bold', 'iconamoon-bold'],
  ['-duotone', 'iconamoon-duotone'],
  ['-light', 'iconamoon-light'],
  ['-thin', 'iconamoon-thin'],
]);

export const stashTransformer = createSuffixTransformer('stash', [
  ['-duotone', 'stash-duotone'],
  ['-light', 'stash-light'],
  ['-solid', 'stash-solid'],
]);

export const flowbiteTransformer = createSuffixTransformer('flowbite', [
  ['-solid', 'flowbite-solid'],
  ['-outline', 'flowbite-outline'],
]);

export const clarityTransformer = createSuffixTransformer('clarity', [
  ['-solid', 'clarity-solid'],
  ['-line', 'clarity-line'],
]);

export const basilTransformer = createSuffixTransformer('basil', [
  ['-solid', 'basil-solid'],
  ['-outline', 'basil-outline'],
]);

export const lsiconTransformer = createSuffixTransformer('lsicon', [
  ['-filled', 'lsicon-filled'],
  ['-outline', 'lsicon-outline'],
]);

export const bitcoinIconsTransformer = createSuffixTransformer('bitcoin-icons', [
  ['-filled', 'bitcoin-icons-filled'],
  ['-outline', 'bitcoin-icons-outline'],
]);

export const weuiTransformer = createSuffixTransformer('weui', [
  ['-filled', 'weui-filled'],
  ['-outlined', 'weui-outlined'],
]);

export const reiconTransformer = createSuffixTransformer('reicon', [
  ['-filled', 'reicon-filled'],
  ['-duotone', 'reicon-duotone'],
]);

export const mynauiTransformer = createSuffixTransformer('mynaui', [
  ['-solid', 'mynaui-solid'],
]);

export const streamlineTransformer = createSuffixTransformer('streamline', [
  ['-solid', 'streamline-solid'],
  ['-flat', 'streamline-flat'],
]);

export const pepiconsPopTransformer = createSuffixTransformer('pepicons-pop', [
  ['-filled', 'pepicons-pop-filled'],
]);

export const pepiconsPencilTransformer = createSuffixTransformer('pepicons-pencil', [
  ['-filled', 'pepicons-pencil-filled'],
]);

export const pepiconsPrintTransformer = createSuffixTransformer('pepicons-print', [
  ['-filled', 'pepicons-print-filled'],
]);

export const boxiconsTransformer = createSuffixTransformer('boxicons', [
  ['-filled', 'boxicons-filled'],
]);

export const tablerTransformer = createSuffixTransformer('tabler', [
  ['-filled', 'tabler-filled'],
]);

export const tdesignTransformer = createSuffixTransformer('tdesign', [
  ['-filled', 'tdesign-filled'],
]);

export const griddyIconsTransformer = createSuffixTransformer('griddy-icons', [
  ['-filled', 'griddy-icons-filled'],
]);

export const laTransformer = createSuffixTransformer('la', [
  ['-solid', 'la-solid'],
]);

export const teenyiconsTransformer = createSuffixTransformer('teenyicons', [
  ['-solid', 'teenyicons-solid'],
  ['-outline', 'teenyicons-outline'],
]);

export const healthiconsTransformer = createSuffixTransformer('healthicons', [
  ['-outline', 'healthicons-outline'],
]);

export const glyphsTransformer = createSuffixTransformer('glyphs', [
  ['-outline', 'glyphs-outline'],
  ['-bold', 'glyphs-bold'],
]);

export const ionTransformer = createSuffixTransformer('ion', [
  ['-outline', 'ion-outline'],
  ['-sharp', 'ion-sharp'],
]);

export const famiconsTransformer = createSuffixTransformer('famicons', [
  ['-outline', 'famicons-outline'],
  ['-sharp', 'famicons-sharp'],
]);

export const pixelarticonsTransformer = createSuffixTransformer('pixelarticons', [
  ['-sharp', 'pixelarticons-sharp'],
  ['-solid', 'pixelarticons-solid'],
]);

export const bubblesTransformer = createSuffixTransformer('bubbles', [
  ['-solid', 'bubbles-solid'],
  ['-outline', 'bubbles-outline'],
]);

export const siTransformer = createSuffixTransformer('si', [
  ['-fill', 'si-fill'],
  ['-line', 'si-line'],
  ['-duotone', 'si-duotone'],
]);

export const mageTransformer = createSuffixTransformer('mage', [
  ['-fill', 'mage-fill'],
]);

export const f7Transformer = createSuffixTransformer('f7', [
  ['-fill', 'f7-fill'],
]);

export const mdiTransformer = createSuffixTransformer('mdi', [
  ['-outline', 'mdi-outline'],
]);

export const lineMdTransformer = createSuffixTransformer('line-md', [
  ['-filled', 'line-md-filled'],
  ['-twotone', 'line-md-twotone'],
]);

export const dinkieIconsTransformer = createSuffixTransformer('dinkie-icons', [
  ['-filled', 'dinkie-icons-filled'],
]);

export const meteoconsTransformer = createSuffixTransformer('meteocons', [
  ['-fill', 'meteocons-fill'],
]);

export const akarIconsTransformer = createSuffixTransformer('akar-icons', [
  ['-fill', 'akar-icons-fill'],
]);

export const iconoirTransformer = createSuffixTransformer('iconoir', [
  ['-solid', 'iconoir-solid'],
]);

export const rivetIconsTransformer = createSuffixTransformer('rivet-icons', [
  ['-solid', 'rivet-icons-solid'],
]);

export const cuidaTransformer = createSuffixTransformer('cuida', [
  ['-outline', 'cuida-outline'],
]);

export const typcnTransformer = createSuffixTransformer('typcn', [
  ['-outline', 'typcn-outline'],
]);

export const eosIconsTransformer = createSuffixTransformer('eos-icons', [
  ['-outlined', 'eos-icons-outlined'],
]);

export const majesticonsTransformer = createSuffixTransformer('majesticons', [
  ['-line', 'majesticons-line'],
]);

export const selfhstTransformer = createSuffixTransformer('selfhst', [
  ['-light', 'selfhst-light'],
]);

export const skillIconsTransformer = createSuffixTransformer('skill-icons', [
  ['-light', 'skill-icons-light'],
]);

// ============================================================================
// REGISTRY
// ============================================================================

const registry = new Map<string, IconSetTransformer>([
  [fluentTransformer.prefix, fluentTransformer],
  [fluentColorTransformer.prefix, fluentColorTransformer],
  [heroiconsTransformer.prefix, heroiconsTransformer],
  [octiconTransformer.prefix, octiconTransformer],
  [gardenTransformer.prefix, gardenTransformer],
  [qlementineIconsTransformer.prefix, qlementineIconsTransformer],
  [sidekickiconsTransformer.prefix, sidekickiconsTransformer],
  [osmicTransformer.prefix, osmicTransformer],
  [noniconsTransformer.prefix, noniconsTransformer],

  [materialSymbolsTransformer.prefix, materialSymbolsTransformer],
  [materialSymbolsLightTransformer.prefix, materialSymbolsLightTransformer],
  [phTransformer.prefix, phTransformer],
  [icTransformer.prefix, icTransformer],
  [solarTransformer.prefix, solarTransformer],
  [mingcuteTransformer.prefix, mingcuteTransformer],
  [riTransformer.prefix, riTransformer],
  [letsIconsTransformer.prefix, letsIconsTransformer],
  [antDesignTransformer.prefix, antDesignTransformer],
  [evaTransformer.prefix, evaTransformer],
  [biTransformer.prefix, biTransformer],
  [iconamoonTransformer.prefix, iconamoonTransformer],
  [stashTransformer.prefix, stashTransformer],
  [flowbiteTransformer.prefix, flowbiteTransformer],
  [clarityTransformer.prefix, clarityTransformer],
  [basilTransformer.prefix, basilTransformer],
  [lsiconTransformer.prefix, lsiconTransformer],
  [bitcoinIconsTransformer.prefix, bitcoinIconsTransformer],
  [weuiTransformer.prefix, weuiTransformer],
  [reiconTransformer.prefix, reiconTransformer],
  [mynauiTransformer.prefix, mynauiTransformer],
  [streamlineTransformer.prefix, streamlineTransformer],
  [pepiconsPopTransformer.prefix, pepiconsPopTransformer],
  [pepiconsPencilTransformer.prefix, pepiconsPencilTransformer],
  [pepiconsPrintTransformer.prefix, pepiconsPrintTransformer],
  [boxiconsTransformer.prefix, boxiconsTransformer],
  [tablerTransformer.prefix, tablerTransformer],
  [tdesignTransformer.prefix, tdesignTransformer],
  [griddyIconsTransformer.prefix, griddyIconsTransformer],
  [laTransformer.prefix, laTransformer],
  [teenyiconsTransformer.prefix, teenyiconsTransformer],
  [healthiconsTransformer.prefix, healthiconsTransformer],
  [glyphsTransformer.prefix, glyphsTransformer],
  [ionTransformer.prefix, ionTransformer],
  [famiconsTransformer.prefix, famiconsTransformer],
  [pixelarticonsTransformer.prefix, pixelarticonsTransformer],
  [bubblesTransformer.prefix, bubblesTransformer],
  [siTransformer.prefix, siTransformer],
  [mageTransformer.prefix, mageTransformer],
  [f7Transformer.prefix, f7Transformer],
  [mdiTransformer.prefix, mdiTransformer],
  [lineMdTransformer.prefix, lineMdTransformer],
  [dinkieIconsTransformer.prefix, dinkieIconsTransformer],
  [meteoconsTransformer.prefix, meteoconsTransformer],
  [akarIconsTransformer.prefix, akarIconsTransformer],
  [iconoirTransformer.prefix, iconoirTransformer],
  [rivetIconsTransformer.prefix, rivetIconsTransformer],
  [cuidaTransformer.prefix, cuidaTransformer],
  [typcnTransformer.prefix, typcnTransformer],
  [eosIconsTransformer.prefix, eosIconsTransformer],
  [majesticonsTransformer.prefix, majesticonsTransformer],
  [selfhstTransformer.prefix, selfhstTransformer],
  [skillIconsTransformer.prefix, skillIconsTransformer],
]);

export const getTransformer = (prefix: string): IconSetTransformer =>
  registry.get(prefix) ?? defaultTransformer;
