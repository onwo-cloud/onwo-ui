import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "7",
      "cy": "12",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 9v6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "17",
      "cy": "12",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 7v8"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI3IiBjeT0iMTIiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTEwIDl2NiIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjEyIiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0xNCA3djgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/case-lower
 */
export const CaseLowerIcon = createIcon('case-lower', __iconNode);
