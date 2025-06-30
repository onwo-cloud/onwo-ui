import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 17v4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 21h8"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjYiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTIyIDEydjNhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDkiIC8+CiAgPHBhdGggZD0iTTEyIDE3djQiIC8+CiAgPHBhdGggZD0iTTggMjFoOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/monitor-dot
 */
export const MonitorDotIcon = createIcon('monitor-dot', __iconNode);
