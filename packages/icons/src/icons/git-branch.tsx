import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "6",
      "y1": "3",
      "y2": "15"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 9a9 9 0 0 1-9 9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNiIgeDI9IjYiIHkxPSIzIiB5Mj0iMTUiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSI2IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjYiIGN5PSIxOCIgcj0iMyIgLz4KICA8cGF0aCBkPSJNMTggOWE5IDkgMCAwIDEtOSA5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/git-branch
 */
export const GitBranchIcon = createIcon('git-branch', __iconNode);
