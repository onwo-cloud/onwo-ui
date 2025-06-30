import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "x": "3",
      "y": "8",
      "width": "18",
      "height": "4",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 8v13"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIzIiB5PSI4IiB3aWR0aD0iMTgiIGhlaWdodD0iNCIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTEyIDh2MTMiIC8+CiAgPHBhdGggZD0iTTE5IDEydjdhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTciIC8+CiAgPHBhdGggZD0iTTcuNSA4YTIuNSAyLjUgMCAwIDEgMC01QTQuOCA4IDAgMCAxIDEyIDhhNC44IDggMCAwIDEgNC41LTUgMi41IDIuNSAwIDAgMSAwIDUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gift
 */
export const GiftIcon = createIcon('gift', __iconNode);
