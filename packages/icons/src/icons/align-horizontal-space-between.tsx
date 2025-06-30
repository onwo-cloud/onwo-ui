import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "6",
      "height": "14",
      "x": "3",
      "y": "5",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "6",
      "height": "10",
      "x": "15",
      "y": "7",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 2v20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 2v20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxNCIgeD0iMyIgeT0iNSIgcng9IjIiIC8+CiAgPHJlY3Qgd2lkdGg9IjYiIGhlaWdodD0iMTAiIHg9IjE1IiB5PSI3IiByeD0iMiIgLz4KICA8cGF0aCBkPSJNMyAydjIwIiAvPgogIDxwYXRoIGQ9Ik0yMSAydjIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/align-horizontal-space-between
 */
export const AlignHorizontalSpaceBetweenIcon = createIcon(
  'align-horizontal-space-between',
  __iconNode,
);
