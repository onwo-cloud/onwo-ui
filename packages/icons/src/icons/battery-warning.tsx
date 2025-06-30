import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10 17h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 7v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 14v-4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTdoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMCA3djYiIC8+CiAgPHBhdGggZD0iTTE0IDZoMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMmgtMiIgLz4KICA8cGF0aCBkPSJNMjIgMTR2LTQiIC8+CiAgPHBhdGggZD0iTTYgMThINGEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmgyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/battery-warning
 */
export const BatteryWarningIcon = createIcon('battery-warning', __iconNode);
