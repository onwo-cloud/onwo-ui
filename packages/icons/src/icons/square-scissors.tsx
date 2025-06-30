import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "20",
      "x": "2",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "8",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9.414 9.414 12 12"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14.8 14.8 18 18"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "16",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m18 6-8.586 8.586"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSIyIiAvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik05LjQxNCA5LjQxNCAxMiAxMiIgLz4KICA8cGF0aCBkPSJNMTQuOCAxNC44IDE4IDE4IiAvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIxNiIgcj0iMiIgLz4KICA8cGF0aCBkPSJtMTggNi04LjU4NiA4LjU4NiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/square-scissors
 */
export const SquareScissorsIcon = createIcon('square-scissors', __iconNode);
