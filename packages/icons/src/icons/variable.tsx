import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M8 21s-4-3-4-9 4-9 4-9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 3s4 3 4 9-4 9-4 9"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "15",
      "x2": "9",
      "y1": "9",
      "y2": "15"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "9",
      "x2": "15",
      "y1": "9",
      "y2": "15"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAyMXMtNC0zLTQtOSA0LTkgNC05IiAvPgogIDxwYXRoIGQ9Ik0xNiAzczQgMyA0IDktNCA5LTQgOSIgLz4KICA8bGluZSB4MT0iMTUiIHgyPSI5IiB5MT0iOSIgeTI9IjE1IiAvPgogIDxsaW5lIHgxPSI5IiB4Mj0iMTUiIHkxPSI5IiB5Mj0iMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/variable
 */
export const VariableIcon = createIcon('variable', __iconNode);
