import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M6 5v11"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 5v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 5v14"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiA1djExIiAvPgogIDxwYXRoIGQ9Ik0xMiA1djYiIC8+CiAgPHBhdGggZD0iTTE4IDV2MTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/kanban
 */
export const KanbanIcon = createIcon('kanban', __iconNode);
