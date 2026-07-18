import type { IconifyIcon, IconifyInfo } from '../types';
import { getTransformer } from './transformers';

export interface SubIconSet {
  subPrefix: string;
  icons: Map<string, IconifyIcon & { name: string; originalName: string }>;
}

/** Extracts style variant string if present (e.g. "fluent-filled" -> "filled") */
export const getVariant = (prefix: string, subPrefix: string): string | undefined => {
  if (subPrefix === prefix) return undefined;
  return subPrefix.slice(prefix.length).replace(/^-/, '');
};

/** Formats variant sub-prefix titles (e.g. "ph-bold" -> "Ph Bold") */
export const getSubInfo = (
  info: IconifyInfo | undefined,
  prefix: string,
  subPrefix: string
): IconifyInfo | undefined => {
  if (!info) return undefined;
  if (subPrefix === prefix) return info;

  const variantPart = getVariant(prefix, subPrefix);
  if (!variantPart) return info;

  const variantTitle = variantPart
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    ...info,
    name: `${info.name || prefix} ${variantTitle}`,
  };
};

export const partitionIconSet = (
  prefix: string,
  allIcons: Map<string, IconifyIcon & { name: string }>
): SubIconSet[] => {
  const subSetsMap = new Map<
    string,
    Map<string, { icon: IconifyIcon & { name: string; originalName: string }; score: number }>
  >();

  const addIcon = (
    subPrefix: string,
    cleanName: string,
    originalIcon: IconifyIcon & { name: string },
    score: number = 100
  ) => {
    let subSet = subSetsMap.get(subPrefix);
    if (!subSet) {
      subSet = new Map();
      subSetsMap.set(subPrefix, subSet);
    }

    const existing = subSet.get(cleanName);
    // Retain the variant icon with the highest priority score
    if (!existing || score > existing.score) {
      subSet.set(cleanName, {
        icon: {
          ...originalIcon,
          name: cleanName,
          originalName: originalIcon.name,
        },
        score,
      });
    }
  };

  getTransformer(prefix).transform(prefix, allIcons, addIcon);

  return Array.from(subSetsMap.entries()).map(([subPrefix, iconsMap]) => ({
    subPrefix,
    icons: new Map(
      Array.from(iconsMap.values()).map(({ icon }) => [icon.name, icon])
    ),
  }));
};
