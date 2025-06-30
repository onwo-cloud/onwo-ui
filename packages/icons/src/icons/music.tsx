import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M9 18V5l12-2v13"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "16",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAxOFY1bDEyLTJ2MTMiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjE4IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iMTYiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/music
 */
export const MusicIcon = createIcon('music', __iconNode);
