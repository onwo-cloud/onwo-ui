import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M7.2 14.8a2 2 0 0 1 2 2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18.5",
      "cy": "8.5",
      "r": "3.5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "7.5",
      "cy": "16.5",
      "r": "5.5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "7.5",
      "cy": "4.5",
      "r": "2.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNy4yIDE0LjhhMiAyIDAgMCAxIDIgMiIgLz4KICA8Y2lyY2xlIGN4PSIxOC41IiBjeT0iOC41IiByPSIzLjUiIC8+CiAgPGNpcmNsZSBjeD0iNy41IiBjeT0iMTYuNSIgcj0iNS41IiAvPgogIDxjaXJjbGUgY3g9IjcuNSIgY3k9IjQuNSIgcj0iMi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bubbles
 */
export const BubblesIcon = createIcon('bubbles', __iconNode);
