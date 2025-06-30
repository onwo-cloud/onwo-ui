import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10 16V9.5a1 1 0 0 1 5 0"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 12h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 16h7"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTZWOS41YTEgMSAwIDAgMSA1IDAiIC8+CiAgPHBhdGggZD0iTTggMTJoNCIgLz4KICA8cGF0aCBkPSJNOCAxNmg3IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-pound-sterling
 */
export const CirclePoundSterlingIcon = createIcon('circle-pound-sterling', __iconNode);
