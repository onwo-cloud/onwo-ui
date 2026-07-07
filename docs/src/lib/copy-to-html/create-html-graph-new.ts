import {
  type SerializedNode,
  type CreateHtmlGraphOptions,
  type HtmlGraph,
} from './create-html-graph';

const collectedVars = new Map<string, string>();

/**
 * STRICT ALLOWLIST: Only visual properties explicitly supported by Satori.
 *
 * CRITICAL OMISSIONS FOR ABSOLUTE MAPPING:
 * - `display`: Enforced manually.
 * - `justify-content`, `align-items`, `gap`, `flex-*`: Redundant & conflict-prone.
 * - `margin-*`, `padding-*`: Handled automatically by `getBoundingClientRect()`.
 *   Including padding shifts absolute children in Satori, breaking the layout.
 */
const SATORI_VISUAL_PROPS = new Set([
  // Typography
  'color',
  'font-family',
  'font-size',
  'font-weight',
  'font-style',
  'tab-size',
  'text-align',
  'text-indent',
  'text-transform',
  'text-overflow',
  'text-decoration',
  'text-decoration-line',
  'text-decoration-style',
  'text-decoration-color',
  'text-shadow',
  'line-height',
  'letter-spacing',
  'white-space',
  'word-break',
  'text-wrap',
  // Backgrounds
  'background-color',
  'background-image',
  'background-position',
  'background-size',
  'background-clip',
  'background-repeat',
  // Borders
  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'border-style',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  // Box Effects
  'object-fit',
  'object-position',
  'opacity',
  'box-shadow',
  'overflow',
  'filter',
  'clip-path',
  'line-clamp',
  '-webkit-line-clamp',
  'mask-image',
  'mask-position',
  'mask-size',
  'mask-repeat',
  '-webkit-text-stroke-width',
  '-webkit-text-stroke-color',
  // SVG styling
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-dasharray',
  'stroke-dashoffset',
  'vector-effect',
]);

// Properties that crash Satori with NaN when set to "none"
const INVALID_SATORI_NONE_PROPS = new Set([
  'box-shadow',
  'filter',
  'mask-image',
  'background-image',
  'clip-path',
]);

const SVG_ATTR_MAP: Record<string, string> = {
  viewbox: 'viewBox',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};

export function createHtmlGraphNew(
  element: HTMLElement,
  options: CreateHtmlGraphOptions = {},
): HtmlGraph | null {
  try {
    collectedVars.clear();

    const rootRect = element.getBoundingClientRect();
    const nodes = serializeNodeToAbsoluteGraph(element, true, rootRect, null, options);

    if (nodes.length === 0) return null;

    const graph: HtmlGraph = { root: nodes[0] };
    if (options.preserveVars && collectedVars.size > 0) {
      graph.variables = Object.fromEntries(collectedVars.entries());
    }

    return graph;
  } catch (err) {
    console.error('Failed to generate absolute HTML graph:', err);
    return null;
  }
}

function serializeNodeToAbsoluteGraph(
  node: Node,
  isRoot: boolean,
  parentRect: DOMRect | null,
  parentComputed: CSSStyleDeclaration | null,
  options: CreateHtmlGraphOptions,
): SerializedNode[] {
  // --- 1. HANDLE TEXT NODES WITH ABSOLUTE WRAPPERS ---
  if (node.nodeType === Node.TEXT_NODE) {
    const textVal = formatTextNode(node as Text);
    if (!textVal) return [];

    const range = document.createRange();
    range.selectNode(node);
    const rect = range.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      return [{ type: 'text', text: textVal }];
    }

    const styles: Record<string, string> = {
      display: 'flex',
      position: 'absolute',
      margin: '0px',
      'white-space': 'pre',
      'align-items': 'center', // Keep text perfectly centered in its absolute box
      'justify-content': 'center',
    };

    if (parentRect && parentComputed) {
      const parentBorderLeft = parseFloat(parentComputed.borderLeftWidth) || 0;
      const parentBorderTop = parseFloat(parentComputed.borderTopWidth) || 0;

      let logicalTop = rect.top;
      let logicalHeight = rect.height;

      // Compensate for line-height difference vs physical ink size
      const lhStr = parentComputed.getPropertyValue('line-height');
      let lh = parseFloat(lhStr);
      if (isNaN(lh)) {
        const fs = parseFloat(parentComputed.getPropertyValue('font-size')) || 16;
        lh = fs * 1.2;
      }
      if (lh > rect.height) {
        logicalTop -= (lh - rect.height) / 2;
        logicalHeight = lh;
      }

      const absoluteLeft = rect.left - parentRect.left - parentBorderLeft;
      const absoluteTop = logicalTop - parentRect.top - parentBorderTop;

      styles['left'] = `${normalizePxValues(String(absoluteLeft))}px`;
      styles['top'] = `${normalizePxValues(String(absoluteTop))}px`;
      styles['width'] = `${normalizePxValues(String(rect.width))}px`;
      styles['height'] = `${normalizePxValues(String(logicalHeight))}px`;

      // Pass typographic properties to ensure Satori correctly measures the wrapper child
      const inheritedProps = [
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'letter-spacing',
        'line-height',
        'color',
        'text-transform',
        'text-shadow',
      ];
      for (const prop of inheritedProps) {
        const val = parentComputed.getPropertyValue(prop);
        if (val) styles[prop] = postProcessStyleValue(val, options.convertOklch ?? true);
      }
    }

    return [
      {
        type: 'element',
        tagName: 'div',
        styles,
        children: [{ type: 'text', text: textVal }],
      },
    ];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return [];

  const el = node as HTMLElement | SVGElement;
  const tagName = el.tagName.toLowerCase();
  const computed = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();

  // Skip completely hidden elements
  if (
    computed.display === 'none' ||
    computed.opacity === '0' ||
    ['script', 'style', 'meta', 'link', 'noscript', 'iframe'].includes(tagName)
  ) {
    return [];
  }

  const isSvgNode = el instanceof SVGElement;
  const isSvgRoot = isSvgNode && tagName === 'svg';
  const isInsideSvg = isSvgNode && !isSvgRoot;

  // --- 2. Compute Exact Positioning & Dimensions ---
  const styles: Record<string, string> = {};

  if (!isInsideSvg) {
    styles['display'] = 'flex';
    styles['position'] = 'absolute';
    styles['box-sizing'] = 'border-box';
    styles['margin'] = '0px';

    if (isRoot) {
      styles['left'] = '0px';
      styles['top'] = '0px';
    } else if (parentRect && parentComputed) {
      const parentBorderLeft = parseFloat(parentComputed.borderLeftWidth) || 0;
      const parentBorderTop = parseFloat(parentComputed.borderTopWidth) || 0;

      const absoluteLeft = rect.left - parentRect.left - parentBorderLeft;
      const absoluteTop = rect.top - parentRect.top - parentBorderTop;

      styles['left'] = `${normalizePxValues(String(absoluteLeft))}px`;
      styles['top'] = `${normalizePxValues(String(absoluteTop))}px`;
    }

    styles['width'] = `${normalizePxValues(String(rect.width))}px`;
    styles['height'] = `${normalizePxValues(String(rect.height))}px`;
  }

  // --- 3. Extract and Sanitize Supported Styles ---
  for (let i = 0; i < computed.length; i++) {
    const prop = computed[i];

    if (!SATORI_VISUAL_PROPS.has(prop) && !prop.startsWith('--')) continue;

    let val = computed.getPropertyValue(prop);
    if (!val) continue;

    // Fix invalid CSS features for Satori
    if (val.includes('color-mix')) continue;
    if (val === 'none' && INVALID_SATORI_NONE_PROPS.has(prop)) continue;
    if (val === 'rgba(0, 0, 0, 0)') val = 'transparent';
    if (prop.endsWith('-width') && val === '0px') continue;

    if (val.includes('var(') && /,\s*[a-zA-Z]+(?!\))/.test(val)) {
      val = val.replace(/,\s*([a-zA-Z-]+)\s*\)/g, ', 16px)');
    }

    const processedVal = postProcessStyleValue(val, options.convertOklch ?? true);

    if (styles[prop] === undefined) {
      styles[prop] = processedVal;
    }
  }

  // --- 4. Gather Valid Attributes ---
  const attributes: Record<string, string> = {};
  Array.from(el.attributes).forEach((attr) => {
    let name = attr.name.toLowerCase();
    const val = attr.value;

    if (['class', 'style'].includes(name)) return;

    if (isSvgNode) name = SVG_ATTR_MAP[name] || name;
    attributes[name] = val;
  });

  if (tagName === 'img') attributes['src'] = (el as HTMLImageElement).src;

  // --- 5. Process Children ---
  const childrenNodes: SerializedNode[] = [];
  const childNodes = el.shadowRoot
    ? Array.from(el.shadowRoot.childNodes)
    : Array.from(el.childNodes);

  for (const child of childNodes) {
    if (child instanceof HTMLSlotElement) {
      child.assignedNodes({ flatten: true }).forEach((assigned) => {
        childrenNodes.push(
          ...serializeNodeToAbsoluteGraph(assigned, false, rect, computed, options),
        );
      });
    } else {
      childrenNodes.push(...serializeNodeToAbsoluteGraph(child, false, rect, computed, options));
    }
  }

  return [
    {
      type: 'element',
      tagName: isSvgNode ? tagName : 'div',
      attributes,
      styles,
      children: childrenNodes,
    },
  ];
}

// ---------------------------------------------------------------------------
// Formatting & Math Helpers
// ---------------------------------------------------------------------------

function formatTextNode(node: Text): string {
  const text = node.textContent;
  if (!text) return '';
  const cleanText = text.replace(/[\t\n\r\f ]+/g, ' ').trim();
  return cleanText ? cleanText : '';
}

function normalizePxValues(value: string): string {
  const pxRegex = /\b([+-]?[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?)\s*px\b/gi;
  return value.replace(pxRegex, (_, numStr) => {
    const num = parseFloat(numStr);
    if (isNaN(num)) return _;
    return `${Math.round(num * 100) / 100}px`;
  });
}

function oklabToSrgb(L: number, a: number, b: number): [number, number, number] {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let b_val = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const gamma = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

  r = Math.max(0, Math.min(1, gamma(r)));
  g = Math.max(0, Math.min(1, gamma(g)));
  b_val = Math.max(0, Math.min(1, gamma(b_val)));

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b_val * 255)];
}

function convertOklchAndOklabToHex(colorStr: string): string {
  const clean = colorStr.trim().toLowerCase().replace(/,/g, ' ');
  const oklchMatch = clean.match(
    /oklch\(\s*([0-9.]+%?)\s+([0-9.]+%?)\s+([0-9.-]+(?:deg|rad|turn)?)\s*(?:\/\s*([0-9.]+%?))?\s*\)/,
  );

  if (oklchMatch) {
    const L = oklchMatch[1].endsWith('%')
      ? parseFloat(oklchMatch[1]) / 100
      : parseFloat(oklchMatch[1]);
    const C = oklchMatch[2].endsWith('%')
      ? parseFloat(oklchMatch[2]) / 100
      : parseFloat(oklchMatch[2]);
    let H = parseFloat(oklchMatch[3]);
    if (oklchMatch[3].includes('rad')) H = (H * 180) / Math.PI;
    else if (oklchMatch[3].includes('turn')) H = H * 360;

    const alpha =
      oklchMatch[4] !== undefined
        ? oklchMatch[4].endsWith('%')
          ? parseFloat(oklchMatch[4]) / 100
          : parseFloat(oklchMatch[4])
        : 1;
    const hRad = (H * Math.PI) / 180;
    const a = C * Math.cos(hRad);
    const b = C * Math.sin(hRad);
    const [r, g, b_val] = oklabToSrgb(L, a, b);

    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return alpha >= 1
      ? `#${toHex(r)}${toHex(g)}${toHex(b_val)}`
      : `#${toHex(r)}${toHex(g)}${toHex(b_val)}${toHex(Math.round(alpha * 255))}`;
  }

  return colorStr;
}

function postProcessStyleValue(val: string, convertOklch: boolean): string {
  let processed = val.replaceAll('"', "'");
  processed = normalizePxValues(processed);
  if (convertOklch) {
    processed = processed.replace(/(oklch|oklab)\([^)]+\)/g, (match) => {
      try {
        return convertOklchAndOklabToHex(match);
      } catch {
        return match;
      }
    });
  }
  return processed;
}
