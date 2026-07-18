import type { IconifyInfo } from '../types.js';

export interface SampleIconData {
  name: string;
  body: string;
  viewBox: string;
}

export const toPascalCase = (str: string): string =>
  str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());

export const templates = {
  iconMjs: (body: string, viewBox: string) =>
    `export default{body:\`${body}\`,viewBox:'${viewBox}'};`,

  iconCjs: (body: string, viewBox: string) =>
    `"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nconst _default = { body: \`${body}\`, viewBox: '${viewBox}' };\nexports.default = _default;\n`,

  iconDts: () =>
    `declare const _default:{body:string;viewBox:string};\nexport default _default;\n`,

  indexMjs: (setName: string, prefix: string) =>
    `const modules = import.meta.glob('./icons/*.mjs', { import: 'default' });

export const ${setName} = {
  prefix: '${prefix}',
  name: '${prefix}',
  loaders: Object.fromEntries(
    Object.entries(modules).map(([path, load]) => [
      path.slice(8, -4),
      load
    ])
  )
};
`,

  indexCjs: (setName: string, prefix: string, keysJson: string) =>
    `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const keys = ${keysJson};
const keysSet = new Set(keys);

exports.${setName} = {
  prefix: '${prefix}',
  name: '${prefix}',
  loaders: new Proxy({}, {
    get: (_, prop) => {
      if (typeof prop === 'string' && keysSet.has(prop)) {
        return () => import(\`./icons/\${prop}.mjs\`).then(m => m.default);
      }
      return undefined;
    },
    has: (_, prop) => keysSet.has(prop),
    ownKeys: () => keys,
    getOwnPropertyDescriptor: (_, prop) => {
      if (typeof prop === 'string' && keysSet.has(prop)) {
        return {
          enumerable: true,
          configurable: true,
          writable: true,
          value: () => import(\`./icons/\${prop}.mjs\`).then(m => m.default)
        };
      }
      return undefined;
    }
  })
};
`,

  indexDts: (setName: string, typeName: string, prefix: string, unionTypes: string) =>
    `export type ${typeName} =
${unionTypes};

export interface IconData {
  body: string;
  viewBox: string;
}

export const ${setName}: {
  __names: ${typeName};
  prefix: '${prefix}';
  name: '${prefix}';
  loaders: Record<${typeName}, () => Promise<IconData>>;
};
`,

  previewSvg: (
    prefix: string,
    iconCount: number,
    samples: SampleIconData[],
    info?: IconifyInfo,
    variant?: string
  ) => {
    const cols = 10;
    const rows = 4;
    const cellW = 48;
    const cellH = 49.5;
    const iconTargetSize = 18;

    const licenseSpdx = info?.license?.spdx || info?.license?.title || 'MIT';
    const displayTitle = (info?.name || prefix).toLowerCase();
    const formattedCount = iconCount.toLocaleString('en-US');

    let titleFontSize = '20px';
    if (displayTitle.length > 22) titleFontSize = '11px';
    else if (displayTitle.length > 18) titleFontSize = '12.5px';
    else if (displayTitle.length > 14) titleFontSize = '14.5px';
    else if (displayTitle.length > 10) titleFontSize = '16.5px';

    const visibleCells: Array<{ r: number; c: number; icon: SampleIconData }> = [];
    let iconIdx = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (r >= 2 && c >= 7) continue; // Skip overlay quadrant
        if (iconIdx >= samples.length) break;

        const icon = samples[iconIdx];
        if (icon) {
          visibleCells.push({ r, c, icon });
          iconIdx++;
        }
      }
    }

    const renderedCells = visibleCells.map(({ r, c, icon }) => {
      const cx = c * cellW;
      const cy = r * cellH;
      const labelX = cx + 2;
      const labelY = cy + cellH - 3;
      const shortName = icon.name.length > 15 ? `${icon.name.slice(0, 14)}…` : icon.name;

      const [vLeft, vTop, vWidth, vHeight] = icon.viewBox
        .split(' ')
        .map((n) => parseFloat(n) || 0);

      const w = vWidth || 24;
      const h = vHeight || 24;
      const scaleX = iconTargetSize / w;
      const scaleY = iconTargetSize / h;
      const translateX = cx + (cellW - iconTargetSize) / 2;
      const translateY = cy + (cellH - iconTargetSize) / 2;

      return `  <!-- Cell: ${icon.name} -->
  <text x="${labelX}" y="${labelY.toFixed(2)}" class="label">${shortName}</text>
  <g transform="translate(${translateX.toFixed(2)}, ${translateY.toFixed(2)}) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)}) translate(${-vLeft}, ${-vTop})" color="#17181C">
    ${icon.body}
  </g>`;
    });

    const metaParts = [
      variant ? variant : null,
      licenseSpdx,
      `${formattedCount} icons`,
    ].filter(Boolean);

    const metaText = metaParts.join(' · ');

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 198" width="480" height="198">
  <style>
    .bg { fill: #FFFFFF; stroke: #E0E0E0; }
    .grid-line { stroke: #E0E0E0; stroke-width: 1; }
    .label { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 6px; font-weight: 500; fill: #B3B5BA; }
    .overlay-cat { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 9.5px; font-weight: 400; fill: #797C82; }
    .overlay-title { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: ${titleFontSize}; font-weight: 700; fill: #17181C; }
    .overlay-meta { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 9.5px; font-weight: 400; fill: #797C82; }
  </style>

  <rect width="480" height="198" class="bg" />

  <line x1="0" y1="49.5" x2="480" y2="49.5" class="grid-line" />
  <line x1="0" y1="99" x2="336" y2="99" class="grid-line" />
  <line x1="0" y1="148.5" x2="336" y2="148.5" class="grid-line" />
  <line x1="48" y1="0" x2="48" y2="198" class="grid-line" />
  <line x1="96" y1="0" x2="96" y2="198" class="grid-line" />
  <line x1="144" y1="0" x2="144" y2="198" class="grid-line" />
  <line x1="192" y1="0" x2="192" y2="198" class="grid-line" />
  <line x1="240" y1="0" x2="240" y2="198" class="grid-line" />
  <line x1="288" y1="0" x2="288" y2="198" class="grid-line" />
  <line x1="336" y1="0" x2="336" y2="99" class="grid-line" />
  <line x1="384" y1="0" x2="384" y2="99" class="grid-line" />
  <line x1="432" y1="0" x2="432" y2="99" class="grid-line" />
  <line x1="336" y1="99" x2="480" y2="99" class="grid-line" />
  <line x1="336" y1="99" x2="336" y2="198" class="grid-line" />

${renderedCells.join('\n')}

  <text x="347" y="116.744" class="overlay-cat">@onwo/iconset-${prefix}</text>
  <text x="348" y="139.738" class="overlay-title">${displayTitle}</text>
  <text x="351" y="190.744" class="overlay-meta">${metaText}</text>
</svg>
`;
  },

  packageJson: (prefix: string, version: string, iconCount: number, info?: IconifyInfo) => ({
    name: `@onwo/iconset-${prefix}`,
    version,
    description: `Optimized, framework-agnostic icon set for ${info?.name || prefix} (${iconCount} icons)`,
    type: 'module',
    private: false,
    author: 'Emilien Jegou (https://emje.dev/)',
    license: info?.license?.spdx || info?.license?.title || 'MIT',
    homepage: 'https://ui.onwo.cloud/',
    repository: {
      type: 'git',
      url: 'https://github.com/onwo-cloud/onwo-ui',
      directory: 'packages/icons',
    },
    bugs: {
      url: 'https://github.com/onwo-cloud/onwo-ui/issues',
    },
    keywords: ['iconset', 'icons', 'svg', prefix, 'onwo', 'icon-library'],
    main: './lib/index.mjs',
    module: './lib/index.mjs',
    types: './lib-types/index.d.ts',
    exports: {
      '.': {
        types: './lib-types/index.d.ts',
        import: './lib/index.mjs',
        require: './lib/index.cjs',
      },
      './lib/icons/*.mjs': './lib/icons/*.mjs',
      './lib/icons/*.cjs': './lib/icons/*.cjs',
    },
    files: ['lib', 'lib-types', 'README.md', 'LICENSE'],
    sideEffects: false,
  }),

  readme: (
    prefix: string,
    iconCount: number,
    info?: IconifyInfo,
    hasPreview = true,
    version?: string,
    variant?: string
  ) => {
    const setName = info?.name || prefix;
    const pascalName = `${toPascalCase(prefix)}IconSet`;
    const licenseTitle = info?.license?.title || info?.license?.spdx || 'MIT';
    const licenseLink = info?.license?.url
      ? `[${licenseTitle}](${info.license.url})`
      : licenseTitle;
    const authorName = info?.author?.name;
    const authorLink = authorName
      ? info?.author?.url
        ? `[${authorName}](${info.author.url})`
        : authorName
      : null;

    const previewUrl = `https://raw.githubusercontent.com/onwo-cloud/onwo-ui/HEAD/packages/icons/assets/iconset-preview/iconset-${prefix}.svg`;
    const previewHeader = hasPreview ? `\n![Preview](${previewUrl})\n\n` : '\n\n';

    return `# @onwo/iconset-${prefix}
${previewHeader}**${setName}** iconset featuring **${iconCount} icons**.

${version ? `**Version:** \`v${version}\`\n` : ''}${variant ? `**Variant:** \`${variant}\`\n` : ''}${authorLink ? `**Original Author:** ${authorLink}\n` : ''}**License:** ${licenseLink}

Icons provided and cleaned by [Iconify](https://github.com/iconify/icon-sets).

## Usage

\`\`\`typescript
import { ${pascalName} } from '@onwo/iconset-${prefix}';

const icon = await ${pascalName}.loaders['home']?.();
console.log(icon?.body, icon?.viewBox);
\`\`\`

## 📄 License

Icons in this library are licensed under **${licenseLink}**. See [LICENSE](./LICENSE) for details.
`;
  },

  license: (prefix: string, info?: IconifyInfo) => {
    const licenseName = info?.license?.title || info?.license?.spdx || 'MIT';
    const authorName = info?.author?.name || 'the original icon set authors';
    const authorUrl = info?.author?.url ? ` (${info.author.url})` : '';
    const licenseUrl = info?.license?.url ? `\nLicense Details: ${info.license.url}` : '';

    return `License Notice for @onwo/iconset-${prefix}

The icons included in this package were created by ${authorName}${authorUrl} and are distributed under the ${licenseName} license.${licenseUrl}

Icons in this library have been cleaned and gathered by Iconify: https://github.com/iconify/icon-sets

Package build and distribution setup © ${new Date().getFullYear()} ONWO (MIT License).
For original icon terms and conditions, please refer to the license link above.
`;
  },
};
