import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "6.5",
      "cy": "9.5",
      "r": ".5",
      "fill": "currentColor"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgNSA2LjMgNi4zYTIuNCAyLjQgMCAwIDEgMCAzLjRMMTcgMTkiIC8+CiAgPHBhdGggZD0iTTkuNTg2IDUuNTg2QTIgMiAwIDAgMCA4LjE3MiA1SDNhMSAxIDAgMCAwLTEgMXY1LjE3MmEyIDIgMCAwIDAgLjU4NiAxLjQxNEw4LjI5IDE4LjI5YTIuNDI2IDIuNDI2IDAgMCAwIDMuNDIgMGwzLjU4LTMuNThhMi40MjYgMi40MjYgMCAwIDAgMC0zLjQyeiIgLz4KICA8Y2lyY2xlIGN4PSI2LjUiIGN5PSI5LjUiIHI9Ii41IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/tags
 */
export const TagsIcon = createIcon('tags', __iconNode);
