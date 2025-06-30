import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M6 4v6a6 6 0 0 0 12 0V4"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "4",
      "x2": "20",
      "y1": "20",
      "y2": "20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiA0djZhNiA2IDAgMCAwIDEyIDBWNCIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMjAiIHkyPSIyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/underline
 */
export const UnderlineIcon = createIcon('underline', __iconNode);
