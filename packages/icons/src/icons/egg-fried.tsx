import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "11.5",
      "cy": "12.5",
      "r": "3.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMS41IiBjeT0iMTIuNSIgcj0iMy41IiAvPgogIDxwYXRoIGQ9Ik0zIDhjMC0zLjUgMi41LTYgNi41LTYgNSAwIDQuODMgMyA3LjUgNXM1IDIgNSA2YzAgNC41LTIuNSA2LjUtNyA2LjUtMi41IDAtMi41IDIuNS02IDIuNXMtNy0yLTctNS41YzAtMyAxLjUtMyAxLjUtNUMzLjUgMTAgMyA5IDMgOFoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/egg-fried
 */
export const EggFriedIcon = createIcon('egg-fried', __iconNode);
