import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17.39 11.73 22 2l-9.73 4.61"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "x2": "22",
      "y1": "2",
      "y2": "22"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOC40MyA4LjQzIDMgMTFsOCAyIDIgOCAyLjU3LTUuNDMiIC8+CiAgPHBhdGggZD0iTTE3LjM5IDExLjczIDIyIDJsLTkuNzMgNC42MSIgLz4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMiIgeTI9IjIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/navigation-off
 */
export const NavigationOffIcon = createIcon('navigation-off', __iconNode);
