import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M18 6V4a2 2 0 1 0-4 0v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "12",
      "y": "6",
      "width": "8",
      "height": "5",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNlY0YTIgMiAwIDEgMC00IDB2MiIgLz4KICA8cGF0aCBkPSJNMjAgMTV2NmExIDEgMCAwIDEtMSAxSDYuNWExIDEgMCAwIDEgMC01SDIwIiAvPgogIDxwYXRoIGQ9Ik00IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJIMTAiIC8+CiAgPHJlY3QgeD0iMTIiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjUiIHJ4PSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-lock
 */
export const BookLockIcon = createIcon('book-lock', __iconNode);
