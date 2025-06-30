import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 14v.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 14v.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M11.25 16.25h1.5L12 17l-.75-.75Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNWMuNjcgMCAxLjM1LjA5IDIgLjI2IDEuNzgtMiA1LjAzLTIuODQgNi40Mi0yLjI2IDEuNC41OC0uNDIgNy0uNDIgNyAuNTcgMS4wNyAxIDIuMjQgMSAzLjQ0QzIxIDE3LjkgMTYuOTcgMjEgMTIgMjFzLTktMy05LTcuNTZjMC0xLjI1LjUtMi40IDEtMy40NCAwIDAtMS44OS02LjQyLS41LTcgMS4zOS0uNTggNC43Mi4yMyA2LjUgMi4yM0E5LjA0IDkuMDQgMCAwIDEgMTIgNVoiIC8+CiAgPHBhdGggZD0iTTggMTR2LjUiIC8+CiAgPHBhdGggZD0iTTE2IDE0di41IiAvPgogIDxwYXRoIGQ9Ik0xMS4yNSAxNi4yNWgxLjVMMTIgMTdsLS43NS0uNzVaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cat
 */
export const CatIcon = createIcon('cat', __iconNode);
