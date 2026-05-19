import { component$, useComputed$, type PropFunction, useSignal, $ } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { SwatchContext } from '../../../context/swatch-context';
import { Palette } from '../../../types';

import { ColorNameInput } from './color-name-input';
import { GradientCircle } from './gradient-circle';

interface ColorListItemProps {
  palette: Palette;
  isSelected: boolean;
  onSelect$: PropFunction<() => void>;
  onRemove$: PropFunction<(id: number) => void>;
}

export const ColorListItem = component$((props: ColorListItemProps) => {
  const { isSelected } = props;
  const swatchContext = SwatchContext.use();
  const isEditing = useSignal(false);

  const swatches = useComputed$(() => {
    return swatchContext.swatches.value[props.palette.id] || [];
  });

  const handleRename = $(async (newName: string) => {
    // Perform update via context
    // swatchContext.updateSwatch(props.color.id, { ...props.color, name: newName });
    console.log('Renaming to:', newName);

    // Close edit mode
    isEditing.value = false;
  });

  return (
    <div
      role="button"
      tabIndex={isSelected ? -1 : 0}
      onClick$={(e) => {
        // Prevent selecting the row if we are currently editing
        if (isEditing.value) {
          e.stopPropagation();
          return;
        }
        if (!isSelected) props.onSelect$();
      }}
      onKeyDown$={(e) => {
        if (!isEditing.value && !isSelected && (e.key === 'Enter' || e.key === ' ')) {
          props.onSelect$();
        }
      }}
      class={[
        'group flex items-center gap-3 px-4 py-1 rounded-sm transition-colors cursor-pointer select-none',
        props.isSelected
          ? 'bg-white text-[blue] cursor-default'
          : 'bg-[yellow] text-[blue] hover:bg-[blue]/10',
      ]}
    >
      <GradientCircle swatches={swatches.value} />

      {/* --- CONDITIONAL RENDERING --- */}
      {isEditing.value ? (
        <ColorNameInput
          value={props.palette.name}
          onConfirm$={handleRename}
          onCancel$={$(() => (isEditing.value = false))}
        />
      ) : (
        <>
          <span class="flex-1 text-left text-sm capitalize">{props.palette.name}</span>

          <button
            onClick$={(e) => {
              e.stopPropagation();
              isEditing.value = true;
            }}
            class="p-1 rounded transition-text text-transparent group-hover:text-[blue] group-focus-within:text-[blue] focus:text-[blue] hover:text-black hover:bg-[black]/10"
            aria-label={`Rename color ${props.palette.name}`}
          >
            <Icon name="text-cursor-input"  size="xs"  />
          </button>

          <button
            onClick$={(e) => {
              e.stopPropagation();
              props.onRemove$(props.palette.id);
            }}
            class="p-1 rounded transition-text text-transparent group-hover:text-[blue] group-focus-within:text-[blue] focus:text-[blue] hover:text-red-500 hover:bg-red-500/10"
            aria-label={`Remove color ${props.palette.name}`}
          >
            <Icon name="trash"  size="xs"  />
          </button>
        </>
      )}
    </div>
  );
});
