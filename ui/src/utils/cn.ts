import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {

    classGroups: {
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
        'border',
        'inset',
        'interactive',
        'focus',
        'input',
        'input-hov',
        'input-err',
        'input-focus',
        'input-cell-focus',
        'moon-sm',
        'moon-md',
        'moon-lg',
        'moon-xl',
      ],

      'font-size': [
        'text-moon-9',
        'text-moon-9-caption',
        'text-moon-10',
        'text-moon-10-caption',
        'text-moon-12',
        'text-moon-14',
        'text-moon-16',
        'text-moon-18',
        'text-moon-20',
        'text-moon-24',
        'text-moon-32',
        'text-moon-40',
        'text-moon-48',
        'text-moon-56',
        'text-moon-64',
        'text-moon-72',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
