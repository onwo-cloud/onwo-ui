import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 2v14"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m19 9-7 7-7-7"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "21",
      "r": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnYxNCIgLz4KICA8cGF0aCBkPSJtMTkgOS03IDctNy03IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMjEiIHI9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-down-to-dot
 */
export const ArrowDownToDotIcon = createIcon('arrow-down-to-dot', __iconNode);
