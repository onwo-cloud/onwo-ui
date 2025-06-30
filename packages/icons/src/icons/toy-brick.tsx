import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "12",
      "x": "3",
      "y": "8",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHg9IjMiIHk9IjgiIHJ4PSIxIiAvPgogIDxwYXRoIGQ9Ik0xMCA4VjVjMC0uNi0uNC0xLTEtMUg2YTEgMSAwIDAgMC0xIDF2MyIgLz4KICA8cGF0aCBkPSJNMTkgOFY1YzAtLjYtLjQtMS0xLTFoLTNhMSAxIDAgMCAwLTEgMXYzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/toy-brick
 */
export const ToyBrickIcon = createIcon('toy-brick', __iconNode);
