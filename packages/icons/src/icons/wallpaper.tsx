import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "9",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 21h8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 17v4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI4IiBjeT0iOSIgcj0iMiIgLz4KICA8cGF0aCBkPSJtOSAxNyA2LjEtNi4xYTIgMiAwIDAgMSAyLjgxLjAxTDIyIDE1VjVhMiAyIDAgMCAwLTItMkg0YTIgMiAwIDAgMC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0yIiAvPgogIDxwYXRoIGQ9Ik04IDIxaDgiIC8+CiAgPHBhdGggZD0iTTEyIDE3djQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/wallpaper
 */
export const WallpaperIcon = createIcon('wallpaper', __iconNode);
