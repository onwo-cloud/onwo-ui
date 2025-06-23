import { useStyles$ } from '@builder.io/qwik';

export const useToasterStyles = () =>
  useStyles$(`
  [data-onwo-toaster] {
    position: fixed;
    width: var(--width);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
  }

  [data-onwo-toaster][data-x-position='right'] {
    right: var(--margin);
  }

  [data-onwo-toaster][data-x-position='left'] {
    left: var(--margin);
  }

  [data-onwo-toaster][data-x-position='center'] {
    left: 50%;
    transform: translateX(-50%);
  }

  [data-onwo-toaster][data-y-position='top'] {
    --toast-direction: -1;
    top: var(--margin);
  }

  [data-onwo-toaster][data-y-position='bottom'] {
    --toast-direction: 1;
    bottom: var(--margin);
  }

  @media (max-width: 600px) {
    [data-onwo-toaster] {
      --margin: 16px;
      left: 0;
      right: 0;
      width: 100%;
    }

    [data-onwo-toaster] [data-onwo-toast] {
      width: calc(100% - 2 * var(--margin));
      margin-left: var(--margin);
      margin-right: auto;
    }
  }

  [data-onwo-toast] {
    --scale: calc(1 - calc(var(--toast-count) - var(--index) - 1) * 0.05);
    --y: calc(calc(var(--toast-count) - var(--index) - 1) * 8px);
    --end-ty: 40px;
    position: absolute;
    transform: translateY(calc(var(--toast-direction) * var(--end-ty) - 1 * var(--y) * var(--toast-direction))) scale(var(--scale));
    opacity: 0;
    transition: transform 400ms, opacity 400ms, height 400ms, box-shadow 200ms;
  }

  [data-onwo-toaster][data-y-position='bottom'] [data-onwo-toast] {
    bottom: 0;
  }

  [data-onwo-toaster][data-y-position='top'] [data-onwo-toast] {
    top: 0;
  }

  [data-onwo-toast][data-mounted] {
    opacity: 1;
    --end-ty: 0px;
  }

  [data-onwo-toast][data-removed] {
    opacity: 0;
    --end-ty: 16px;
  }

  [data-onwo-toaster][data-hover] [data-onwo-toast][data-mounted] {
    --scale: 1;
    --y: var(--base-y);
    height: var(--base-height);
  }
`);
