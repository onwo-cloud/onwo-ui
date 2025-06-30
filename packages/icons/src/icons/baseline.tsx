import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M4 20h16"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6 16 6-12 6 12"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 12h8"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAyMGgxNiIgLz4KICA8cGF0aCBkPSJtNiAxNiA2LTEyIDYgMTIiIC8+CiAgPHBhdGggZD0iTTggMTJoOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/baseline
 */
export const BaselineIcon = createIcon('baseline', __iconNode);
