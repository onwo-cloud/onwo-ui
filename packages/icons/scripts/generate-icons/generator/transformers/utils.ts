import { IconSetTransformer } from ".";

/** Transforms icon sets based on trailing style suffixes (e.g., "home-bold" -> "ph-bold", "home") */
export const createSuffixTransformer = (
  prefix: string,
  rules: Array<[suffix: string, subPrefix: string]>
): IconSetTransformer => ({
  prefix,
  transform: (_, allIcons, addIcon) => {
    for (const [name, iconData] of allIcons.entries()) {
      const match = rules.find(([suffix]) => name.endsWith(suffix));
      if (match) {
        const [suffix, subPrefix] = match;
        addIcon(subPrefix, name.slice(0, -suffix.length), iconData);
      } else {
        addIcon(prefix, name, iconData);
      }
    }
  },
});

/** Transforms icon sets based on leading style prefixes (e.g., "outline-home" -> "ic-outline", "home") */
export const createPrefixTransformer = (
  prefix: string,
  rules: Array<[pfx: string, subPrefix: string]>
): IconSetTransformer => ({
  prefix,
  transform: (_, allIcons, addIcon) => {
    for (const [name, iconData] of allIcons.entries()) {
      const match = rules.find(([pfx]) => name.startsWith(pfx));
      if (match) {
        const [pfx, subPrefix] = match;
        addIcon(subPrefix, name.slice(pfx.length), iconData);
      } else {
        addIcon(prefix, name, iconData);
      }
    }
  },
});

/** Transforms icon sets with combined style suffixes AND size numbers (e.g., "add-24-filled" -> size 24, score 100) */
export const createSizeVariantTransformer = ({
  prefix,
  styles = [],
  scores = {},
  defaultScore = 30,
  noSizeScore = 95,
}: {
  prefix: string;
  styles?: Array<[suffix: string, subPrefix: string]>;
  scores?: Record<string, number>;
  defaultScore?: number;
  noSizeScore?: number;
}): IconSetTransformer => ({
  prefix,
  transform: (_, allIcons, addIcon) => {
    for (const [name, iconData] of allIcons.entries()) {
      let working = name;
      let subPrefix = prefix;

      // 1. Match & strip style suffix (e.g. "-filled")
      for (const [suffix, sp] of styles) {
        if (working.endsWith(suffix)) {
          subPrefix = sp;
          working = working.slice(0, -suffix.length);
          break;
        }
      }

      // 2. Extract trailing size number (e.g. "-24")
      const sizeMatch = working.match(/-(\d+)$/);
      let score = noSizeScore;

      if (sizeMatch) {
        const sizeStr = sizeMatch[1];
        working = working.slice(0, -sizeMatch[0].length);
        score = scores[sizeStr] ?? defaultScore;
      }

      addIcon(subPrefix, working, iconData, score);
    }
  },
});
