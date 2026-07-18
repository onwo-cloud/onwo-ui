export function composeProps<PROPS>(...args: Partial<PROPS>[]): Partial<PROPS> {
  const result: Record<string, unknown> = {};

  // Helper to safely wrap non-arrays into arrays
  const toArray = (v: any) => (Array.isArray(v) ? v : [v]);

  for (const props of args) {
    if (!props || typeof props !== 'object') continue;

    for (const [key, value] of Object.entries(props)) {
      if (value === undefined) continue;

      if (key.endsWith('$')) {
        if (result[key] !== undefined) {
          // Flatten and remove invalid QRLs (like null) to prevent Qwik hydration crashes
          const combined = [...toArray(result[key]), ...toArray(value)].filter(Boolean);

          if (combined.length === 0) {
            delete result[key];
          } else {
            result[key] = combined.length === 1 ? combined[0] : combined;
          }
        } else {
          result[key] = value;
        }
      } else if (key === 'class') {
        if (result[key] !== undefined) {
          // Force flat arrays so Qwik's stringifier doesn't choke on [ "a", ["b"] ]
          result[key] = [...toArray(result[key]), ...toArray(value)].filter(Boolean);
        } else {
          result[key] = toArray(value).filter(Boolean);
        }
      } else if (key === 'style') {
        const existing = result[key];
        if (existing && typeof existing === 'object' && value && typeof value === 'object') {
          result[key] = { ...existing, ...value };
        } else {
          result[key] = value;
        }
      } else {
        result[key] = value;
      }
    }
  }

  return result as any;
}
