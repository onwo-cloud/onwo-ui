import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "y1": "2",
      "x2": "22",
      "y2": "22"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMiIgeTE9IjIiIHgyPSIyMiIgeTI9IjIyIiAvPgogIDxwYXRoIGQ9Ik0xNi41IDE2LjUgMTIgMjFsLTctN2MtMS41LTEuNDUtMy0zLjItMy01LjVhNS41IDUuNSAwIDAgMSAyLjE0LTQuMzUiIC8+CiAgPHBhdGggZD0iTTguNzYgMy4xYzEuMTUuMjIgMi4xMy43OCAzLjI0IDEuOSAxLjUtMS41IDIuNzQtMiA0LjUtMkE1LjUgNS41IDAgMCAxIDIyIDguNWMwIDIuMTItMS4zIDMuNzgtMi42NyA1LjE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/heart-off
 */
export const HeartOffIcon = createIcon('heart-off', __iconNode);
