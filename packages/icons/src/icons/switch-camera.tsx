import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m18 22-3-3 3-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6 2 3 3-3 3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTlINGEyIDIgMCAwIDEtMi0yVjdhMiAyIDAgMCAxIDItMmg1IiAvPgogIDxwYXRoIGQ9Ik0xMyA1aDdhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC01IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIC8+CiAgPHBhdGggZD0ibTE4IDIyLTMtMyAzLTMiIC8+CiAgPHBhdGggZD0ibTYgMiAzIDMtMyAzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/switch-camera
 */
export const SwitchCameraIcon = createIcon('switch-camera', __iconNode);
