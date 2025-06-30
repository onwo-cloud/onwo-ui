import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "17",
      "r": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 7v6h-6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE3IiByPSIxIiAvPgogIDxwYXRoIGQ9Ik0yMSA3djZoLTYiIC8+CiAgPHBhdGggZD0iTTMgMTdhOSA5IDAgMCAxIDktOSA5IDkgMCAwIDEgNiAyLjNsMyAyLjciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/redo-dot
 */
export const RedoDotIcon = createIcon('redo-dot', __iconNode);
