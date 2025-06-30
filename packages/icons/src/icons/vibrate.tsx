import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m2 8 2 2-2 2 2 2-2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 8-2 2 2 2-2 2 2 2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "14",
      "x": "8",
      "y": "5",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMiA4IDIgMi0yIDIgMiAyLTIgMiIgLz4KICA8cGF0aCBkPSJtMjIgOC0yIDIgMiAyLTIgMiAyIDIiIC8+CiAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjUiIHJ4PSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/vibrate
 */
export const VibrateIcon = createIcon('vibrate', __iconNode);
