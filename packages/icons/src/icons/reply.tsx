import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M20 18v-2a4 4 0 0 0-4-4H4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 17-5-5 5-5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTh2LTJhNCA0IDAgMCAwLTQtNEg0IiAvPgogIDxwYXRoIGQ9Im05IDE3LTUtNSA1LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/reply
 */
export const ReplyIcon = createIcon('reply', __iconNode);
