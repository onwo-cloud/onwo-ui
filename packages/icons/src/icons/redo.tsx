import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 7v6h-6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgN3Y2aC02IiAvPgogIDxwYXRoIGQ9Ik0zIDE3YTkgOSAwIDAgMSA5LTkgOSA5IDAgMCAxIDYgMi4zbDMgMi43IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/redo
 */
export const RedoIcon = createIcon('redo', __iconNode);
