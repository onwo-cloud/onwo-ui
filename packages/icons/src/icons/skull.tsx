import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m12.5 17-.5-1-.5 1h1z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "15",
      "cy": "12",
      "r": "1"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "12",
      "r": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIuNSAxNy0uNS0xLS41IDFoMXoiIC8+CiAgPHBhdGggZD0iTTE1IDIyYTEgMSAwIDAgMCAxLTF2LTFhMiAyIDAgMCAwIDEuNTYtMy4yNSA4IDggMCAxIDAtMTEuMTIgMEEyIDIgMCAwIDAgOCAyMHYxYTEgMSAwIDAgMCAxIDF6IiAvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/skull
 */
export const SkullIcon = createIcon('skull', __iconNode);
