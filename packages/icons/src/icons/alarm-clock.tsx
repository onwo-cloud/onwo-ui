import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "13",
      "r": "8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 9v4l2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 3 2 6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 6-3-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6.38 18.7 4 21"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17.64 18.67 20 21"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSI4IiAvPgogIDxwYXRoIGQ9Ik0xMiA5djRsMiAyIiAvPgogIDxwYXRoIGQ9Ik01IDMgMiA2IiAvPgogIDxwYXRoIGQ9Im0yMiA2LTMtMyIgLz4KICA8cGF0aCBkPSJNNi4zOCAxOC43IDQgMjEiIC8+CiAgPHBhdGggZD0iTTE3LjY0IDE4LjY3IDIwIDIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/alarm-clock
 */
export const AlarmClockIcon = createIcon('alarm-clock', __iconNode);
