import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "18",
      "x2": "18",
      "y1": "20",
      "y2": "4"
    }
  },
  {
    "tag": "polygon",
    "attr": {
      "points": "14,20 4,12 14,4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTgiIHgyPSIxOCIgeTE9IjIwIiB5Mj0iNCIgLz4KICA8cG9seWdvbiBwb2ludHM9IjE0LDIwIDQsMTIgMTQsNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/step-back
 */
export const StepBackIcon = createIcon('step-back', __iconNode);
