import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "11",
      "cy": "11",
      "r": "8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m21 21-4.3-4.3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4IiAvPgogIDxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIiAvPgogIDxwYXRoIGQ9Ik0xMSAxMWEyIDIgMCAwIDAgNCAwIDQgNCAwIDAgMC04IDAgNiA2IDAgMCAwIDEyIDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/lollipop
 */
export const LollipopIcon = createIcon('lollipop', __iconNode);
