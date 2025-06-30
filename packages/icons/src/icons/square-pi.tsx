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
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 7h10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 7v10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 17a2 2 0 0 1-2-2V7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik03IDdoMTAiIC8+CiAgPHBhdGggZD0iTTEwIDd2MTAiIC8+CiAgPHBhdGggZD0iTTE2IDE3YTIgMiAwIDAgMS0yLTJWNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/square-pi
 */
export const SquarePiIcon = createIcon('square-pi', __iconNode);
