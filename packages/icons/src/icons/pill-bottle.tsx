import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "5",
      "x": "4",
      "y": "2",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMTFoLTRhMSAxIDAgMCAwLTEgMXY1YTEgMSAwIDAgMCAxIDFoNCIgLz4KICA8cGF0aCBkPSJNNiA3djEzYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjciIC8+CiAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjUiIHg9IjQiIHk9IjIiIHJ4PSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/pill-bottle
 */
export const PillBottleIcon = createIcon('pill-bottle', __iconNode);
