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
      "d": "M9.17 14.83a4 4 0 1 0 0-5.66"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNOS4xNyAxNC44M2E0IDQgMCAxIDAgMC01LjY2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copyleft
 */
export const CopyleftIcon = createIcon('copyleft', __iconNode);
