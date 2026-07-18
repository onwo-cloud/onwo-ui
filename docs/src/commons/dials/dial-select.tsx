import { component$, type QRL } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { MenuRoot, MenuTrigger, MenuPopup, MenuItem } from '~ui/@kit/menu';
import { DialField } from './dial-field';

const EASE_OUT = 'ease-[cubic-bezier(0.23,1,0.32,1)]';

export interface DialSelectOption {
  value: string;
  label: string;
}

export interface DialSelectProps {
  label: string;
  value: string;
  options?: DialSelectOption[];
  onSelect$?: QRL<(val: string) => void>;
}

export const DialSelect = component$<DialSelectProps>(
  ({ label, value, options = [], onSelect$ }) => {
    const selectedOption = options.find((opt) => opt.value === value);
    const displayValue = selectedOption ? selectedOption.label : value;

    return (
      <DialField label={label}>
        <MenuRoot>
          <MenuTrigger>
            <ButtonPrimitive
              as="div"
              class={`items-center self-stretch flex py-0.75 px-2 rounded-md gap-1 cursor-pointer transition-[background-color,transform] duration-150 ${EASE_OUT} active:scale-[0.98] hover:bg-shade-1000/5 select-none`}
            >
              <div class="content-center basis-[0%] grow text-right font-sans flex justify-end flex-wrap text-ink text-sm/4">
                {displayValue}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14.013"
                class="shrink-0"
              >
                <path
                  d="M4.084 8.77l2.916 2.923 2.916-2.923"
                  fill="none"
                  stroke="#737373"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.084 5.261l2.916-2.922 2.916 2.922"
                  fill="none"
                  stroke="#737373"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </ButtonPrimitive>
          </MenuTrigger>
          {options.length > 0 && (
            <MenuPopup side="bottom" sideOffset={8}>
              <div role="group">
                {options.map((opt) => (
                  <MenuItem
                    key={opt.value}
                    onClick$={() => onSelect$?.(opt.value)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </div>
            </MenuPopup>
          )}
        </MenuRoot>
      </DialField>
    );
  }
);
