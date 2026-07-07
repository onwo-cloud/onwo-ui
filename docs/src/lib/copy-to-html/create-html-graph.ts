export interface CreateHtmlGraphOptions {
  /**
   * By default, style definitions for borders with 0px width (e.g. border-style: solid)
   * are completely stripped. Set this to true to force include them in the output.
   */
  includeEmptyBorders?: boolean;

  /**
   * If true, collects all active CSS custom properties (variables) from the element tree
   * and preserves them inside the graph variables record.
   */
  preserveVars?: boolean;

  /**
   * If true, converts OKLCH and OKLAB color values into standard Hex/RGBA formats.
   */
  convertOklch?: boolean;
}

export interface SerializedNode {
  type: 'element' | 'text';
  tagName?: string;
  attributes?: Record<string, string>;
  styles?: Record<string, string>;
  children?: SerializedNode[];
  text?: string;
}

export interface HtmlGraph {
  root: SerializedNode;
  variables?: Record<string, string>;
}

// Thread-safe collection map cleared at the start of each serialization run
const collectedVars = new Map<string, string>();

/**
 * Pre-generates the serializable JSON graph representation of the target DOM element.
 */
export function createHtmlGraph(
  element: HTMLElement,
  options: CreateHtmlGraphOptions = {},
): HtmlGraph | null {
  try {
    collectedVars.clear();

    const nodes = serializeNodeToGraph(element, true, undefined, options);
    if (nodes.length === 0) return null;

    const graph: HtmlGraph = {
      root: nodes[0],
    };

    if (options.preserveVars && collectedVars.size > 0) {
      graph.variables = Object.fromEntries(collectedVars.entries());
    }

    return graph;
  } catch (err) {
    console.error('Failed to generate HTML graph:', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// DOM Whitelisting & Graph Construction
// ---------------------------------------------------------------------------

let CSS_PROPS: string[] = [];

function getCSSProps(): string[] {
  if (CSS_PROPS.length > 0) return CSS_PROPS;
  CSS_PROPS = Array.from(window.getComputedStyle(document.body));
  CSS_PROPS.push(
    'aspect-ratio',
    'paint-order',
    'text-underline-offset',
    'text-decoration-thickness',
    'transform-box',
    '-webkit-text-stroke-color',
    '-webkit-text-stroke-width',
    'overflow',
  );
  CSS_PROPS = Array.from(new Set(CSS_PROPS));
  return CSS_PROPS;
}

const MANDATORY_PROPS = ['display', 'appearance', 'box-sizing'];
const ALLOWED_HTML_ATTRS = new Set(['style', 'src', 'alt']);

const ALLOWED_SVG_ATTRS = new Set([
  'viewbox',
  'preserveaspectratio',
  'd',
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
  'points',
  'x',
  'y',
  'x1',
  'y1',
  'x2',
  'y2',
  'r',
  'cx',
  'cy',
  'rx',
  'ry',
  'transform',
  'vector-effect',
  'width',
  'height',
]);

const REDUNDANT_CSS_PROPS = new Set([
  '-webkit-text-fill-color',
  '-webkit-text-stroke-color',
  '-webkit-text-stroke-width',
  '-webkit-tap-highlight-color',
  'caret-color',
  'column-rule-color',
  'text-emphasis-color',
  'unicode-bidi',
  'text-rendering',
]);

function isAllowedAttribute(name: string, isSvg: boolean): boolean {
  const lower = name.toLowerCase();
  if (isSvg) {
    return ALLOWED_SVG_ATTRS.has(lower) || ALLOWED_HTML_ATTRS.has(lower);
  }
  return ALLOWED_HTML_ATTRS.has(lower);
}

function serializeNodeToGraph(
  node: Node,
  isRoot = false,
  rootRect?: DOMRect,
  options: CreateHtmlGraphOptions = {},
): SerializedNode[] {
  if (node.nodeType === Node.TEXT_NODE) {
    const textVal = formatTextNode(node as Text);
    if (!textVal) return [];
    return [{ type: 'text', text: textVal }];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return [];

  const el = node as HTMLElement | SVGElement;
  const tagName = el.tagName.toLowerCase();
  const computed = window.getComputedStyle(el);

  const isAbsoluteOrFixed = ['absolute', 'fixed'].includes(computed.position);
  const parentStyle = el.parentElement ? window.getComputedStyle(el.parentElement) : null;
  const isBlockOrInlineBlock =
    !!parentStyle && ['block', 'inline-block'].includes(parentStyle.display);
  const isZeroSize = parseFloat(computed.height) === 0 || parseFloat(computed.width) === 0;
  const hasPadding =
    parseFloat(computed.paddingTop) > 0 ||
    parseFloat(computed.paddingRight) > 0 ||
    parseFloat(computed.paddingBottom) > 0 ||
    parseFloat(computed.paddingLeft) > 0;
  const isOverflowHidden = computed.overflowX !== 'visible' && computed.overflowY !== 'visible';

  const hiddenBySizing =
    isZeroSize && (isAbsoluteOrFixed || isBlockOrInlineBlock) && !hasPadding && isOverflowHidden;
  const hiddenByDisplay = computed.display === 'none';
  const parentElement =
    el.parentElement ??
    (el.parentNode instanceof ShadowRoot ? (el.parentNode as ShadowRoot).host : null);
  const hiddenByOpacity =
    computed.opacity === '0' && (isAbsoluteOrFixed || parentElement?.childElementCount === 1);
  const isIgnoredTag = ['script', 'style', 'meta', 'link', 'noscript', 'iframe'].includes(tagName);

  const isInsideSvg = el.parentElement instanceof SVGElement || el.closest?.('svg') !== null;
  const isVisible = typeof el.checkVisibility === 'function' ? el.checkVisibility() : true;
  const isEffectivelyHidden = !(computed.display === 'contents') && !isInsideSvg && !isVisible;

  if (hiddenBySizing || hiddenByDisplay || hiddenByOpacity || isIgnoredTag || isEffectivelyHidden)
    return [];

  const elRect = el.getBoundingClientRect();
  if (isRoot) rootRect = elRect;

  const hasDimensions = elRect.width > 0 && elRect.height > 0;
  if (!isRoot && rootRect && hasDimensions) {
    const isOutsideBounds =
      elRect.right <= rootRect.left ||
      elRect.left >= rootRect.right ||
      elRect.bottom <= rootRect.top ||
      elRect.top >= rootRect.bottom;
    if (isOutsideBounds) return [];
  }

  const childrenNodes: SerializedNode[] = [];
  const isSvgNode = el instanceof SVGElement;
  const isGraphicsElement = !isSvgNode || el instanceof SVGGraphicsElement;

  if (isGraphicsElement) {
    const beforeStyles = computeDiffStyles(el, {
      pseudo: '::before',
      includeEmptyBorders: options.includeEmptyBorders,
      preserveVars: options.preserveVars,
      convertOklch: options.convertOklch,
    });
    if (Object.keys(beforeStyles).length > 0 && !isHiddenPseudo(beforeStyles)) {
      const content = getPseudoContent(beforeStyles);
      delete beforeStyles['content'];
      childrenNodes.push({
        type: 'element',
        tagName: 'div',
        styles: beforeStyles,
        children: [{ type: 'text', text: content }],
      });
    }
  }

  const diffStyles = computeDiffStyles(el, {
    isRoot,
    includeEmptyBorders: options.includeEmptyBorders,
    preserveVars: options.preserveVars,
    convertOklch: options.convertOklch,
  });

  const attributes = Array.from(el.attributes)
    .map((attr) => [attr.name.toLowerCase(), attr.value || ''])
    .filter(([name]) => isAllowedAttribute(name, isSvgNode));

  const childNodes = el.shadowRoot
    ? Array.from(el.shadowRoot.childNodes)
    : Array.from(el.childNodes);

  for (const child of childNodes) {
    const targets: Node[] = [];

    if (child instanceof HTMLSlotElement) {
      targets.push(...child.assignedNodes({ flatten: true }));
    } else if (child instanceof SVGElement && child.tagName.toLowerCase() === 'use') {
      const href =
        (child.getAttribute('href') || child.getAttribute('xlink:href'))?.replace('#', '') || '';
      const rootNode = child.getRootNode();
      const refEl =
        href && (rootNode instanceof Document || rootNode instanceof ShadowRoot)
          ? (rootNode as Document).getElementById(href)
          : null;

      if (refEl) {
        if (['symbol', 'svg'].includes(refEl.tagName.toLowerCase())) {
          const keepAttrs = new Set(['viewbox', 'preserveaspectratio']);
          for (let i = 0; i < refEl.attributes.length; i++) {
            const attrName = refEl.attributes[i].name.toLowerCase();
            if (isAllowedAttribute(attrName, true)) {
              if (keepAttrs.has(attrName)) {
                const existingIdx = attributes.findIndex((a) => a[0] === attrName);
                if (existingIdx >= 0) attributes.splice(existingIdx, 1);
                attributes.push([attrName, refEl.getAttribute(attrName) || '']);
              } else if (!el.hasAttribute(attrName)) {
                attributes.push([attrName, refEl.getAttribute(attrName) || '']);
              }
            }
          }
          targets.push(...Array.from(refEl.childNodes));
        } else targets.push(refEl);
      }
    } else if (child) {
      targets.push(child);
    }

    for (const target of targets) {
      childrenNodes.push(...serializeNodeToGraph(target, false, rootRect, options));
    }
  }

  if (isGraphicsElement) {
    const afterStyles = computeDiffStyles(el, {
      pseudo: '::after',
      includeEmptyBorders: options.includeEmptyBorders,
      preserveVars: options.preserveVars,
      convertOklch: options.convertOklch,
    });
    if (Object.keys(afterStyles).length > 0 && !isHiddenPseudo(afterStyles)) {
      const content = getPseudoContent(afterStyles);
      delete afterStyles['content'];
      childrenNodes.push({
        type: 'element',
        tagName: 'div',
        styles: afterStyles,
        children: [{ type: 'text', text: content }],
      });
    }
  }

  let renderTag = 'div';
  if (isSvgNode) {
    renderTag = tagName;
  } else if (tagName === 'img') {
    renderTag = 'img';
  }

  const finalAttrs: Record<string, string> = {};

  if (el instanceof HTMLImageElement) {
    finalAttrs['src'] = el.src;
    if (!diffStyles['width'] && !diffStyles['height']) {
      diffStyles['width'] = computed.width;
      diffStyles['height'] = computed.height;
    }
  } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    const textVal = el.value || el.placeholder || '';
    if (textVal) {
      childrenNodes.unshift({ type: 'text', text: textVal });
    }
  }

  if (isSvgNode) {
    if (diffStyles['width'] === undefined || diffStyles['width'] === 'auto')
      diffStyles['width'] = computed.width;
    if (diffStyles['height'] === undefined || diffStyles['height'] === 'auto')
      diffStyles['height'] = computed.height;

    attributes.forEach(([name, val]) => {
      if (['class', 'style', 'display', 'overflow'].includes(name) || !val) return;
      if (['fill', 'stroke', 'color'].includes(name)) {
        if (val.startsWith('var(')) val = diffStyles[name] || val;
        else if (val.toLowerCase() === 'currentcolor')
          val = diffStyles[name] ?? diffStyles['color'] ?? val;
      }
      finalAttrs[name] = val;
      if (!['width', 'height'].includes(name)) delete diffStyles[name];
    });
  } else {
    const pushedAttrs = new Set(Object.keys(finalAttrs));
    attributes.forEach(([name, val]) => {
      if (['class', 'style'].includes(name)) return;
      if (!pushedAttrs.has(name)) finalAttrs[name] = val;
    });
  }

  if (Object.keys(diffStyles).length > 0) {
    if (diffStyles['width'] || diffStyles['height']) {
      diffStyles['width'] ??= 'auto';
      diffStyles['height'] ??= 'auto';
    }
  }

  if (isInsideSvg || (isVisible && diffStyles['display'] !== 'contents')) {
    return [
      {
        type: 'element',
        tagName: renderTag,
        attributes: finalAttrs,
        styles: diffStyles,
        children: childrenNodes,
      },
    ];
  } else {
    return childrenNodes;
  }
}

function computeDiffStyles(
  el: Element,
  options: {
    isRoot?: boolean;
    pseudo?: string | null;
    includeEmptyBorders?: boolean;
    preserveVars?: boolean;
    convertOklch?: boolean;
  } = {},
) {
  const {
    isRoot = false,
    pseudo = null,
    includeEmptyBorders = false,
    preserveVars = false,
    convertOklch = false,
  } = options;
  const result: Record<string, string> = {};
  const props = getCSSProps();

  const extractRawStyles = (target: Element) => {
    const map = new Map<string, string>();
    const computedStyle = window.getComputedStyle(target, pseudo);
    const styleMap =
      !pseudo && 'computedStyleMap' in target ? (target as any).computedStyleMap() : null;

    for (const prop of props) {
      if (styleMap) {
        const val = styleMap.get(prop);
        if (val) {
          map.set(prop, val.toString());
          continue;
        }
      }
      const fallback = computedStyle.getPropertyValue(prop);
      if (fallback) map.set(prop, fallback);
    }

    if (preserveVars) {
      const elStyles = window.getComputedStyle(target, pseudo);
      for (let i = 0; i < elStyles.length; i++) {
        const propName = elStyles[i];
        if (propName.startsWith('--')) {
          const varVal = elStyles.getPropertyValue(propName).trim();
          if (varVal) {
            collectedVars.set(propName, varVal);
          }
        }
      }
    }

    return map;
  };

  const elStyles = extractRawStyles(el);

  const dummy = document.createElement('link');
  dummy.textContent = el.textContent;

  dummy.style.setProperty('background-color', 'transparent', 'important');
  dummy.style.setProperty('border-color', 'hotpink', 'important');
  dummy.style.setProperty('border-radius', '0', 'important');
  dummy.style.setProperty('border-width', '0px', 'important');
  dummy.style.setProperty('border-style', 'none', 'important');
  dummy.style.setProperty('box-shadow', 'none', 'important');
  dummy.style.setProperty('color', 'black', 'important');
  dummy.style.setProperty('fill', 'black', 'important');
  dummy.style.setProperty('font-size', '1px', 'important');
  dummy.style.setProperty('font-weight', '400', 'important');
  dummy.style.setProperty('height', 'auto', 'important');
  dummy.style.setProperty('margin', '0', 'important');
  dummy.style.setProperty('overflow', 'visible', 'important');
  dummy.style.setProperty('padding', '0', 'important');
  dummy.style.setProperty('text-align', 'initial', 'important');
  dummy.style.setProperty('width', 'auto', 'important');
  dummy.style.setProperty('z-index', 'auto', 'important');

  if (isRoot) {
    dummy.style.color = 'hotpink';
    dummy.style.lineHeight = '0.1234';
    dummy.style.fontFamily = '"Papyrus"';
    dummy.style.listStyleType = 'initial';
  }

  if (el.parentElement?.lastElementChild === el) {
    el.insertAdjacentElement('afterend', dummy);
  } else {
    el.insertAdjacentElement('beforebegin', dummy);
  }

  const dummyStyles = extractRawStyles(dummy);
  dummy.remove();

  for (const prop of props) {
    const elVal = elStyles.get(prop);
    const dummyVal = dummyStyles.get(prop);

    if (elVal && !elVal.startsWith('--')) {
      if (elVal !== dummyVal || MANDATORY_PROPS.includes(prop)) {
        result[prop] = postProcessStyleValue(elVal, convertOklch);
      }
    }
  }

  // --- POST-DIFF PRUNING ---

  for (const key of Object.keys(result)) {
    if (
      key.includes('-block') ||
      key.includes('-inline') ||
      key === 'inline-size' ||
      key === 'block-size'
    ) {
      delete result[key];
    }
  }

  for (const prop of REDUNDANT_CSS_PROPS) {
    delete result[prop];
  }

  if (!includeEmptyBorders) {
    const hasNoBorder = (side: string) => {
      const width = elStyles.get(`border-${side}-width`);
      const style = elStyles.get(`border-${side}-style`);
      return !width || width === '0px' || style === 'none';
    };

    if (hasNoBorder('top')) {
      delete result['border-top-style'];
      delete result['border-top-color'];
      delete result['border-top-width'];
    }
    if (hasNoBorder('bottom')) {
      delete result['border-bottom-style'];
      delete result['border-bottom-color'];
      delete result['border-bottom-width'];
    }
    if (hasNoBorder('left')) {
      delete result['border-left-style'];
      delete result['border-left-color'];
      delete result['border-left-width'];
    }
    if (hasNoBorder('right')) {
      delete result['border-right-style'];
      delete result['border-right-color'];
      delete result['border-right-width'];
    }
  } else {
    const hasNoBorder = (side: string) =>
      !elStyles.get(`border-${side}-width`) ||
      elStyles.get(`border-${side}-width`) === '0px' ||
      elStyles.get(`border-${side}-style`) === 'none';
    if (hasNoBorder('top')) delete result['border-top-color'];
    if (hasNoBorder('bottom')) delete result['border-bottom-color'];
    if (hasNoBorder('left')) delete result['border-left-color'];
    if (hasNoBorder('right')) delete result['border-right-color'];
  }

  if (
    !elStyles.get('outline-width') ||
    elStyles.get('outline-width') === '0px' ||
    elStyles.get('outline-style') === 'none'
  ) {
    delete result['outline-color'];
  }
  if (!elStyles.get('text-decoration-line') || elStyles.get('text-decoration-line') === 'none') {
    delete result['text-decoration-color'];
  }
  if (!elStyles.get('column-rule-width') || elStyles.get('column-rule-width') === '0px') {
    delete result['column-rule-color'];
  }

  if (el instanceof SVGElement && el.tagName.toLowerCase() !== 'svg') {
    delete result['width'];
    delete result['height'];
  }

  if (isRoot) {
    const rect = el.getBoundingClientRect();
    const wStr = Math.ceil(rect.width) + 'px';
    const hStr = Math.ceil(rect.height) + 'px';

    if (
      rect.width > 200 ||
      rect.height > 200 ||
      result['width']?.includes('%') ||
      result['height']?.includes('%')
    ) {
      result['width'] = wStr;
      result['height'] = hStr;
    }

    if (
      el instanceof HTMLElement &&
      (!elStyles.get('background-color') || elStyles.get('background-color') === 'rgba(0, 0, 0, 0)')
    ) {
      result['background-color'] = postProcessStyleValue(getRootBackgroundColor(el), convertOklch);
    }

    if (result['scrollbar-gutter']?.includes('stable') && el instanceof HTMLElement) {
      const bl = parseFloat(elStyles.get('border-left-width') || '0');
      const br = parseFloat(elStyles.get('border-right-width') || '0');
      const scrollbarWidth = el.offsetWidth - el.clientWidth - bl - br;

      if (scrollbarWidth > 0) {
        const both = result['scrollbar-gutter'].includes('both');
        const dir = elStyles.get('direction') || 'ltr';
        const pr = parseFloat(result['padding-right'] || '0');
        const pl = parseFloat(result['padding-left'] || '0');

        if (dir === 'rtl') {
          result['padding-left'] = postProcessStyleValue(pl + scrollbarWidth + 'px', convertOklch);
          if (both)
            result['padding-right'] = postProcessStyleValue(
              pr + scrollbarWidth + 'px',
              convertOklch,
            );
        } else {
          result['padding-right'] = postProcessStyleValue(pr + scrollbarWidth + 'px', convertOklch);
          if (both)
            result['padding-left'] = postProcessStyleValue(
              pl + scrollbarWidth + 'px',
              convertOklch,
            );
        }
      }
    }
  }

  if ((pseudo === '::after' || pseudo === '::before') && !result['content']) return {};
  if (Object.keys(result).length === 0) return {};

  return result;
}

// ---------------------------------------------------------------------------
// Style and Color Normalization Utilities
// ---------------------------------------------------------------------------

/**
 * Strips scientific notation and rounds all float 'px' parameters to 2 decimal places.
 */
function normalizePxValues(value: string): string {
  const pxRegex = /\b([+-]?[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?)\s*px\b/gi;
  return value.replace(pxRegex, (_, numStr) => {
    const num = parseFloat(numStr);
    if (isNaN(num)) return _;
    const rounded = Math.round(num * 100) / 100;
    return `${rounded}px`;
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

  const gamma = (c: number) => {
    return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  };

  r = Math.max(0, Math.min(1, gamma(r)));
  g = Math.max(0, Math.min(1, gamma(g)));
  b_val = Math.max(0, Math.min(1, gamma(b_val)));

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b_val * 255)];
}

function oklchToSrgb(L: number, C: number, H: number): [number, number, number] {
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);
  return oklabToSrgb(L, a, b);
}

function parsePercentOrFloat(val: string): number {
  if (val.endsWith('%')) {
    return parseFloat(val) / 100;
  }
  return parseFloat(val);
}

function rgbToHex(r: number, g: number, b: number, alpha: number): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  if (alpha >= 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  const a = Math.round(alpha * 255);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
}

function convertOklchAndOklabToHex(colorStr: string): string {
  const clean = colorStr.trim().toLowerCase().replace(/,/g, ' ');

  // oklch(L C H [/ A])
  const oklchMatch = clean.match(
    /oklch\(\s*([0-9.]+%?)\s+([0-9.]+%?)\s+([0-9.-]+(?:deg|rad|turn)?)\s*(?:\/\s*([0-9.]+%?))?\s*\)/,
  );
  if (oklchMatch) {
    const L = parsePercentOrFloat(oklchMatch[1]);
    const C = parsePercentOrFloat(oklchMatch[2]);
    let H = parseFloat(oklchMatch[3]);
    if (oklchMatch[3].includes('rad')) {
      H = (H * 180) / Math.PI;
    } else if (oklchMatch[3].includes('turn')) {
      H = H * 360;
    }
    const alpha = oklchMatch[4] !== undefined ? parsePercentOrFloat(oklchMatch[4]) : 1;
    const [r, g, b] = oklchToSrgb(L, C, H);
    return rgbToHex(r, g, b, alpha);
  }

  // oklab(L a b [/ A])
  const oklabMatch = clean.match(
    /oklab\(\s*([0-9.]+%?)\s+([0-9.-]+%?)\s+([0-9.-]+%?)\s*(?:\/\s*([0-9.]+%?))?\s*\)/,
  );
  if (oklabMatch) {
    const L = parsePercentOrFloat(oklabMatch[1]);
    const a = parsePercentOrFloat(oklabMatch[2]);
    const b = parsePercentOrFloat(oklabMatch[3]);
    const alpha = oklabMatch[4] !== undefined ? parsePercentOrFloat(oklabMatch[4]) : 1;
    const [r, g, b_val] = oklabToSrgb(L, a, b);
    return rgbToHex(r, g, b_val, alpha);
  }

  return colorStr;
}

function replaceColorsInValue(value: string, convertOklch: boolean): string {
  if (!convertOklch) return value;
  return value.replace(/(oklch|oklab)\([^)]+\)/g, (match) => {
    try {
      return convertOklchAndOklabToHex(match);
    } catch {
      return match;
    }
  });
}

function postProcessStyleValue(val: string, convertOklch: boolean): string {
  let processed = val.replaceAll('"', "'");
  processed = normalizePxValues(processed);
  processed = replaceColorsInValue(processed, convertOklch);
  return processed;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatTextNode(node: Text): string {
  const text = node.textContent;
  if (!text) return '';

  if (node.parentElement) {
    const ws = window.getComputedStyle(node.parentElement).whiteSpace;
    if (ws === 'pre' || ws === 'pre-wrap') return text;
    if (ws === 'pre-line') return text.replace(/[\t\f\r ]+/g, ' ');
  }

  const cleanText = text.replace(/[\t\n\r\f ]+/g, ' ').replace(/^ | $/g, '');
  if (cleanText) {
    const leadingMatch = /^[\t\n\r\f ]*/.exec(text);
    const trailingMatch = /[\t\n\r\f ]*$/.exec(text);
    const leadingSpaceLen = leadingMatch ? leadingMatch[0].length : 0;
    const trailingSpaceLen = trailingMatch ? trailingMatch[0].length : 0;

    let keepLeading = false;
    let keepTrailing = false;

    if (leadingSpaceLen > 0) {
      const r = document.createRange();
      r.setStart(node, 0);
      r.setEnd(node, leadingSpaceLen);
      keepLeading = r.getBoundingClientRect().width > 0;
    }
    if (trailingSpaceLen > 0) {
      const r = document.createRange();
      r.setStart(node, text.length - trailingSpaceLen);
      r.setEnd(node, text.length);
      keepTrailing = r.getBoundingClientRect().width > 0;
    }

    return (keepLeading ? ' ' : '') + cleanText + (keepTrailing ? ' ' : '');
  }

  const r = document.createRange();
  r.selectNode(node);
  return r.getBoundingClientRect().width === 0 ? '' : ' ';
}

function getPseudoContent(styles: Record<string, string>): string {
  const content = styles['content'];
  if (!content) return '';
  const firstPart = content.split(' / ')[0];
  let result = '';
  const matches = firstPart.matchAll(/(['"])(.*?)\1/g);
  for (const match of matches) {
    result += match[2];
  }
  return result;
}

function isHiddenPseudo(styles: Record<string, string>): boolean {
  const transform = styles['transform'] || '';
  const isHiddenTransform = [
    'matrix(0, 0, 0, 1, 0, 0)',
    'matrix(0, 0, 0, 0, 0, 0)',
    'scaleX(0)',
    'scale(0)',
    'scaleY(0)',
  ].includes(transform);
  const pos = styles['position'] || '';
  return isHiddenTransform && ['absolute', 'fixed'].includes(pos);
}

function getRootBackgroundColor(el: Element): string {
  let current: Element | null = el;
  while (current) {
    const bg = window.getComputedStyle(current).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      return bg;
    }
    current =
      current.parentElement ??
      (current.parentNode instanceof ShadowRoot ? (current.parentNode as ShadowRoot).host : null);
  }
  return 'rgb(255, 255, 255)';
}
