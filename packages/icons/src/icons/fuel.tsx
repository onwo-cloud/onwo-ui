import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "3",
      "x2": "15",
      "y1": "22",
      "y2": "22"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "4",
      "x2": "14",
      "y1": "9",
      "y2": "9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMyIgeDI9IjE1IiB5MT0iMjIiIHkyPSIyMiIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjE0IiB5MT0iOSIgeTI9IjkiIC8+CiAgPHBhdGggZD0iTTE0IDIyVjRhMiAyIDAgMCAwLTItMkg2YTIgMiAwIDAgMC0yIDJ2MTgiIC8+CiAgPHBhdGggZD0iTTE0IDEzaDJhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMCAyIDJhMiAyIDAgMCAwIDItMlY5LjgzYTIgMiAwIDAgMC0uNTktMS40MkwxOCA1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/fuel
 */
export const FuelIcon = createIcon('fuel', __iconNode);
