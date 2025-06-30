import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M4 12h8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 18V6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 18V6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m17 12 3-2v8"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMmg4IiAvPgogIDxwYXRoIGQ9Ik00IDE4VjYiIC8+CiAgPHBhdGggZD0iTTEyIDE4VjYiIC8+CiAgPHBhdGggZD0ibTE3IDEyIDMtMnY4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/heading-1
 */
export const Heading1Icon = createIcon('heading-1', __iconNode);
