import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "ellipse",
    "attr": {
      "cx": "12",
      "cy": "5",
      "rx": "9",
      "ry": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 5V19A9 3 0 0 0 15 21.84"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 5V8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 12L18 17H22L19 22"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 12A9 3 0 0 0 14.59 14.87"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMTUgMjEuODQiIC8+CiAgPHBhdGggZD0iTTIxIDVWOCIgLz4KICA8cGF0aCBkPSJNMjEgMTJMMTggMTdIMjJMMTkgMjIiIC8+CiAgPHBhdGggZD0iTTMgMTJBOSAzIDAgMCAwIDE0LjU5IDE0Ljg3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/database-zap
 */
export const DatabaseZapIcon = createIcon('database-zap', __iconNode);
