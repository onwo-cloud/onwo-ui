import { Micro } from 'effect';
import { dual } from 'effect/Function';

import { ParseError } from './error';

export const parseString = (input: string): Micro.Micro<number, ParseError> => {
  const n = Number(input);
  if (input.trim() === '' || Number.isNaN(n)) {
    return Micro.fail(new ParseError({ message: `Invalid number: "${input}"` }));
  }
  return Micro.succeed(n);
};

/**
 * Returns a string representation of an object.
 *
 * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
 */
export const toString: {
  (radix?: number): (self: number) => string;
  (self: number, radix?: number): string;
} = dual(2, (self: number, radix?: number): string => self.toString(radix));

/**
 * Returns a string representing a number in fixed-point notation.
 *
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export const toFixed: {
  (fractionDigits?: number): (self: number) => string;
  (self: number, fractionDigits?: number): string;
} = dual(2, (self: number, fractionDigits?: number): string => self.toFixed(fractionDigits));

/**
 * Returns a string containing a number represented in exponential notation.
 *
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export const toExponential: {
  (fractionDigits?: number): (self: number) => string;
  (self: number, fractionDigits?: number): string;
} = dual(2, (self: number, fractionDigits?: number): string => self.toExponential(fractionDigits));

/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 *
 * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
 */
export const toPrecision: {
  (precision?: number): (self: number) => string;
  (self: number, precision?: number): string;
} = dual(2, (self: number, precision?: number): string => self.toPrecision(precision));
