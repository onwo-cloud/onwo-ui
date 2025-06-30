import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "6",
      "r": "3"
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
    "tag": "path",
    "attr": {
      "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 12v3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE4IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNMTggOXYyYzAgLjYtLjQgMS0xIDFIN2MtLjYgMC0xLS40LTEtMVY5IiAvPgogIDxwYXRoIGQ9Ik0xMiAxMnYzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/git-fork
 */
export const GitForkIcon = createIcon('git-fork', __iconNode);
