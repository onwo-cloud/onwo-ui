import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 8h20"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "16",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 16h12"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA4aDIwIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgeD0iMiIgeT0iNCIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTYgMTZoMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/dock
 */
export const DockIcon = createIcon('dock', __iconNode);
