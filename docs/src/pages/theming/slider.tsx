import { component$, useSignal, $, type QRL } from '@qwik.dev/core';
import {
  PopoverRoot,
  PopoverPanel,
  usePopoverContext,
} from '~primitives/@kit/popover';

const EASE_OUT = 'ease-[cubic-bezier(0.23,1,0.32,1)]';

export interface SliderProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  hasTicks?: boolean;
  unit?: string;
  showSign?: boolean;
  decimals?: number;
  onChange$?: QRL<(val: number) => void>;
  formatValue$?: QRL<(val: number) => string>;
}

function formatVal(
  val: number,
  decimals?: number,
  step = 0.01,
  showSign = false,
  unit = ''
) {
  let formatted = val.toString();
  if (decimals !== undefined) {
    formatted = val.toFixed(decimals);
  } else if (step < 1) {
    formatted = val.toFixed(step < 0.01 ? 3 : 2);
  } else {
    formatted = Math.round(val).toString();
  }

  if (showSign && val > 0) {
    formatted = `+${formatted}`;
  }

  if (unit) {
    formatted = `${formatted}${unit}`;
  }
  return formatted;
}

function getClampedValueFromClientX(
  clientX: number,
  rect: DOMRect,
  min: number,
  max: number,
  step: number
) {
  const activeWidth = rect.width;
  if (activeWidth <= 0) return min;

  const xRel = clientX - rect.left;
  const pct = Math.max(0, Math.min(1, xRel / activeWidth));
  const rawValue = min + pct * (max - min);
  const stepped = Math.round((rawValue - min) / step) * step + min;
  return Math.max(min, Math.min(max, Number(stepped.toFixed(4))));
}

const SliderContent = component$<SliderProps>(
  ({
    label,
    value,
    min = 0,
    max = 1,
    step = 0.01,
    hasTicks,
    unit = '',
    showSign = false,
    decimals,
    onChange$,
  }) => {
    const context = usePopoverContext();
    const trackRef = useSignal<HTMLDivElement>();
    const isDragging = useSignal(false);
    const isHovered = useSignal(false);
    const isFocused = useSignal(false);

    const percentage = Math.max(
      0,
      Math.min(100, ((value - min) / (max - min)) * 100)
    );

    const hoverValue = useSignal(value);

    const formattedValue = formatVal(value, decimals, step, showSign, unit);
    const formattedHoverValue = formatVal(hoverValue.value, decimals, step, showSign, unit);

    const updateHoverValue = $((clientX: number) => {
      if (!trackRef.value) return;
      const rect = trackRef.value.getBoundingClientRect();
      hoverValue.value = getClampedValueFromClientX(clientX, rect, min, max, step);
    });

    const updateFromPointer = $((clientX: number) => {
      if (!trackRef.value) return;
      const rect = trackRef.value.getBoundingClientRect();
      const clamped = getClampedValueFromClientX(clientX, rect, min, max, step);
      onChange$?.(clamped);
    });

    const handlePointerDown = $((e: PointerEvent) => {
      e.preventDefault();
      if (trackRef.value && typeof trackRef.value.setPointerCapture === 'function') {
        try {
          trackRef.value.setPointerCapture(e.pointerId);
        } catch {
          // Ignore
        }
      }
      isDragging.value = true;
      context.control.hide$();
      updateFromPointer(e.clientX);
    });

    const handlePointerMove = $((e: PointerEvent) => {
      updateHoverValue(e.clientX);
      if (isDragging.value) {
        context.control.hide$();
        updateFromPointer(e.clientX);
      }
    });

    const handlePointerUp = $((e: PointerEvent) => {
      if (trackRef.value && typeof trackRef.value.releasePointerCapture === 'function') {
        try {
          trackRef.value.releasePointerCapture(e.pointerId);
        } catch {
          // Ignore
        }
      }
      isDragging.value = false;
      if (isHovered.value) {
        context.control.show$();
      }
    });

    const handleMouseEnter = $((e: MouseEvent) => {
      isHovered.value = true;
      updateHoverValue(e.clientX);
      if (!isDragging.value) {
        context.control.show$();
      }
    });

    const handleMouseLeave = $(() => {
      isHovered.value = false;
      context.control.hide$();
    });

    const handleKeyDown = $((e: KeyboardEvent) => {
      let newValue = value;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        newValue = Math.min(max, value + step);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        newValue = Math.max(min, value - step);
      } else if (e.key === 'PageUp') {
        newValue = Math.min(max, value + step * 10);
      } else if (e.key === 'PageDown') {
        newValue = Math.max(min, value - step * 10);
      } else if (e.key === 'Home') {
        newValue = min;
      } else if (e.key === 'End') {
        newValue = max;
      } else {
        return;
      }
      e.preventDefault();
      onChange$?.(Number(newValue.toFixed(4)));
    });

    let handleLeft = `clamp(6px, calc(${percentage}% - 8px), calc(100% - 6px))`;
    if (!isDragging.value) {
      if (percentage === 0) {
        handleLeft = '6px';
      } else if (percentage === 100) {
        handleLeft = 'calc(100% - 6px)';
      }
    }

    return (
      <div class="relative w-full touch-none select-none shrink-0">
        <div
          ref={(el) => {
            trackRef.value = el;
            context.control.triggerRef.value = el;
          }}
          onPointerDown$={handlePointerDown}
          onPointerMove$={handlePointerMove}
          onPointerUp$={handlePointerUp}
          onPointerCancel$={handlePointerUp}
          onMouseEnter$={handleMouseEnter}
          onMouseLeave$={handleMouseLeave}
          class="relative w-full h-9 [outline:1px_solid_var(--color-shade-250)] overflow-hidden flex items-center pl-3 pr-1 py-1 rounded-lg select-none cursor-ew-resize"
        >
          <div
            role="slider"
            aria-label={label}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            tabIndex={0}
            onFocus$={() => (isFocused.value = true)}
            onBlur$={() => (isFocused.value = false)}
            onKeyDown$={handleKeyDown}
            class="sr-only"
          />

          {hasTicks && (
            <div class="absolute inset-0 pointer-events-none">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pct) => (
                <div
                  key={pct}
                  class={[
                    `w-px top-[50%] rounded-[999px] absolute bg-shade-400 transition-all duration-200 ${EASE_OUT}`,
                    isHovered.value || isFocused.value ? 'h-2' : 'h-0',
                  ]}
                  style={{ left: `${pct}%`, translate: '-50% -50%' }}
                />
              ))}
            </div>
          )}

          <div
            class="absolute left-0 top-0 bottom-0 pointer-events-none bg-shade-150"
            style={{ width: `${percentage}%` }}
          />

          <div
            class={[
              `absolute -translate-x-1/2 rounded-full pointer-events-none z-10 w-0.5 top-1/2 -translate-y-1/2 ${EASE_OUT}`,
              isDragging.value
                ? 'transition-[height,background-color] duration-150'
                : 'transition-[left,height,background-color] duration-150',
              isHovered.value || isDragging.value || isFocused.value
                ? 'h-[20px] bg-shade-700'
                : 'h-[16px] bg-shade-500',
            ]}
            style={{ left: handleLeft }}
          />

          <span class="text-[13px] font-medium text-shade-750 z-10 relative pointer-events-none">
            {label}
          </span>

          <div class="flex-1" />

          <div class="flex items-center px-2 py-1 rounded-[4px] z-10 relative pointer-events-none min-w-[4ch]">
            <span class="text-[13px] font-medium text-ink tabular-nums text-right">
              {formattedValue}
            </span>
          </div>
        </div>

        <PopoverPanel
          placement="top"
          followCursor="x"
          gutter={6}
          class={[
            'text-[11px] font-medium text-shade-0 tabular-nums whitespace-nowrap bg-shade-900 border-0 p-0 px-2 py-1 rounded-md shadow-md pointer-events-none z-50',
            `transition-[opacity,transform] ${EASE_OUT} origin-bottom`,
            'data-[open]:spring-fast data-[open]:opacity-100 data-[open]:scale-100 data-[open]:translate-y-0 data-[open]:delay-100',
            'data-[opening]:opacity-0 data-[opening]:scale-95',
            'data-[closed]:spring-fast-exit data-[closed]:opacity-0 data-[closed]:scale-100 data-[closed]:translate-y-0',
            'data-[closing]:spring-fast-exit data-[closing]:opacity-0 data-[closing]:scale-95 data-[closing]:translate-y-1',
          ]}
        >
          {formattedHoverValue}
        </PopoverPanel>
      </div>
    );
  }
);

export const Slider = component$<SliderProps>((props) => {
  return (
    <PopoverRoot>
      <SliderContent {...props} />
    </PopoverRoot>
  );
});

export const DialSlider = Slider;
