import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "8"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "3",
      "x2": "6",
      "y1": "3",
      "y2": "6"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "21",
      "x2": "18",
      "y1": "3",
      "y2": "6"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "3",
      "x2": "6",
      "y1": "21",
      "y2": "18"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "21",
      "x2": "18",
      "y1": "21",
      "y2": "18"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiAvPgogIDxsaW5lIHgxPSIzIiB4Mj0iNiIgeTE9IjMiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSIyMSIgeDI9IjE4IiB5MT0iMyIgeTI9IjYiIC8+CiAgPGxpbmUgeDE9IjMiIHgyPSI2IiB5MT0iMjEiIHkyPSIxOCIgLz4KICA8bGluZSB4MT0iMjEiIHgyPSIxOCIgeTE9IjIxIiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/currency
 */
export const CurrencyIcon = createIcon('currency', __iconNode);
