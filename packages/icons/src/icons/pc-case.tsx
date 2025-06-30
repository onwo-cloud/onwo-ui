import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "14",
      "height": "20",
      "x": "5",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 14h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 6h6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 10h6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHg9IjUiIHk9IjIiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xNSAxNGguMDEiIC8+CiAgPHBhdGggZD0iTTkgNmg2IiAvPgogIDxwYXRoIGQ9Ik05IDEwaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pc-case
 */
export const PcCaseIcon = createIcon('pc-case', __iconNode);
