import { component$, Slot, useId, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { DialField } from './dial-field';

const EASE_OUT = 'ease-[cubic-bezier(0.23,1,0.32,1)]';

export interface DialRadioOption {
  value: string;
  label: string;
}

export interface DialRadioProps {
  label: string;
  options: DialRadioOption[];
  value: string;
  onSelect$?: QRL<(val: string) => void>;
  name?: string;
}

export const DialRadio = component$<DialRadioProps>(
  ({ label, options, value, onSelect$, name }) => {
    const defaultName = useId();
    const radioName = name || defaultName;

    return (
      <div role="radiogroup" aria-label={label} class="self-stretch">
        <DialField label={label} class="gap-1">
          {options.map((opt) => {
            const isActive = opt.value === value;
            return (
              <label
                key={opt.value}
                class="relative flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name={radioName}
                  value={opt.value}
                  checked={isActive}
                  onChange$={() => onSelect$?.(opt.value)}
                  style={{
                    border: '0px',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    clipPath: 'inset(50%)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: '0px',
                    position: 'absolute',
                    width: '1px',
                    whiteSpace: 'nowrap',
                  }}
                />
                <ButtonPrimitive
                  as="div"
                  onClick$={() => onSelect$?.(opt.value)}
                  class={[
                    `py-0.75 px-2 flex items-center h-fit rounded-md gap-1 select-none cursor-pointer duration-150 ${EASE_OUT} transition-[background-color,box-shadow,transform] active:scale-[0.97]`,
                    isActive
                      ? 'bg-canvas-secondary'
                      : 'hover:bg-shade-1000/5',
                  ]}
                  aria-checked={isActive}
                  role="radio"
                >
                  <Slot name={`icon-${opt.value}`} />
                  <div
                    class={[
                      `content-center basis-[0%] grow text-center font-sans flex justify-center flex-wrap text-xs/4 transition-colors duration-150 ${EASE_OUT}`,
                      isActive ? 'text-ink' : 'text-ink-secondary',
                    ]}
                  >
                    {opt.label}
                  </div>
                </ButtonPrimitive>
              </label>
            );
          })}
        </DialField>
      </div>
    );
  }
);
