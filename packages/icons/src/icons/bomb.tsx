import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "11",
      "cy": "13",
      "r": "9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 2-1.5 1.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjEzIiByPSI5IiAvPgogIDxwYXRoIGQ9Ik0xNC4zNSA0LjY1IDE2LjMgMi43YTIuNDEgMi40MSAwIDAgMSAzLjQgMGwxLjYgMS42YTIuNCAyLjQgMCAwIDEgMCAzLjRsLTEuOTUgMS45NSIgLz4KICA8cGF0aCBkPSJtMjIgMi0xLjUgMS41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bomb
 */
export const BombIcon = createIcon('bomb', __iconNode);
