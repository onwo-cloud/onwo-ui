import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "19",
      "x2": "5",
      "y1": "5",
      "y2": "19"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6.5",
      "cy": "6.5",
      "r": "2.5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "17.5",
      "cy": "17.5",
      "r": "2.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTkiIHgyPSI1IiB5MT0iNSIgeTI9IjE5IiAvPgogIDxjaXJjbGUgY3g9IjYuNSIgY3k9IjYuNSIgcj0iMi41IiAvPgogIDxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIyLjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/percent
 */
export const PercentIcon = createIcon('percent', __iconNode);
