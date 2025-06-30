import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "10",
      "x2": "10",
      "y1": "15",
      "y2": "9"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "14",
      "x2": "14",
      "y1": "15",
      "y2": "9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjE1IiB5Mj0iOSIgLz4KICA8bGluZSB4MT0iMTQiIHgyPSIxNCIgeTE9IjE1IiB5Mj0iOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-pause
 */
export const CirclePauseIcon = createIcon('circle-pause', __iconNode);
