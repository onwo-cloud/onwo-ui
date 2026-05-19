import { component$, useSignal, $, type PropFunction } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'

interface ColorNameInputProps {
  value: string;
  onConfirm$: PropFunction<(newName: string) => void>;
  onCancel$: PropFunction<() => void>;
}

export const ColorNameInput = component$((props: ColorNameInputProps) => {
  const inputValue = useSignal(props.value);

  const handleValidate = $(() => {
    if (!inputValue.value.trim()) return;
    props.onConfirm$(inputValue.value);
  });

  return (
    <div
      class="flex-1 flex items-center gap-3"
      // Handle "Click Out" (FocusOut) to abort
      onFocusOut$={(e, el) => {
        // If the new focus target is NOT inside this component, we abort.
        if (!el.contains(e.relatedTarget as Node)) {
          props.onCancel$();
        }
      }}
    >
      <input
        autoFocus
        type="text"
        class="flex-1 bg-transparent border-b border-[blue] text-sm focus:outline-none text-black"
        value={inputValue.value}
        onInput$={(e) => (inputValue.value = (e.target as HTMLInputElement).value)}
        onKeyDown$={(e) => {
          if (e.key === 'Enter') handleValidate();
          if (e.key === 'Escape') props.onCancel$();
        }}
        onClick$={(e) => e.stopPropagation()}
      />

      {/* Validate Button */}
      <button
        onClick$={(e) => {
          e.stopPropagation();
          handleValidate();
        }}
        class="p-1 rounded text-green-600 hover:bg-green-600/10"
        aria-label="Save name"
      >
        <Icon name="check"  size="xs"  />
      </button>

      {/* Abort Button */}
      <button
        onClick$={(e) => {
          e.stopPropagation();
          props.onCancel$();
        }}
        class="p-1 rounded text-red-500 hover:bg-red-500/10"
        aria-label="Cancel edit"
      >
        <Icon name="x" size="xs" />
      </button>
    </div>
  );
});
