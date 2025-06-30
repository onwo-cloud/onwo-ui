import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "x": "2",
      "y": "4",
      "width": "20",
      "height": "16",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 4v4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 8h20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 4v4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIyIiB5PSI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMCA0djQiIC8+CiAgPHBhdGggZD0iTTIgOGgyMCIgLz4KICA8cGF0aCBkPSJNNiA0djQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/app-window
 */
export const AppWindowIcon = createIcon('app-window', __iconNode);
