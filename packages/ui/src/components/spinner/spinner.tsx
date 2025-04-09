import { component$, useComputed$, useStyles$ } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export type SpinnerProps = {
  size?: SpinnerSize; // default: md
};

const style = `
.uk-icon {
    display: inline-flex;
    fill: currentcolor;
}
.uk-icon>* {
    transform: translate(0);
}

.uk-spinner>* {
    animation: uk-spinner-rotate 1.4s linear infinite;
}

.uk-icon:not(.uk-preserve) [stroke*="#"]:not(.uk-preserve) {
    stroke: currentcolor;
}
.uk-spinner>*>* {
    stroke-dasharray: 88px;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: uk-spinner-dash 1.4s ease-in-out infinite;
    stroke-width: 1;
    stroke-linecap: round;
}

@keyframes uk-spinner-dash {
  0% {
      stroke-dashoffset: 88px;
  }
  50% {
      stroke-dashoffset: 22px;
      transform: rotate(135deg);
  }
  100% {
      stroke-dashoffset: 88px;
      transform: rotate(450deg);
  }
}

@keyframes uk-spinner-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(270deg);
  }
}`;

export const Spinner = component$(
  withAs('div')<SpinnerProps>(({ As, size = 'md', class: className, ...props }) => {
    // eslint-disable-next-line qwik/use-method-usage
    useStyles$(style);

    // eslint-disable-next-line qwik/use-method-usage
    const sizePx = useComputed$(() => {
      switch (size) {
        case 'xs': {
          return 12;
        }
        case 'sm': {
          return 16;
        }
        case 'md': {
          return 24;
        }
        case 'lg': {
          return 28;
        }
        case 'xl': {
          return 36;
        }
        default: {
          return size;
        }
      }
    });

    return (
      <As class={cn('uk-icon uk-spinner', className)} role="status" {...props}>
        <svg width={sizePx.value} height={sizePx.value} viewBox="0 0 30 30">
          <circle fill="none" stroke="currentColor" cx="15" cy="15" r="14"></circle>
        </svg>
      </As>
    );
  }),
);
