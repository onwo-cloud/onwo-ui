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
      "d": "M2 8h20"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "14",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 12h8"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "16",
      "cy": "14",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0yIDhoMjAiIC8+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjE0IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik04IDEyaDgiIC8+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNCIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/videotape
 */
export const VideotapeIcon = createIcon('videotape', __iconNode);
