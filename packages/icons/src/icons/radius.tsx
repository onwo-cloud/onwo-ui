import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82"
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
    "tag": "path",
    "attr": {
      "d": "m13.41 13.41 4.18 4.18"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuMzQgMTcuNTJhMTAgMTAgMCAxIDAtMi44MiAyLjgyIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTkiIHI9IjIiIC8+CiAgPHBhdGggZD0ibTEzLjQxIDEzLjQxIDQuMTggNC4xOCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/radius
 */
export const RadiusIcon = createIcon('radius', __iconNode);
