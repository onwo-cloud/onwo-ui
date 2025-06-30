import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "8",
      "x": "3",
      "y": "3",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 11v4a2 2 0 0 0 2 2h4"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "8",
      "x": "13",
      "y": "13",
      "rx": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIzIiB5PSIzIiByeD0iMiIgLz4KICA8cGF0aCBkPSJNNyAxMXY0YTIgMiAwIDAgMCAyIDJoNCIgLz4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxMyIgeT0iMTMiIHJ4PSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/workflow
 */
export const WorkflowIcon = createIcon('workflow', __iconNode);
