import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "x": "8",
      "y": "8",
      "width": "8",
      "height": "8",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMiIgLz4KICA8cGF0aCBkPSJNNCAxMGEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDIiIC8+CiAgPHBhdGggZD0iTTE0IDIwYTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bring-to-front
 */
export const BringToFrontIcon = createIcon('bring-to-front', __iconNode);
