import { component$, useStyles$ } from '@builder.io/qwik';

export const TerminalAnimatedIcon = component$(() => {
  useStyles$(`
      .terminal-shaft, .terminal-chevron {
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }


      .terminal-shaft {
        stroke-linecap: butt;
        transform: translate(16px, 19px); /* Initial position of the cursor */
      }

      .terminal-chevron {
        stroke-linejoin: miter;
        stroke-linecap: butt;
        transform-origin: 7px 11px; /* Center of the chevron shape for rotation */
        transform: none;
      }

      svg.text-black .terminal-shaft,
      svg.text-black .terminal-chevron {
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      svg.term-icon {
          &:is(:where(.group\\/term-icon):hover *) {

              &  .terminal-shaft {
                transform: translate(10px, 13px) rotate(-45deg) scaleX(1.65);
              }

              & .terminal-chevron {
                transform: translate(7px, -2px) rotate(-45deg);
              }
          }
      }

  `);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="2"
      class="term-icon"
    >
      <path class="terminal-shaft" d="M -4 0 L 4 0"></path>
      <path class="terminal-chevron" d="M4 17 L 10 11 L 4 5"></path>
    </svg>
  );
});
