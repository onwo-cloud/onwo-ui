import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "6",
      "x": "2",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "4",
      "height": "6",
      "x": "8",
      "y": "16",
      "rx": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeD0iMiIgeT0iMiIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTEwIDE2di0yYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDAgMi0yVjdhMiAyIDAgMCAwLTItMmgtMiIgLz4KICA8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI2IiB4PSI4IiB5PSIxNiIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/paint-roller
 */
export const PaintRollerIcon = createIcon('paint-roller', __iconNode);
