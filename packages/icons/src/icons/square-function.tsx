import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "18",
      "x": "3",
      "y": "3",
      "rx": "2",
      "ry": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 11.2h5.7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNOSAxN2MyIDAgMi44LTEgMi44LTIuOFYxMGMwLTIgMS0zLjMgMy4yLTMiIC8+CiAgPHBhdGggZD0iTTkgMTEuMmg1LjciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/square-function
 */
export const SquareFunctionIcon = createIcon('square-function', __iconNode);
