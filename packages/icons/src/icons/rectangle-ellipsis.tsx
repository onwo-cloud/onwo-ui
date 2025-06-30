import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "12",
      "x": "2",
      "y": "6",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 12h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17 12h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 12h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMiAxMmguMDEiIC8+CiAgPHBhdGggZD0iTTE3IDEyaC4wMSIgLz4KICA8cGF0aCBkPSJNNyAxMmguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/rectangle-ellipsis
 */
export const RectangleEllipsisIcon = createIcon('rectangle-ellipsis', __iconNode);
