import type { QRL} from '@builder.io/qwik';
import { component$, useSignal, $, useOnDocument, useTask$ } from '@builder.io/qwik';

export type JoystickSliderProps = {
  orientation?: 'horizontal' | 'vertical';
  position?: 'start' | 'center' | 'end';
  onSlideStart$?: QRL<() => void>;
  onSlide$?: QRL<(slidePercent: number) => void>;
  onSlideEnd$?: QRL<() => void>;
};

// Define CSS variables with default fallback values
const JOYSTICK_DEFAULTS_CSS: Record<string, string> = {
  '--joystick-track-bg': '#e5e7eb' /* gray-200 */,
  '--joystick-track-thickness': '6px',
  '--joystick-track-border-radius': '9999px',
  '--joystick-head-size': '16px',
  '--joystick-head-bg': '#ffffff' /* white */,
  '--joystick-head-border-width': '1px',
  '--joystick-head-border-color': '#0ea5e9' /* sky-500 */,
  '--joystick-head-box-shadow':
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' /* shadow-sm */,
  '--joystick-head-ring-color': 'rgb(56 189 248 / 0.5)' /* sky-400/50 */,
  '--joystick-head-ring-width': '4px',
  '--joystick-head-transition-duration': '150ms',
};

export const JoystickSlider = component$((props: JoystickSliderProps) => {
  const {
    orientation = 'horizontal',
    position = 'center',
    onSlideStart$,
    onSlide$,
    onSlideEnd$,
  } = props;

  const isDragging = useSignal(false);
  const headPosition = useSignal(0);
  const sliderRef = useSignal<HTMLDivElement>();
  const headDynamicStyle = useSignal<Record<string, string>>({});

  const getStartPosition = $(() => {
    if (position === 'start') return 0;
    if (position === 'end') return 100;
    return 50;
  });

  // Helper to calculate and set position based on mouse coordinates
  const updatePosition = $(async (clientX: number, clientY: number) => {
    if (!sliderRef.value) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const startPosition = await getStartPosition();
    let percent = 0;

    if (orientation === 'horizontal') {
      const start = rect.left + (rect.width * startPosition) / 100;
      percent = ((clientX - start) / (rect.width / 2)) * 100;
    } else {
      const start = rect.top + (rect.height * startPosition) / 100;
      percent = ((clientY - start) / (rect.height / 2)) * 100;
    }

    const clampedPercent = Math.max(-100, Math.min(100, percent));
    headPosition.value = clampedPercent;
    onSlide$?.(clampedPercent);
  });

  // Handler for clicking on the track or the head
  const handleTrackDown = $(async (event: MouseEvent) => {
    // Prevent text selection while dragging
    event.preventDefault();

    isDragging.value = true;
    onSlideStart$?.();

    // Immediately snap/drag to the clicked position
    await updatePosition(event.clientX, event.clientY);
  });

  const handleMouseUp = $(() => {
    if (!isDragging.value) return;
    isDragging.value = false;
    headPosition.value = 0; // Reset position on release
    onSlideEnd$?.();
  });

  const handleMouseMove = $(async (event: MouseEvent) => {
    if (!isDragging.value) return;
    await updatePosition(event.clientX, event.clientY);
  });

  useOnDocument('mouseup', handleMouseUp);
  useOnDocument('mousemove', handleMouseMove);

  useTask$(async ({ track }) => {
    const headPositionVal = track(() => headPosition.value);
    const isDraggingVal = track(() => isDragging.value);
    track(() => position);

    const startPercent = await getStartPosition();
    const dynamicOffset = (headPositionVal / 100) * 50;
    let finalPercent = Math.max(0, Math.min(100, startPercent + dynamicOffset));

    const property = orientation === 'horizontal' ? 'left' : 'top';

    headDynamicStyle.value = {
      transform: 'translate(-50%, -50%)',
      transition: !isDraggingVal
        ? `${property} var(--joystick-head-transition-duration, 150ms) ease-out, box-shadow 150ms ease-in-out`
        : 'none',
      [property]: `${finalPercent}%`,
      ...(orientation === 'horizontal' ? { top: '50%' } : { left: '50%' }),
    };
  });

  return (
    <div
      style={JOYSTICK_DEFAULTS_CSS}
      class={`relative flex touch-none select-none items-center ${
        orientation === 'horizontal' ? 'w-full' : 'h-full flex-col'
      } ${isDragging.value ? 'cursor-grabbing' : 'cursor-default'}`}
    >
      <div
        ref={sliderRef}
        // Attached listener here so clicking anywhere on the bar triggers the drag
        onMouseDown$={handleTrackDown}
        class="relative grow cursor-pointer"
        style={{
          background: 'var(--joystick-track-bg)',
          borderRadius: 'var(--joystick-track-border-radius)',
          ...(orientation === 'horizontal'
            ? { height: 'var(--joystick-track-thickness)' }
            : { width: 'var(--joystick-track-thickness)', alignSelf: 'stretch' }),
        }}
      >
        <div
          class={['absolute block rounded-full transition-shadow focus-visible:outline-none hover:[box-shadow:0_0_0_var(--joystick-head-ring-width)_var(--joystick-head-ring-color),_var(--joystick-head-box-shadow)] focus-visible:[box-shadow:0_0_0_var(--joystick-head-ring-width)_var(--joystick-head-ring-color),_var(--joystick-head-box-shadow)]',
            isDragging.value ? 'cursor-grabbing' : 'cursor-grab',
          ]}
          style={{
            ...headDynamicStyle.value,
            width: 'var(--joystick-head-size)',
            height: 'var(--joystick-head-size)',
            backgroundColor: 'var(--joystick-head-bg)',
            borderWidth: 'var(--joystick-head-border-width)',
            borderColor: 'var(--joystick-head-border-color)',
            boxShadow: 'var(--joystick-head-box-shadow)',
          }}
          role="slider"
          tabIndex={0}
        />
      </div>
    </div>
  );
});
