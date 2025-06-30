import type { QRL } from '@builder.io/qwik';
import { component$, useSignal, $, useTask$ } from '@builder.io/qwik';
import { SearchIcon, XIcon } from '@onwo/icons';
import { BORDER_CLASSES } from '.';

interface SearchBarProps {
  placeholder?: string;
  showIcon?: boolean;
  onSearch?: QRL<(value: string) => void>;
  onClear?: QRL<() => void>;
  class?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  [key: string]: any;
}

export const SearchBar = component$<SearchBarProps>(
  ({
    placeholder = 'Search anything',
    showIcon = true,
    onSearch,
    onClear,
    class: className = '',
    disabled = false,
    autoFocus = false,
    ...props
  }) => {
    const content = useSignal('');
    const isFocused = useSignal(false);
    const inputRef = useSignal<HTMLInputElement>();

    const handleInputChange = $((e: Event) => {
      const target = e.target as HTMLInputElement;
      const newValue = target.value;
      content.value = newValue;
      onSearch?.(newValue);
    });

    const handleClear = $(() => {
      content.value = '';
      onClear?.();
      inputRef.value?.focus();
    });

    const handleKeyDown = $((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (content.value) {
          handleClear();
        } else {
          inputRef.value?.blur();
        }
      }
    });

    useTask$(({ track }) => {
      track(() => autoFocus);
      if (autoFocus && inputRef.value) {
        inputRef.value.focus();
      }
    });

    return (
      <div
        class={`flex items-center gap-2 relative w-80 pl-4 pr-4 py-2 focus-within:ring-[#3b82f6] focus-within:ring-2 hover:ring-[#a3a3a3] focus-within:hover:ring-[#3b82f6] ${BORDER_CLASSES} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
        role="search"
        aria-label="Search"
        onClick$={() => {
          inputRef.value?.focus();
        }}
      >
        {showIcon && (
          <SearchIcon size="sm" class="pointer-events-none flex-shrink-0" aria-hidden="true" />
        )}

        <input
          ref={inputRef}
          type="text"
          value={content.value}
          onInput$={handleInputChange}
          onKeyDown$={handleKeyDown}
          onFocus$={() => (isFocused.value = true)}
          onBlur$={() => (isFocused.value = false)}
          placeholder={placeholder}
          disabled={disabled}
          class="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-gray-900 disabled:cursor-not-allowed"
          aria-label={placeholder}
          aria-describedby="search-instructions"
          {...props}
        />

        {content.value.trim().length > 0 && (
          <button
            onClick$={handleClear}
            onClickCapture$={(e) => e.stopPropagation()}
            class="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150 flex-shrink-0"
            aria-label="Clear search"
            type="button"
          >
            <XIcon size="xs" class="text-gray-500" />
          </button>
        )}

        <div id="search-instructions" class="sr-only">
          Press Escape to clear search or close
        </div>
      </div>
    );
  },
);
