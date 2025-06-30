import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "polyline",
    "attr": {
      "points": "3.5 2 6.5 12.5 18 12.5"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "9.5",
      "x2": "5.5",
      "y1": "12.5",
      "y2": "20"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "15",
      "x2": "18.5",
      "y1": "12.5",
      "y2": "20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2.75 18a13 13 0 0 0 18.5 0"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIzLjUgMiA2LjUgMTIuNSAxOCAxMi41IiAvPgogIDxsaW5lIHgxPSI5LjUiIHgyPSI1LjUiIHkxPSIxMi41IiB5Mj0iMjAiIC8+CiAgPGxpbmUgeDE9IjE1IiB4Mj0iMTguNSIgeTE9IjEyLjUiIHkyPSIyMCIgLz4KICA8cGF0aCBkPSJNMi43NSAxOGExMyAxMyAwIDAgMCAxOC41IDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/rocking-chair
 */
export const RockingChairIcon = createIcon('rocking-chair', __iconNode);
