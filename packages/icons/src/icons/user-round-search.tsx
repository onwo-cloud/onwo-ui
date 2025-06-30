import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
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
      "d": "M2 21a8 8 0 0 1 10.434-7.62"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 22-1.9-1.9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjgiIHI9IjUiIC8+CiAgPHBhdGggZD0iTTIgMjFhOCA4IDAgMCAxIDEwLjQzNC03LjYyIiAvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjMiIC8+CiAgPHBhdGggZD0ibTIyIDIyLTEuOS0xLjkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/user-round-search
 */
export const UserRoundSearchIcon = createIcon('user-round-search', __iconNode);
