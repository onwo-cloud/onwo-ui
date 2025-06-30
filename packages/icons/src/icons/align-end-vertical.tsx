import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "6",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "9",
      "height": "6",
      "x": "9",
      "y": "14",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 22V2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeD0iMiIgeT0iNCIgcng9IjIiIC8+CiAgPHJlY3Qgd2lkdGg9IjkiIGhlaWdodD0iNiIgeD0iOSIgeT0iMTQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0yMiAyMlYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/align-end-vertical
 */
export const AlignEndVerticalIcon = createIcon('align-end-vertical', __iconNode);
