import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "6",
      "y1": "4",
      "y2": "20"
    }
  },
  {
    "tag": "polygon",
    "attr": {
      "points": "10,4 20,12 10,20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNiIgeDI9IjYiIHkxPSI0IiB5Mj0iMjAiIC8+CiAgPHBvbHlnb24gcG9pbnRzPSIxMCw0IDIwLDEyIDEwLDIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/step-forward
 */
export const StepForwardIcon = createIcon('step-forward', __iconNode);
