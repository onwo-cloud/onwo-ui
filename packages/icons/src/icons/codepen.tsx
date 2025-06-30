import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "polygon",
    "attr": {
      "points": "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "12",
      "x2": "12",
      "y1": "22",
      "y2": "15.5"
    }
  },
  {
    "tag": "polyline",
    "attr": {
      "points": "22 8.5 12 15.5 2 8.5"
    }
  },
  {
    "tag": "polyline",
    "attr": {
      "points": "2 15.5 12 8.5 22 15.5"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "12",
      "x2": "12",
      "y1": "2",
      "y2": "8.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjEyIDIgMjIgOC41IDIyIDE1LjUgMTIgMjIgMiAxNS41IDIgOC41IDEyIDIiIC8+CiAgPGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIyMiIgeTI9IjE1LjUiIC8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjIgOC41IDEyIDE1LjUgMiA4LjUiIC8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMiAxNS41IDEyIDguNSAyMiAxNS41IiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMiIgeTI9IjguNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/codepen
 * @deprecated icon.brand
 */
export const CodepenIcon = createIcon('codepen', __iconNode);
