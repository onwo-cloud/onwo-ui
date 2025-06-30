import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "18",
      "x": "3",
      "y": "3",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 3v18"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m8 9 3 3-3 3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xNSAzdjE4IiAvPgogIDxwYXRoIGQ9Im04IDkgMyAzLTMgMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/panel-right-close
 */
export const PanelRightCloseIcon = createIcon('panel-right-close', __iconNode);
