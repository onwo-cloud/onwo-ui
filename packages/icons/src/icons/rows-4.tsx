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
      "d": "M21 7.5H3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 12H3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 16.5H3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0yMSA3LjVIMyIgLz4KICA8cGF0aCBkPSJNMjEgMTJIMyIgLz4KICA8cGF0aCBkPSJNMjEgMTYuNUgzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rows-4
 */
export const Rows4Icon = createIcon('rows-4', __iconNode);
