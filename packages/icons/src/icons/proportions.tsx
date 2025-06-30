import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "16",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 9v11"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 9h13a2 2 0 0 1 2 2v9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMiA5djExIiAvPgogIDxwYXRoIGQ9Ik0yIDloMTNhMiAyIDAgMCAxIDIgMnY5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/proportions
 */
export const ProportionsIcon = createIcon('proportions', __iconNode);
