import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M3 6h3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M17 6h.01"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "20",
      "x": "3",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "13",
      "r": "5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA2aDMiIC8+CiAgPHBhdGggZD0iTTE3IDZoLjAxIiAvPgogIDxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgeD0iMyIgeT0iMiIgcng9IjIiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iNSIgLz4KICA8cGF0aCBkPSJNMTIgMThhMi41IDIuNSAwIDAgMCAwLTUgMi41IDIuNSAwIDAgMSAwLTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/washing-machine
 */
export const WashingMachineIcon = createIcon('washing-machine', __iconNode);
