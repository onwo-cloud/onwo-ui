import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "8",
      "r": "6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18.09 10.37A6 6 0 1 1 10.34 18"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 6h1v4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m16.71 13.88.7.71-2.82 2.82"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIgLz4KICA8cGF0aCBkPSJNMTguMDkgMTAuMzdBNiA2IDAgMSAxIDEwLjM0IDE4IiAvPgogIDxwYXRoIGQ9Ik03IDZoMXY0IiAvPgogIDxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/coins
 */
export const CoinsIcon = createIcon('coins', __iconNode);
