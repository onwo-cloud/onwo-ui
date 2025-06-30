import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M 22 14 L 22 10"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "2",
      "y": "6",
      "width": "16",
      "height": "12",
      "rx": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNIDIyIDE0IEwgMjIgMTAiIC8+CiAgPHJlY3QgeD0iMiIgeT0iNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/battery
 */
export const BatteryIcon = createIcon('battery', __iconNode);
