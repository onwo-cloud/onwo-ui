import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m8 10 4 4 4-4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgM2EyIDIgMCAwIDEgMiAydjZhMSAxIDAgMCAxLTIwIDBWNWEyIDIgMCAwIDEgMi0yeiIgLz4KICA8cGF0aCBkPSJtOCAxMCA0IDQgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/pocket
 * @deprecated icon.brand
 */
export const PocketIcon = createIcon('pocket', __iconNode);
