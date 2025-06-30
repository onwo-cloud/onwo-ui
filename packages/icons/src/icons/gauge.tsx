import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m12 14 4-4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3.34 19a10 10 0 1 1 17.32 0"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTQgNC00IiAvPgogIDxwYXRoIGQ9Ik0zLjM0IDE5YTEwIDEwIDAgMSAxIDE3LjMyIDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gauge
 */
export const GaugeIcon = createIcon('gauge', __iconNode);
