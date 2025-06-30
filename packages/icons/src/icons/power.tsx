import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 2v10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18.4 6.6a9 9 0 1 1-12.77.04"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnYxMCIgLz4KICA8cGF0aCBkPSJNMTguNCA2LjZhOSA5IDAgMSAxLTEyLjc3LjA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/power
 */
export const PowerIcon = createIcon('power', __iconNode);
