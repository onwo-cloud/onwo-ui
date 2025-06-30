import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M20 4v7a4 4 0 0 1-4 4H4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 10-5 5 5 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNHY3YTQgNCAwIDAgMS00IDRINCIgLz4KICA8cGF0aCBkPSJtOSAxMC01IDUgNSA1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/corner-down-left
 */
export const CornerDownLeftIcon = createIcon('corner-down-left', __iconNode);
