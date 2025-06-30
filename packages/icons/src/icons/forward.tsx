import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m15 17 5-5-5-5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 18v-2a4 4 0 0 1 4-4h12"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNNCAxOHYtMmE0IDQgMCAwIDEgNC00aDEyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/forward
 */
export const ForwardIcon = createIcon('forward', __iconNode);
