import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'ring-width': [/^ring-\d+$/],
      'ring-color': ['ring-transparent', 'ring-black', 'ring-white', /^ring-[a-z0-9-_]+$/],
      'ring-inset': ['ring-inset'],
      'ring-opacity': [/^ring-opacity-\d+$/],

      animate: [
        'loader',
        'rightslide',
        'leftslide',
        'topslide',
        'bottomslide',
        'fadeout',
        'drawer_enter_right',
        'drawer_enter_left',
        'drawer_enter_top',
        'drawer_enter_bottom',
        'drawer_leave_right',
        'drawer_leave_left',
        'drawer_leave_top',
        'drawer_leave_bottom',
        'backdrop_enter',
        'backdrop_leave',
        'backdrop_leave_swipe',
        'modal_enter',
        'modal_leave',
      ],

      shadow: [
        'inset',
        'interactive',
        'focus',
        'contour',
        'input',
        'input-hov',
        'input-err',
        'input-focus',
        'input-mint-focus',
        'onwo-sm',
        'onwo-md',
        'onwo-lg',
        'onwo-xl',
      ],

      'font-size': [
        'text-onwo-9',
        'text-onwo-9-caption',
        'text-onwo-10',
        'text-onwo-10-caption',
        'text-onwo-12',
        'text-onwo-14',
        'text-onwo-16',
        'text-onwo-18',
        'text-onwo-20',
        'text-onwo-24',
        'text-onwo-32',
        'text-onwo-40',
        'text-onwo-48',
        'text-onwo-56',
        'text-onwo-64',
        'text-onwo-72',
      ],
    },
  },
} as any);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
