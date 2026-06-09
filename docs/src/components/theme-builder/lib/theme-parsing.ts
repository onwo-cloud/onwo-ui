import type { Err} from '~/utils/effect';
import { M, pipe, Nbr, Str, Tuple, Obj, Arr } from '~/utils/effect';

import type { ControlPoint, ScaleData, Palette, Theme } from '../types';

function createControlPointFromTuple(coords: [number, number, number, number]): ControlPoint {
  const [px, py, dx, dy] = coords;
  return {
    point: [px, py],
    outHandle: [px + dx, py + dy],
    inHandle: [px - dx, py - dy],
  };
}

const parseSinglePoint = (pointStr: string): M.Micro<ControlPoint, Err.ParseError> =>
  pipe(
    pointStr,
    Str.split(' '),
    M.forEach(Nbr.parseString),
    M.flatMap(Tuple.parse(4)),
    M.map(createControlPointFromTuple),
  );

export const deserializePoints = (data: string): M.Micro<ControlPoint[], Err.ParseError> => {
  if (!data) return M.succeed([]);
  return pipe(data, Str.split(','), M.forEach(parseSinglePoint));
};

const parsePalette = (paletteStr: string, index: number): M.Micro<Palette, Err.ParseError> =>
  pipe(
    paletteStr,
    Str.split(':'), // Split Name, Data
    Tuple.parse(2),
    M.flatMap(([name, dataStr]) =>
      pipe(
        pipe(
          dataStr,
          Str.split('|'),
          Tuple.parse(3),
          M.flatMap(([h, c, l]) =>
            M.all([deserializePoints(h), deserializePoints(c), deserializePoints(l)]),
          ),
        ),
        M.map(([hue, chroma, lightness]) => ({
          id: index, // ID derived from order
          name,
          hue,
          chroma,
          lightness,
          swatches: { kind: 'outdated' },
        })),
      ),
    ),
  );

export const parseTheme = (serialized: string): M.Micro<Theme, Err.ParseError> =>
  pipe(
    serialized,
    Str.split(';'),
    Tuple.parse(2),
    M.flatMap(([name, palettesStr]) =>
      pipe(
        palettesStr
          ? pipe(
            palettesStr,
            Str.split('~'),
            // Parse each palette, using index as ID
            M.forEach((str, i) => parsePalette(str, i)),
            M.map((palettesArray) =>
              palettesArray.reduce(
                (acc, p) => {
                  acc[p.id] = p;
                  return acc;
                },
                {} as Record<number, Palette>,
              ),
            ),
          )
          : M.succeed({}),
        M.map((palettes) => ({
          id: 0,
          name,
          palettes,
        })),
      ),
    ),
  );

export function serializePoints(points: ControlPoint[], precision = 3): string {
  return points
    .map((cp) => {
      const dx = cp.outHandle[0] - cp.point[0];
      const dy = cp.outHandle[1] - cp.point[1];
      return [cp.point[0], cp.point[1], dx, dy].map(Nbr.toPrecision(precision)).join(' ');
    })
    .join(',');
}

export function serializeScaleData(scale: ScaleData): string {
  return [
    serializePoints(scale.hue),
    serializePoints(scale.chroma),
    serializePoints(scale.lightness),
  ].join('|');
}

export function serializeTheme(theme: Theme): string {
  const sortedPalettes = pipe(
    theme.palettes,
    Obj.values,
    Arr.toSorted((a, b) => a.id - b.id),
  );

  const paletteStrings = sortedPalettes.map((p) => {
    // Format: Name:H|C|L
    return `${p.name}:${serializeScaleData(p)}`;
  });

  // Format: ThemeName;Palette1~Palette2
  return `${theme.name};${paletteStrings.join('~')}`;
}
