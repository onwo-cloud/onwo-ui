import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "8",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggOGMwIDMuNjEzLTMuODY5IDcuNDI5LTUuMzkzIDguNzk1YTEgMSAwIDAgMS0xLjIxNCAwQzkuODcgMTUuNDI5IDYgMTEuNjEzIDYgOGE2IDYgMCAwIDEgMTIgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTguNzE0IDE0aC0zLjcxYTEgMSAwIDAgMC0uOTQ4LjY4M2wtMi4wMDQgNkExIDEgMCAwIDAgMyAyMmgxOGExIDEgMCAwIDAgLjk0OC0xLjMxNmwtMi02YTEgMSAwIDAgMC0uOTQ5LS42ODRoLTMuNzEyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/map-pinned
 */
export const MapPinnedIcon = createIcon('map-pinned', __iconNode);
