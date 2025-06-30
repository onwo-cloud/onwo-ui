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
      "d": "m15 9-6 6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 9h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 15h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Im0xNSA5LTYgNiIgLz4KICA8cGF0aCBkPSJNOSA5aC4wMSIgLz4KICA8cGF0aCBkPSJNMTUgMTVoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/square-percent
 */
export const SquarePercentIcon = createIcon('square-percent', __iconNode);
