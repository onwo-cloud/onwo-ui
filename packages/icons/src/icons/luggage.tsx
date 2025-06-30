import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 20h4"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "16",
      "cy": "20",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "20",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMGEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDIiIC8+CiAgPHBhdGggZD0iTTggMThWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYxNCIgLz4KICA8cGF0aCBkPSJNMTAgMjBoNCIgLz4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjIwIiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIyMCIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/luggage
 */
export const LuggageIcon = createIcon('luggage', __iconNode);
