import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "20",
      "x": "4",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 6h.01"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "14",
      "r": "4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 14h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMiA2aC4wMSIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE0IiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAxNGguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/speaker
 */
export const SpeakerIcon = createIcon('speaker', __iconNode);
