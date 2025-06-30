import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTZINGEyIDIgMCAxIDEgMC00aDE2YTIgMiAwIDEgMSAwIDRoLTQuMjUiIC8+CiAgPHBhdGggZD0iTTUgMTJhMiAyIDAgMCAxLTItMiA5IDcgMCAwIDEgMTggMCAyIDIgMCAwIDEtMiAyIiAvPgogIDxwYXRoIGQ9Ik01IDE2YTIgMiAwIDAgMC0yIDIgMyAzIDAgMCAwIDMgM2gxMmEzIDMgMCAwIDAgMy0zIDIgMiAwIDAgMC0yLTJxMCAwIDAgMCIgLz4KICA8cGF0aCBkPSJtNi42NyAxMiA2LjEzIDQuNmEyIDIgMCAwIDAgMi44LS40bDMuMTUtNC4yIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/hamburger
 */
export const HamburgerIcon = createIcon('hamburger', __iconNode);
