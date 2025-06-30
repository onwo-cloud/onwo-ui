import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 4H9a3 3 0 0 0-2.83 4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 12a4 4 0 0 1 0 8H6"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "4",
      "x2": "20",
      "y1": "12",
      "y2": "12"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgNEg5YTMgMyAwIDAgMC0yLjgzIDQiIC8+CiAgPHBhdGggZD0iTTE0IDEyYTQgNCAwIDAgMSAwIDhINiIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/strikethrough
 */
export const StrikethroughIcon = createIcon('strikethrough', __iconNode);
