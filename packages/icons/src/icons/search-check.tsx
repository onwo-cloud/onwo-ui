import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m8 11 2 2 4-4"
    }
  },
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
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOCAxMSAyIDIgNC00IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+CiAgPHBhdGggZD0ibTIxIDIxLTQuMy00LjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search-check
 */
export const SearchCheckIcon = createIcon('search-check', __iconNode);
