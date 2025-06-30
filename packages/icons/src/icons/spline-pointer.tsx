import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 17A12 12 0 0 1 17 5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "5",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "19",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuMDM0IDEyLjY4MWEuNDk4LjQ5OCAwIDAgMSAuNjQ3LS42NDdsOSAzLjVhLjUuNSAwIDAgMS0uMDMzLjk0M2wtMy40NDQgMS4wNjhhMSAxIDAgMCAwLS42Ni42NmwtMS4wNjcgMy40NDNhLjUuNSAwIDAgMS0uOTQzLjAzM3oiIC8+CiAgPHBhdGggZD0iTTUgMTdBMTIgMTIgMCAwIDEgMTcgNSIgLz4KICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjUiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE5IiByPSIyIiAvPgo8L3N2Zz4=) - https://lucide.dev/icons/spline-pointer
 */
export const SplinePointerIcon = createIcon('spline-pointer', __iconNode);
