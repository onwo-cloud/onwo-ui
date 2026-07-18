import { component$, useId, type QRL } from '@qwik.dev/core';
import { DialField } from './dial-field';

export interface DialInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onInput$?: QRL<(val: string) => void>;
  name?: string;
}

export const DialInput = component$<DialInputProps>(
  ({ label, value, placeholder = '[empty]', onInput$, name }) => {
    const inputId = useId();

    return (
      <DialField label={label} for={inputId}>
        <div class="items-center flex w-full px-2 py-0.75 rounded-md hover:bg-shade-1000/5 focus-within:bg-shade-1000/5 transition-colors">
          <input
            id={inputId}
            type="text"
            name={name}
            spellcheck={false}
            value={value}
            placeholder={placeholder}
            onInput$={(e) =>
              onInput$?.((e.target as HTMLInputElement).value)
            }
            class="bg-transparent text-sm/4 font-sans text-ink outline-none border-none p-0 m-0 placeholder:text-[#A3A3A3] w-full"
          />
        </div>
      </DialField>
    );
  }
);

export const DialText = DialInput;
