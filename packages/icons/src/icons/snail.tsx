import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "13",
      "r": "8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 3 19.1 5.2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 3 20.9 5.2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiAxM2E2IDYgMCAxIDAgMTIgMCA0IDQgMCAxIDAtOCAwIDIgMiAwIDAgMCA0IDAiIC8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMyIgcj0iOCIgLz4KICA8cGF0aCBkPSJNMiAyMWgxMmM0LjQgMCA4LTMuNiA4LThWN2EyIDIgMCAxIDAtNCAwdjYiIC8+CiAgPHBhdGggZD0iTTE4IDMgMTkuMSA1LjIiIC8+CiAgPHBhdGggZD0iTTIyIDMgMjAuOSA1LjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/snail
 */
export const SnailIcon = createIcon('snail', __iconNode);
