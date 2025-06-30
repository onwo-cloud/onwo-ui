import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "4",
      "x": "8",
      "y": "2",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 13.5V6a2 2 0 0 1 2-2h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgLz4KICA8cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtNS41IiAvPgogIDxwYXRoIGQ9Ik00IDEzLjVWNmEyIDIgMCAwIDEgMi0yaDIiIC8+CiAgPHBhdGggZD0iTTEzLjM3OCAxNS42MjZhMSAxIDAgMSAwLTMuMDA0LTMuMDA0bC01LjAxIDUuMDEyYTIgMiAwIDAgMC0uNTA2Ljg1NGwtLjgzNyAyLjg3YS41LjUgMCAwIDAgLjYyLjYybDIuODctLjgzN2EyIDIgMCAwIDAgLjg1NC0uNTA2eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clipboard-pen
 */
export const ClipboardPenIcon = createIcon('clipboard-pen', __iconNode);
