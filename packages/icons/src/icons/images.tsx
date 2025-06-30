import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M18 22H4a2 2 0 0 1-2-2V6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "8",
      "r": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "16",
      "x": "6",
      "y": "2",
      "rx": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMjJINGEyIDIgMCAwIDEtMi0yVjYiIC8+CiAgPHBhdGggZD0ibTIyIDEzLTEuMjk2LTEuMjk2YTIuNDEgMi40MSAwIDAgMC0zLjQwOCAwTDExIDE4IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iMiIgLz4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHg9IjYiIHk9IjIiIHJ4PSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/images
 */
export const ImagesIcon = createIcon('images', __iconNode);
