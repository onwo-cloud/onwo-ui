import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "12",
      "r": "4"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "12",
      "r": "4"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "18",
      "y1": "16",
      "y2": "16"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjQiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxMiIgcj0iNCIgLz4KICA8bGluZSB4MT0iNiIgeDI9IjE4IiB5MT0iMTYiIHkyPSIxNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/voicemail
 */
export const VoicemailIcon = createIcon('voicemail', __iconNode);
