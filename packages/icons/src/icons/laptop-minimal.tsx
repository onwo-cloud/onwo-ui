import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "12",
      "x": "3",
      "y": "4",
      "rx": "2",
      "ry": "2"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "x2": "22",
      "y1": "20",
      "y2": "20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHg9IjMiIHk9IjQiIHJ4PSIyIiByeT0iMiIgLz4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMjAiIHkyPSIyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/laptop-minimal
 */
export const LaptopMinimalIcon = createIcon('laptop-minimal', __iconNode);
