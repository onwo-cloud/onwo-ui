import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M9 10h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 10h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAxMGguMDEiIC8+CiAgPHBhdGggZD0iTTE1IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMmE4IDggMCAwIDAtOCA4djEybDMtMyAyLjUgMi41TDEyIDE5bDIuNSAyLjVMMTcgMTlsMyAzVjEwYTggOCAwIDAgMC04LTh6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ghost
 */
export const GhostIcon = createIcon('ghost', __iconNode);
