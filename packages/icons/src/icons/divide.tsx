import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "6",
      "r": "1"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "5",
      "x2": "19",
      "y1": "12",
      "y2": "12"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "18",
      "r": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjYiIHI9IjEiIC8+CiAgPGxpbmUgeDE9IjUiIHgyPSIxOSIgeTE9IjEyIiB5Mj0iMTIiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxOCIgcj0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/divide
 */
export const DivideIcon = createIcon('divide', __iconNode);
