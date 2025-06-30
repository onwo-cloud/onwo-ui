import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 18v-7.7L16 9v7"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "14",
      "cy": "16",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "18",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuNSAyMkgxOGEyIDIgMCAwIDAgMi0yVjdsLTUtNUg2YTIgMiAwIDAgMC0yIDJ2OC40IiAvPgogIDxwYXRoIGQ9Ik04IDE4di03LjdMMTYgOXY3IiAvPgogIDxjaXJjbGUgY3g9IjE0IiBjeT0iMTYiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjE4IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-music
 */
export const FileMusicIcon = createIcon('file-music', __iconNode);
