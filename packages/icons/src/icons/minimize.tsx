import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M8 3v3a2 2 0 0 1-2 2H3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 8h-3a2 2 0 0 1-2-2V3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 16h3a2 2 0 0 1 2 2v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 21v-3a2 2 0 0 1 2-2h3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAzdjNhMiAyIDAgMCAxLTIgMkgzIiAvPgogIDxwYXRoIGQ9Ik0yMSA4aC0zYTIgMiAwIDAgMS0yLTJWMyIgLz4KICA8cGF0aCBkPSJNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIgLz4KICA8cGF0aCBkPSJNMTYgMjF2LTNhMiAyIDAgMCAxIDItMmgzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/minimize
 */
export const MinimizeIcon = createIcon('minimize', __iconNode);
