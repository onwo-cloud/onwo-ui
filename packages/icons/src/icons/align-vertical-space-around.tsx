import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "10",
      "height": "6",
      "x": "7",
      "y": "9",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 20H2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 4H2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iNiIgeD0iNyIgeT0iOSIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTIyIDIwSDIiIC8+CiAgPHBhdGggZD0iTTIyIDRIMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/align-vertical-space-around
 */
export const AlignVerticalSpaceAroundIcon = createIcon('align-vertical-space-around', __iconNode);
