import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "16",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 8h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 8h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 8h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik02IDhoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMCA4aC4wMSIgLz4KICA8cGF0aCBkPSJNMTQgOGguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/app-window-mac
 */
export const AppWindowMacIcon = createIcon('app-window-mac', __iconNode);
