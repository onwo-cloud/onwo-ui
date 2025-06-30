import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "16.5",
      "cy": "7.5",
      "r": ".5",
      "fill": "currentColor"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi41ODYgMTcuNDE0QTIgMiAwIDAgMCAyIDE4LjgyOFYyMWExIDEgMCAwIDAgMSAxaDNhMSAxIDAgMCAwIDEtMXYtMWExIDEgMCAwIDEgMS0xaDFhMSAxIDAgMCAwIDEtMXYtMWExIDEgMCAwIDEgMS0xaC4xNzJhMiAyIDAgMCAwIDEuNDE0LS41ODZsLjgxNC0uODE0YTYuNSA2LjUgMCAxIDAtNC00eiIgLz4KICA8Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/key-round
 */
export const KeyRoundIcon = createIcon('key-round', __iconNode);
