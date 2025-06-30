import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 21a8 8 0 0 1 13.292-6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "8",
      "r": "5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 19h-6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiAyMWE4IDggMCAwIDEgMTMuMjkyLTYiIC8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSI1IiAvPgogIDxwYXRoIGQ9Ik0yMiAxOWgtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-round-minus
 */
export const UserRoundMinusIcon = createIcon('user-round-minus', __iconNode);
