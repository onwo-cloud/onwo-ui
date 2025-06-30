import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 2v4a2 2 0 0 0 2 2h4"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "12",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTIiIHI9IjIiIC8+CiAgPHBhdGggZD0ibTIwIDE3LTEuMjk2LTEuMjk2YTIuNDEgMi40MSAwIDAgMC0zLjQwOCAwTDkgMjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-image
 */
export const FileImageIcon = createIcon('file-image', __iconNode);
