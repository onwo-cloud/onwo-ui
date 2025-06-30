import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "15",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "7",
      "x": "6",
      "y": "8",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 8v7"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 19v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 19v2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjciIHg9IjYiIHk9IjgiIHJ4PSIxIiAvPgogIDxwYXRoIGQ9Ik0xOCA4djciIC8+CiAgPHBhdGggZD0iTTYgMTl2MiIgLz4KICA8cGF0aCBkPSJNMTggMTl2MiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/microwave
 */
export const MicrowaveIcon = createIcon('microwave', __iconNode);
