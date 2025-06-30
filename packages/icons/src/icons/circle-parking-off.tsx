import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m5 5 14 14"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M13 13a3 3 0 1 0 0-6H9v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 17v-2.34"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtNSA1IDE0IDE0IiAvPgogIDxwYXRoIGQ9Ik0xMyAxM2EzIDMgMCAxIDAgMC02SDl2MiIgLz4KICA8cGF0aCBkPSJNOSAxN3YtMi4zNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-parking-off
 */
export const CircleParkingOffIcon = createIcon('circle-parking-off', __iconNode);
