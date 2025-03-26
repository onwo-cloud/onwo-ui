import type { Pseudo } from 'postcss-selector-parser';
// eslint-disable-next-line import/no-extraneous-dependencies
import parser from 'postcss-selector-parser';

const parseSelector = parser();

export function isPlainObject(value: unknown) {
  if (value === null || typeof value !== 'object') return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

export function isUsableColor(color: string, values: any) {
  return isPlainObject(values) && color !== 'gray' && values[600];
}
