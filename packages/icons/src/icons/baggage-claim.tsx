import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "13",
      "height": "8",
      "x": "8",
      "y": "6",
      "rx": "1"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "20",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "20",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMThINmEyIDIgMCAwIDEtMi0yVjdhMiAyIDAgMCAwLTItMiIgLz4KICA8cGF0aCBkPSJNMTcgMTRWNGEyIDIgMCAwIDAtMi0yaC0xYTIgMiAwIDAgMC0yIDJ2MTAiIC8+CiAgPHJlY3Qgd2lkdGg9IjEzIiBoZWlnaHQ9IjgiIHg9IjgiIHk9IjYiIHJ4PSIxIiAvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iMjAiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIwIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/baggage-claim
 */
export const BaggageClaimIcon = createIcon('baggage-claim', __iconNode);
