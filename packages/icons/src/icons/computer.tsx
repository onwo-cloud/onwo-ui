import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "14",
      "height": "8",
      "x": "5",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "8",
      "x": "2",
      "y": "14",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 18h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 18h6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iOCIgeD0iNSIgeT0iMiIgcng9IjIiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIgLz4KICA8cGF0aCBkPSJNNiAxOGgyIiAvPgogIDxwYXRoIGQ9Ik0xMiAxOGg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/computer
 */
export const ComputerIcon = createIcon('computer', __iconNode);
