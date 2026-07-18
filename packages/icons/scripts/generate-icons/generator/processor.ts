import { Effect } from 'effect';
import { join } from 'path';
import fs from 'fs/promises';
import { FileSystemError, JsonParseError } from '../errors';
import { templates, toPascalCase, type SampleIconData } from './templates';
import { log, colors } from '../logger';
import type { IconifyJSON, IconifyIcon, IconifyInfo } from '../types';
import { partitionIconSet, getSubInfo, getVariant } from './partition';

/** Handles SVG viewBox calculation and rotation/flip transforms */
const prepareIconView = (icon: IconifyIcon, defaultW: number, defaultH: number) => {
  const left = icon.left || 0;
  const top = icon.top || 0;
  const width = icon.width || defaultW;
  const height = icon.height || defaultH;
  let body = icon.body;

  if (icon.hFlip || icon.vFlip || icon.rotate) {
    let transform = '';
    const cx = left + width / 2;
    const cy = top + height / 2;
    if (icon.hFlip) transform += ` translate(${width + 2 * left}, 0) scale(-1, 1)`;
    if (icon.vFlip) transform += ` translate(0, ${height + 2 * top}) scale(1, -1)`;
    if (icon.rotate) transform += ` rotate(${icon.rotate * 90} ${cx} ${cy})`;
    body = `<g transform="${transform.trim()}">${body}</g>`;
  }

  return {
    body,
    viewBox: `${left} ${top} ${width} ${height}`,
  };
};

/** Resolves license and author metadata from local filesystem or Iconify info files */
const fetchIconSetInfo = (
  jsonDir: string,
  prefix: string,
  inlineInfo?: IconifyInfo
): Effect.Effect<IconifyInfo | undefined> =>
  Effect.gen(function*() {
    if (inlineInfo?.license) return inlineInfo;

    const infoPath = join(jsonDir, '..', 'info', `${prefix}.json`);
    const infoContent = yield* Effect.tryPromise(() =>
      fs.readFile(infoPath, 'utf8')
    ).pipe(Effect.orElseSucceed(() => null));

    if (infoContent) {
      const parsed = yield* Effect.try(
        () => JSON.parse(infoContent) as IconifyInfo
      ).pipe(Effect.orElseSucceed(() => null));

      if (parsed?.license) return parsed;
    }

    const collectionsPath = join(jsonDir, '..', 'collections.json');
    const collectionsContent = yield* Effect.tryPromise(() =>
      fs.readFile(collectionsPath, 'utf8')
    ).pipe(Effect.orElseSucceed(() => null));

    if (collectionsContent) {
      const collections = yield* Effect.try(
        () => JSON.parse(collectionsContent) as Record<string, IconifyInfo>
      ).pipe(Effect.orElseSucceed(() => null));

      if (collections?.[prefix]) return collections[prefix];
    }

    return inlineInfo;
  });

export const processIconSet = (
  jsonDir: string,
  file: string,
  baseOutDir: string,
  version: string
): Effect.Effect<void> =>
  Effect.gen(function*() {
    const prefix = file.replace('.json', '');
    const jsonPath = join(jsonDir, file);

    const rawContent = yield* Effect.tryPromise({
      try: () => fs.readFile(jsonPath, 'utf8'),
      catch: (e) => new FileSystemError({ message: `Failed to read ${jsonPath}`, cause: e }),
    });

    const data: IconifyJSON = yield* Effect.try({
      try: () => JSON.parse(rawContent),
      catch: (e) => new JsonParseError({ message: `Failed parsing ${jsonPath}`, cause: e }),
    });

    const info = yield* fetchIconSetInfo(jsonDir, prefix, data.info);

    if (info?.license) {
      const licenseStr = info.license.spdx
        ? `${info.license.title} (SPDX: ${info.license.spdx})`
        : info.license.title;
      const authorStr = info.author?.name ? ` by ${info.author.name}` : '';
      log.ok(`License for ${colors.bold(prefix)}: ${colors.dim(licenseStr)}${authorStr}`);
      if (info.license.url) {
        console.log(`     ${colors.dim(`└─ URL: ${info.license.url}`)}`);
      }
    } else {
      log.warn(`No explicit license info found for ${prefix}. Using default MIT notice.`);
    }

    const globalWidth = data.width || 24;
    const globalHeight = data.height || 24;
    const rawIconsMap = new Map<string, IconifyIcon & { name: string }>();

    for (const [name, iconData] of Object.entries(data.icons || {})) {
      rawIconsMap.set(name, { ...iconData, name });
    }

    // Resolve aliases recursively
    let aliasAdded = true;
    while (aliasAdded) {
      aliasAdded = false;
      for (const [name, aliasData] of Object.entries(data.aliases || {})) {
        if (!rawIconsMap.has(name) && rawIconsMap.has(aliasData.parent)) {
          const parentData = rawIconsMap.get(aliasData.parent)!;
          rawIconsMap.set(name, { ...parentData, ...aliasData, name });
          aliasAdded = true;
        }
      }
    }

    const subSets = partitionIconSet(prefix, rawIconsMap);

    yield* Effect.forEach(
      subSets,
      (subSet) =>
        Effect.gen(function*() {
          const subPrefix = subSet.subPrefix;
          const subInfo = getSubInfo(info, prefix, subPrefix);
          const variant = getVariant(prefix, subPrefix);
          const subIcons = subSet.icons;

          const packageDir = join(baseOutDir, `iconset-${subPrefix}`);
          const libDir = join(packageDir, 'lib');
          const libIconsDir = join(libDir, 'icons');
          const typesDir = join(packageDir, 'lib-types');
          const typesIconsDir = join(typesDir, 'icons');
          const previewDir = join(packageDir, '..', '..', 'assets', 'iconset-preview');

          yield* Effect.tryPromise({
            try: () =>
              Promise.all([
                fs.mkdir(libIconsDir, { recursive: true }),
                fs.mkdir(typesIconsDir, { recursive: true }),
                fs.mkdir(previewDir, { recursive: true }),
              ]),
            catch: (e) => new FileSystemError({ message: 'Failed creating target directories', cause: e }),
          });

          // Write individual icon module files
          yield* Effect.forEach(
            Array.from(subIcons.values()),
            (icon) =>
              Effect.gen(function*() {
                const { body, viewBox } = prepareIconView(icon, globalWidth, globalHeight);
                const escapedBody = body.replace(/`/g, '\\`');

                const mjs = templates.iconMjs(escapedBody, viewBox);
                const cjs = templates.iconCjs(escapedBody, viewBox);
                const dts = templates.iconDts();

                yield* Effect.tryPromise({
                  try: () =>
                    Promise.all([
                      fs.writeFile(join(libIconsDir, `${icon.name}.mjs`), mjs, 'utf8'),
                      fs.writeFile(join(libIconsDir, `${icon.name}.cjs`), cjs, 'utf8'),
                      fs.writeFile(join(typesIconsDir, `${icon.name}.d.ts`), dts, 'utf8'),
                    ]),
                  catch: (e) =>
                    new FileSystemError({
                      message: `Failed to write icon ${icon.name} files`,
                      cause: e,
                    }),
                });
              }),
            { concurrency: 200 }
          );

          const iconSetName = `${toPascalCase(subPrefix)}IconSet`;
          const iconNamesType = `${toPascalCase(subPrefix)}IconName`;
          const iconNames = Array.from(subIcons.keys());
          const iconCount = iconNames.length;

          // Collect unique sample icons for SVG previews
          const sampleData: SampleIconData[] = iconNames
            .slice(0, 34)
            .map((name) => {
              const icon = subIcons.get(name);
              if (!icon) return null;
              const { body, viewBox } = prepareIconView(icon, globalWidth, globalHeight);
              return { name, body, viewBox };
            })
            .filter((item): item is SampleIconData => item !== null);

          const namesUnion = iconNames.map((name) => `  | '${name}'`).join('\n');
          const keysArrayString = JSON.stringify(iconNames);

          // Write package entrypoints and metadata
          yield* Effect.tryPromise({
            try: () =>
              Promise.all([
                fs.writeFile(
                  join(libDir, 'index.mjs'),
                  templates.indexMjs(iconSetName, subPrefix),
                  'utf8'
                ),
                fs.writeFile(
                  join(libDir, 'index.cjs'),
                  templates.indexCjs(iconSetName, subPrefix, keysArrayString),
                  'utf8'
                ),
                fs.writeFile(
                  join(typesDir, 'index.d.ts'),
                  templates.indexDts(iconSetName, iconNamesType, subPrefix, namesUnion),
                  'utf8'
                ),
                fs.writeFile(
                  join(packageDir, 'package.json'),
                  JSON.stringify(templates.packageJson(subPrefix, version, iconCount, subInfo), null, 2) + '\n',
                  'utf8'
                ),
                fs.writeFile(
                  join(packageDir, 'README.md'),
                  templates.readme(subPrefix, iconCount, subInfo, sampleData.length > 0, version, variant),
                  'utf8'
                ),
                fs.writeFile(
                  join(packageDir, 'LICENSE'),
                  templates.license(subPrefix, subInfo),
                  'utf8'
                ),
                fs.writeFile(
                  join(previewDir, `iconset-${subPrefix}.svg`),
                  templates.previewSvg(subPrefix, iconCount, sampleData, subInfo, variant),
                  'utf8'
                ),
              ]),
            catch: (e) =>
              new FileSystemError({
                message: `Failed writing deployment files for iconset-${subPrefix}`,
                cause: e,
              }),
          });

          log.ok(`Generated ready-to-publish library @onwo/iconset-${subPrefix} (${iconCount} icons)`);
        }),
      { concurrency: 1 }
    );
  }).pipe(
    Effect.catchAll((err) =>
      Effect.sync(() => log.error(`Failed processing ${file}: ${err.message}`))
    )
  );
