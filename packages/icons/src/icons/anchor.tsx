import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 22V8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 12H2a10 10 0 0 0 20 0h-3"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "5",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJWOCIgLz4KICA8cGF0aCBkPSJNNSAxMkgyYTEwIDEwIDAgMCAwIDIwIDBoLTMiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSI1IiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/anchor
 */
export const AnchorIcon = createIcon('anchor', __iconNode);
