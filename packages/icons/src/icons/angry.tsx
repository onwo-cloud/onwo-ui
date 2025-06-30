import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 16s-1.5-2-4-2-4 2-4 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7.5 8 10 9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m14 9 2.5-1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 10h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 10h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTYgMTZzLTEuNS0yLTQtMi00IDItNCAyIiAvPgogIDxwYXRoIGQ9Ik03LjUgOCAxMCA5IiAvPgogIDxwYXRoIGQ9Im0xNCA5IDIuNS0xIiAvPgogIDxwYXRoIGQ9Ik05IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTUgMTBoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/angry
 */
export const AngryIcon = createIcon('angry', __iconNode);
