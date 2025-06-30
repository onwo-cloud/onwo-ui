import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 12h8.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 6V4a2 2 0 1 0-4 0v2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "5",
      "x": "14",
      "y": "6",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUuNjg2IDE1QTE0LjUgMTQuNSAwIDAgMSAxMiAyMmExNC41IDE0LjUgMCAwIDEgMC0yMCAxMCAxMCAwIDEgMCA5LjU0MiAxMyIgLz4KICA8cGF0aCBkPSJNMiAxMmg4LjUiIC8+CiAgPHBhdGggZD0iTTIwIDZWNGEyIDIgMCAxIDAtNCAwdjIiIC8+CiAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNSIgeD0iMTQiIHk9IjYiIHJ4PSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/globe-lock
 */
export const GlobeLockIcon = createIcon('globe-lock', __iconNode);
