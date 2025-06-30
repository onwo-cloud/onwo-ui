import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8.12 8.12 12 12"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 4 8.12 15.88"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14.8 14.8 20 20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNOC4xMiA4LjEyIDEyIDEyIiAvPgogIDxwYXRoIGQ9Ik0yMCA0IDguMTIgMTUuODgiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjE4IiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0xNC44IDE0LjggMjAgMjAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/scissors
 */
export const ScissorsIcon = createIcon('scissors', __iconNode);
