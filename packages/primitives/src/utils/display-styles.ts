import type { ClassList, CSSProperties } from '@qwik.dev/core';

import type { Opaque } from './types';

// This type remains the same: a single style definition
type DisplayStyle = string /* class */ | { class?: ClassList; style?: CSSProperties };

export type DisplayStyles<T extends string> =
  | Partial<Record<T, DisplayStyle>>
  | DisplayStyles<T>[]
  | undefined;

type ExpandedDisplayStyleInner = { class?: ClassList; style?: CSSProperties };
export type ExpandedDisplayStyle = Opaque<ExpandedDisplayStyleInner, 'ExpandedDisplayStyle'>;

const dsMethods = {
  addClass(this: ExpandedDisplayStyle, className: string): ExpandedDisplayStyle {
    const existingClass = this.class ? this.class + ' ' : '';
    this.class = existingClass + className;
    return this;
  },
};

const createDS = (s: ExpandedDisplayStyleInner): ExpandedDisplayStyle =>
  Object.assign(Object.create(dsMethods), s) as ExpandedDisplayStyle;

/**
 * A higher-order function that takes a set of display styles and returns a
 * function to resolve a specific style key into an ExpandedDisplayStyle.
 *
 * This version supports a DisplayStyles object that can be a single object
 * or a nested array of objects, allowing for composition.
 */
export const withDisplayStyle =
  <T extends string>(displayStyles?: DisplayStyles<T>) =>
  (s: T): ExpandedDisplayStyle => {
    /**
     * Recursively traverses the DisplayStyles structure to find all
     * style definitions for a given key.
     * @param styles - The current DisplayStyles object or array to search.
     * @param key - The style key to look for (e.g., 'primary').
     * @returns A flat array of all found DisplayStyle definitions.
     */
    const findAllStylesForKey = (styles: DisplayStyles<T>, key: T): DisplayStyle[] => {
      if (!styles) {
        return [];
      }
      // If it's an array, recursively search each item and flatten the results.
      if (Array.isArray(styles)) {
        return styles.flatMap((item) => findAllStylesForKey(item, key));
      }
      // If it's an object, check for the key and return its value in an array.
      const style = styles[key];
      return style ? [style] : [];
    };

    // Find and flatten all relevant styles for the given key `s`.
    const stylesToMerge = findAllStylesForKey(displayStyles, s);

    if (stylesToMerge.length === 0) {
      return createDS({});
    }

    // Reduce the flat array of styles into a single merged object.
    const merged = stylesToMerge.reduce<ExpandedDisplayStyleInner>(
      (accumulator, currentStyle) => {
        // Handle string-based class names
        if (typeof currentStyle === 'string') {
          accumulator.class = (accumulator.class ? accumulator.class + ' ' : '') + currentStyle;
        }
        // Handle object-based styles
        else {
          if (currentStyle.class) {
            accumulator.class =
              (accumulator.class ? accumulator.class + ' ' : '') + currentStyle.class;
          }
          if (currentStyle.style) {
            // Merge style objects, with later styles overwriting earlier ones.
            accumulator.style = { ...accumulator.style, ...currentStyle.style };
          }
        }
        return accumulator;
      },
      // Start with an empty accumulator object.
      { class: undefined, style: undefined },
    );

    return createDS(merged);
  };
