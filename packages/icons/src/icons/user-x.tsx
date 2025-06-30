import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "7",
      "r": "4"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "17",
      "x2": "22",
      "y1": "8",
      "y2": "13"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "22",
      "x2": "17",
      "y1": "8",
      "y2": "13"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iNCIgLz4KICA8bGluZSB4MT0iMTciIHgyPSIyMiIgeTE9IjgiIHkyPSIxMyIgLz4KICA8bGluZSB4MT0iMjIiIHgyPSIxNyIgeTE9IjgiIHkyPSIxMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-x
 */
export const UserXIcon = createIcon('user-x', __iconNode);
