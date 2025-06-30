import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M5 7v11a1 1 0 0 0 1 1h11"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5.293 18.707 11 13"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "19",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "5",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA3djExYTEgMSAwIDAgMCAxIDFoMTEiIC8+CiAgPHBhdGggZD0iTTUuMjkzIDE4LjcwNyAxMSAxMyIgLz4KICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjE5IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/scale-3d
 */
export const Scale3dIcon = createIcon('scale-3d', __iconNode);
