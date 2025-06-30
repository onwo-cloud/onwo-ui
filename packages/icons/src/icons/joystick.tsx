import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 15v-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 15V9"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "6",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTdhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTJaIiAvPgogIDxwYXRoIGQ9Ik02IDE1di0yIiAvPgogIDxwYXRoIGQ9Ik0xMiAxNVY5IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iNiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/joystick
 */
export const JoystickIcon = createIcon('joystick', __iconNode);
