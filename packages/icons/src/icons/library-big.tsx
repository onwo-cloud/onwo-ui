import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "18",
      "x": "3",
      "y": "3",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 3v18"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iMyIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTcgM3YxOCIgLz4KICA8cGF0aCBkPSJNMjAuNCAxOC45Yy4yLjUtLjEgMS4xLS42IDEuM2wtMS45LjdjLS41LjItMS4xLS4xLTEuMy0uNkwxMS4xIDUuMWMtLjItLjUuMS0xLjEuNi0xLjNsMS45LS43Yy41LS4yIDEuMS4xIDEuMy42WiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/library-big
 */
export const LibraryBigIcon = createIcon('library-big', __iconNode);
