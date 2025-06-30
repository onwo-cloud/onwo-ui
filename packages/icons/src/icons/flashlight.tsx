import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "18",
      "y1": "6",
      "y2": "6"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "12",
      "x2": "12",
      "y1": "12",
      "y2": "12"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNmMwIDItMiAyLTIgNHYxMGEyIDIgMCAwIDEtMiAyaC00YTIgMiAwIDAgMS0yLTJWMTBjMC0yLTItMi0yLTRWMmgxMnoiIC8+CiAgPGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTIiIHkyPSIxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/flashlight
 */
export const FlashlightIcon = createIcon('flashlight', __iconNode);
