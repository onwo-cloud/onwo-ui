export function normalizeEventKey(event: KeyboardEvent): string {
  const parts: string[] = [];

  if (event.ctrlKey) parts.push('Control');
  if (event.metaKey) parts.push('Meta');
  if (event.altKey) parts.push('Alt');

  const key = event.key;

  if (event.shiftKey && parts.length > 0 && key !== 'Shift') {
    parts.push('Shift');
  }

  if (!['Control', 'Meta', 'Alt', 'Shift'].includes(key)) {
    parts.push(key);
  }

  return parts.join('+');
}

export function isEditableElement(element: Element | null): boolean {
  if (!element) return false;
  const tagName = element.tagName.toLowerCase();
  if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
    return true;
  }
  return (element as HTMLElement).isContentEditable;
}

export function isPrintableKey(key: string): boolean {
  return key.length === 1;
}
