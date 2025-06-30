import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 15v7"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 19h6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "9",
      "r": "6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTV2NyIgLz4KICA8cGF0aCBkPSJNOSAxOWg2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/venus
 */
export const VenusIcon = createIcon('venus', __iconNode);
