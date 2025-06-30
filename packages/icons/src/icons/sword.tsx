import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "polyline",
    "attr": {
      "points": "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "13",
      "x2": "19",
      "y1": "19",
      "y2": "13"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "16",
      "x2": "20",
      "y1": "16",
      "y2": "20"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "19",
      "x2": "21",
      "y1": "21",
      "y2": "19"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNC41IDE3LjUgMyA2IDMgMyA2IDMgMTcuNSAxNC41IiAvPgogIDxsaW5lIHgxPSIxMyIgeDI9IjE5IiB5MT0iMTkiIHkyPSIxMyIgLz4KICA8bGluZSB4MT0iMTYiIHgyPSIyMCIgeTE9IjE2IiB5Mj0iMjAiIC8+CiAgPGxpbmUgeDE9IjE5IiB4Mj0iMjEiIHkxPSIyMSIgeTI9IjE5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sword
 */
export const SwordIcon = createIcon('sword', __iconNode);
