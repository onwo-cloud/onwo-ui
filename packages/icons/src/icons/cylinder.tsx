import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "ellipse",
    "attr": {
      "cx": "12",
      "cy": "5",
      "rx": "9",
      "ry": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 5v14a9 3 0 0 0 18 0V5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNXYxNGE5IDMgMCAwIDAgMTggMFY1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cylinder
 */
export const CylinderIcon = createIcon('cylinder', __iconNode);
