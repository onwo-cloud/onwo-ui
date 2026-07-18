import { component$, Slot, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';

const EASE_OUT = 'ease-[cubic-bezier(0.23,1,0.32,1)]';

export const DialTabs = component$(() => {
  return (
    <div class="items-start flex flex-col self-stretch">
      <div class="items-center flex flex-col self-stretch">
        <div class="items-start flex p-0.5 rounded-xl overflow-clip gap-0.5 self-stretch bg-shade-100">
          <Slot />
        </div>
      </div>
    </div>
  );
});

export interface DialTabItemProps {
  label: string;
  active?: boolean;
  onClick$?: QRL<() => void>;
}

export const DialTabItem = component$<DialTabItemProps>(
  ({ label, active, onClick$ }) => {
    return (
      <ButtonPrimitive
        as="div"
        onClick$={onClick$}
        class={[
          `items-center h-7 flex basis-[0%] grow justify-center px-2 rounded-lg gap-1 cursor-pointer select-none transition-[background-color,box-shadow,transform] duration-150 ${EASE_OUT} active:scale-[0.97]`,
          active
            ? 'bg-shade-150'
            : 'hover:bg-shade-1000/5',
        ]}
      >
        <Slot name="icon" />
        <div class="overflow-clip">
          <div class="inline-grid">
            <div
              class={[
                `col-start-1 row-start-1 w-max text-center [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-sans flex justify-center flex-wrap text-xs/4 transition-colors duration-150 ${EASE_OUT}`,
                active ? 'text-ink' : 'text-shade-700',
              ]}
            >
              {label}
            </div>
          </div>
        </div>
      </ButtonPrimitive>
    );
  }
);
