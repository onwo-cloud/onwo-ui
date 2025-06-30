import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 10h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 14h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6.17 15a3 3 0 0 1 5.66 0"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "11",
      "r": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "2",
      "y": "5",
      "width": "20",
      "height": "14",
      "rx": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTBoMiIgLz4KICA8cGF0aCBkPSJNMTYgMTRoMiIgLz4KICA8cGF0aCBkPSJNNi4xNyAxNWEzIDMgMCAwIDEgNS42NiAwIiAvPgogIDxjaXJjbGUgY3g9IjkiIGN5PSIxMSIgcj0iMiIgLz4KICA8cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/id-card
 */
export const IdCardIcon = createIcon('id-card', __iconNode);
