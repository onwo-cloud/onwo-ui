import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
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
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6.41 6.41 11.18 11.18"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjE5IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik02LjQ4IDMuNjZhMTAgMTAgMCAwIDEgMTMuODYgMTMuODYiIC8+CiAgPHBhdGggZD0ibTYuNDEgNi40MSAxMS4xOCAxMS4xOCIgLz4KICA8cGF0aCBkPSJNMy42NiA2LjQ4YTEwIDEwIDAgMCAwIDEzLjg2IDEzLjg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/diameter
 */
export const DiameterIcon = createIcon('diameter', __iconNode);
