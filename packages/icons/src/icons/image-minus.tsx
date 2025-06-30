import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "16",
      "x2": "22",
      "y1": "5",
      "y2": "5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "9",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgOXYxMGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNyIgLz4KICA8bGluZSB4MT0iMTYiIHgyPSIyMiIgeTE9IjUiIHkyPSI1IiAvPgogIDxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIiAvPgogIDxwYXRoIGQ9Im0yMSAxNS0zLjA4Ni0zLjA4NmEyIDIgMCAwIDAtMi44MjggMEw2IDIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/image-minus
 */
export const ImageMinusIcon = createIcon('image-minus', __iconNode);
