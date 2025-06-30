import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 6a6 6 0 0 1 6 6v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 15v-3a6 6 0 0 1 6-6"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "2",
      "y": "15",
      "width": "20",
      "height": "4",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTBWNWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXY1IiAvPgogIDxwYXRoIGQ9Ik0xNCA2YTYgNiAwIDAgMSA2IDZ2MyIgLz4KICA8cGF0aCBkPSJNNCAxNXYtM2E2IDYgMCAwIDEgNi02IiAvPgogIDxyZWN0IHg9IjIiIHk9IjE1IiB3aWR0aD0iMjAiIGhlaWdodD0iNCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/hard-hat
 */
export const HardHatIcon = createIcon('hard-hat', __iconNode);
