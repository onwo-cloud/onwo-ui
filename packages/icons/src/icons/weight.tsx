import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "5",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjUiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTYuNSA4YTIgMiAwIDAgMC0xLjkwNSAxLjQ2TDIuMSAxOC41QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjkyNS0yLjU0TDE5LjQgOS41QTIgMiAwIDAgMCAxNy40OCA4WiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/weight
 */
export const WeightIcon = createIcon('weight', __iconNode);
