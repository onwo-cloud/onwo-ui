import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "3",
      "y": "14",
      "width": "7",
      "height": "7",
      "rx": "1"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "17.5",
      "cy": "17.5",
      "r": "3.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOC4zIDEwYS43LjcgMCAwIDEtLjYyNi0xLjA3OUwxMS40IDNhLjcuNyAwIDAgMSAxLjE5OC0uMDQzTDE2LjMgOC45YS43LjcgMCAwIDEtLjU3MiAxLjFaIiAvPgogIDxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiByeD0iMSIgLz4KICA8Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTcuNSIgcj0iMy41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/shapes
 */
export const ShapesIcon = createIcon('shapes', __iconNode);
