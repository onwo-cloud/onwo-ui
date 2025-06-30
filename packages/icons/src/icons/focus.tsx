import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 7V5a2 2 0 0 1 2-2h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17 3h2a2 2 0 0 1 2 2v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 17v2a2 2 0 0 1-2 2h-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 21H5a2 2 0 0 1-2-2v-2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0zIDdWNWEyIDIgMCAwIDEgMi0yaDIiIC8+CiAgPHBhdGggZD0iTTE3IDNoMmEyIDIgMCAwIDEgMiAydjIiIC8+CiAgPHBhdGggZD0iTTIxIDE3djJhMiAyIDAgMCAxLTIgMmgtMiIgLz4KICA8cGF0aCBkPSJNNyAyMUg1YTIgMiAwIDAgMS0yLTJ2LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/focus
 */
export const FocusIcon = createIcon('focus', __iconNode);
