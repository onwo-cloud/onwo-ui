import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8.56 2.75c4.37 6 6 9.42 8 17.72"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTkuMTMgNS4wOUMxNS4yMiA5LjE0IDEwIDEwLjQ0IDIuMjUgMTAuOTQiIC8+CiAgPHBhdGggZD0iTTIxLjc1IDEyLjg0Yy02LjYyLTEuNDEtMTIuMTQgMS0xNi4zOCA2LjMyIiAvPgogIDxwYXRoIGQ9Ik04LjU2IDIuNzVjNC4zNyA2IDYgOS40MiA4IDE3LjcyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/dribbble
 * @deprecated icon.brand
 */
export const DribbbleIcon = createIcon('dribbble', __iconNode);
