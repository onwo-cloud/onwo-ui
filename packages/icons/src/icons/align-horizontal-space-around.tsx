import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "6",
      "height": "10",
      "x": "9",
      "y": "7",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 22V2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 22V2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgeD0iOSIgeT0iNyIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTQgMjJWMiIgLz4KICA8cGF0aCBkPSJNMjAgMjJWMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/align-horizontal-space-around
 */
export const AlignHorizontalSpaceAroundIcon = createIcon(
  'align-horizontal-space-around',
  __iconNode,
);
