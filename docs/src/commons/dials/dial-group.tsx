import { component$, Slot, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';

const EASE_OUT = 'ease-[cubic-bezier(0.23,1,0.32,1)]';
const EASE_DRAWER = 'ease-[cubic-bezier(0.32,0.72,0,1)]';

export interface DialGroupProps {
  title: string;
  isOpen?: boolean;
  onToggle$?: QRL<() => void>;
}

export const DialGroup = component$<DialGroupProps>(
  ({ title, isOpen = true, onToggle$ }) => {
    return (
      <div
        class={[
          'items-center flex flex-col rounded-2xl self-stretch border border-solid transition-colors duration-150',
          isOpen ? 'border-shade-1000/5' : 'border-transparent',
        ]}
      >
        <ButtonPrimitive
          as="div"
          onClick$={onToggle$}
          class={`items-center self-stretch flex h-12 px-4 w-full justify-between cursor-pointer select-none transition-colors duration-150 ${EASE_OUT}`}
        >
          <div class="content-center basis-[0%] grow text-sm font-sans text-ink">
            {title}
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class={[
              `transition-transform duration-200 ${EASE_OUT} shrink-0`,
              isOpen ? 'rotate-180' : 'rotate-0',
            ]}
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="#737373"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ButtonPrimitive>

        <div
          class={[
            `grid w-full transition-[grid-template-rows,opacity] duration-250 ${EASE_DRAWER}`,
            isOpen
              ? 'grid-rows-[1fr] opacity-100 pointer-events-auto'
              : 'grid-rows-[0fr] opacity-0 pointer-events-none',
          ]}
        >
          <div class="overflow-hidden">
            <div class="flex flex-col gap-2 pb-3 px-4 self-stretch">
              <Slot />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
