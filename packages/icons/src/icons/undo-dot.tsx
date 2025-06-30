import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 17a9 9 0 0 0-15-6.7L3 13"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 7v6h6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "17",
      "r": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTdhOSA5IDAgMCAwLTE1LTYuN0wzIDEzIiAvPgogIDxwYXRoIGQ9Ik0zIDd2Nmg2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/undo-dot
 */
export const UndoDotIcon = createIcon('undo-dot', __iconNode);
