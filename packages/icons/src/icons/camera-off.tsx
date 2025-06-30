import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "x2": "22",
      "y1": "2",
      "y2": "22"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14.121 15.121A3 3 0 1 1 9.88 10.88"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMiIgeTI9IjIyIiAvPgogIDxwYXRoIGQ9Ik03IDdINGEyIDIgMCAwIDAtMiAydjlhMiAyIDAgMCAwIDIgMmgxNiIgLz4KICA8cGF0aCBkPSJNOS41IDRoNUwxNyA3aDNhMiAyIDAgMCAxIDIgMnY3LjUiIC8+CiAgPHBhdGggZD0iTTE0LjEyMSAxNS4xMjFBMyAzIDAgMSAxIDkuODggMTAuODgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/camera-off
 */
export const CameraOffIcon = createIcon('camera-off', __iconNode);
