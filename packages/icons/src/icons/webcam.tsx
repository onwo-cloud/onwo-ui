import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "10",
      "r": "8"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "10",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 22h10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 22v-4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI4IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTcgMjJoMTAiIC8+CiAgPHBhdGggZD0iTTEyIDIydi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/webcam
 */
export const WebcamIcon = createIcon('webcam', __iconNode);
