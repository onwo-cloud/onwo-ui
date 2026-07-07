import {
  type HtmlGraph,
  type SerializedNode,
  type CreateHtmlGraphOptions,
  createHtmlGraph,
} from './create-html-graph';


export { createHtmlGraphNew } from './create-html-graph-new';

// Re-export dependencies for external usage
export {
  type HtmlGraph,
  type SerializedNode,
  type CreateHtmlGraphOptions,
  createHtmlGraph,
};

/**
 * Updates CSS Custom Properties on the client-side document root from a pre-generated graph.
 */
export function updateRootVariables(graph: HtmlGraph): void {
  if (!graph.variables) return;
  const rootStyle = document.documentElement.style;
  for (const [name, val] of Object.entries(graph.variables)) {
    rootStyle.setProperty(name, val);
  }
}

/**
 * Generates raw HTML payload string from a pre-generated graph object.
 */
export function generateRawHtml(graph: HtmlGraph): string {
  const rootNode = graph.root;
  let styleBlock = '';

  if (graph.variables && Object.keys(graph.variables).length > 0) {
    let rules = '';
    for (const [name, val] of Object.entries(graph.variables)) {
      rules += `  ${name}: ${val};\n`;
    }
    styleBlock = `<style>:root {\n${rules}}</style>`;
  }

  const htmlContent = serializeGraphNodeToString(rootNode);
  return `<html>${styleBlock}${htmlContent}</html>`;
}

/**
 * Copies a raw HTML string payload into the clipboard.
 */
export async function copyHtmlToClipboard(rawHtml: string): Promise<boolean> {
  return await writeHtmlToClipboard(rawHtml);
}

// ---------------------------------------------------------------------------
// Client-Side Graph Deserialization to HTML
// ---------------------------------------------------------------------------

function serializeGraphNodeToString(node: SerializedNode): string {
  if (node.type === 'text') {
    return escapeHtml(node.text || '');
  }

  const tagName = node.tagName || 'div';
  const childHtml = node.children
    ? node.children.map((child) => serializeGraphNodeToString(child)).join('')
    : '';

  const finalAttrs: string[] = [];

  if (node.attributes) {
    for (const [key, value] of Object.entries(node.attributes)) {
      finalAttrs.push(`${key}="${escapeHtmlAttrs(value)}"`);
    }
  }

  if (node.styles && Object.keys(node.styles).length > 0) {
    const inlineStyle = stylesToCssString(node.styles);
    finalAttrs.push(`style="${escapeHtmlAttrs(inlineStyle)}"`);
  }

  const attrsStr = finalAttrs.length > 0 ? ' ' + finalAttrs.join(' ') : '';
  return `<${tagName}${attrsStr}>${childHtml}</${tagName}>`;
}

// ---------------------------------------------------------------------------
// Support Utilities
// ---------------------------------------------------------------------------

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeHtmlAttrs(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function stylesToCssString(styles: Record<string, string>): string {
  return Object.entries(styles)
    .map(([k, v]) => `${k}: ${v};`)
    .join(' ');
}

// ---------------------------------------------------------------------------
// Clipboard API Logic
// ---------------------------------------------------------------------------

async function writeHtmlToClipboard(htmlPayload: string): Promise<boolean> {
  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const htmlBlob = new Blob([htmlPayload], { type: 'text/html' });
      const plainBlob = new Blob([htmlPayload], { type: 'text/plain' });

      const item = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': plainBlob,
      });

      await navigator.clipboard.write([item]);
      return true;
    } catch (err) {
      console.warn('ClipboardItem API failed, falling back to execCommand', err);
    }
  }

  return new Promise((resolve) => {
    const container = document.createElement('div');
    container.contentEditable = 'true';
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.textContent = ' ';
    document.body.appendChild(container);

    const selection = window.getSelection();
    if (!selection) {
      container.remove();
      return resolve(false);
    }

    const range = document.createRange();
    range.selectNodeContents(container);
    selection.removeAllRanges();
    selection.addRange(range);

    const onCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData('text/html', htmlPayload);
        e.clipboardData.setData('text/plain', htmlPayload);
      }
    };

    document.addEventListener('copy', onCopy);
    let success = false;
    try {
      success = document.execCommand('copy');
    } finally {
      document.removeEventListener('copy', onCopy);
      selection.removeAllRanges();
      container.remove();
    }

    resolve(success);
  });
}
