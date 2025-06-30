import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m3 15 4-8 4 8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 13h6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "12",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 9v6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMyAxNSA0LTggNCA4IiAvPgogIDxwYXRoIGQ9Ik00IDEzaDYiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxMiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNMjEgOXY2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/case-sensitive
 */
export const CaseSensitiveIcon = createIcon('case-sensitive', __iconNode);
