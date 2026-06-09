import type { QRL, JSX, Signal } from '@builder.io/qwik';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface ResponsiveContainerProps {
  children$: QRL<
    (
      dims: { width: number; height: number },
      ref: Signal<HTMLDivElement | undefined>,
    ) => JSX.Element
  >;
}

export const ResponsiveContainer = component$((props: ResponsiveContainerProps) => {
  const containerRef = useSignal<HTMLDivElement>();
  const dimensions = useSignal({ width: 0, height: 0 });

  // This task runs on the client when the component is visible.
  useVisibleTask$(({ cleanup }) => {
    const element = containerRef.value;
    if (!element) return;

    // The ResizeObserver will notify us whenever the container's size changes.
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        // Update the dimensions signal with the new width and height.
        dimensions.value = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        };
      }
    });

    observer.observe(element);

    // Cleanup function to disconnect the observer when the component is removed.
    cleanup(() => observer.disconnect());
  });

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* We only render the children once we have valid dimensions */}
      {dimensions.value.width > 0 && props.children$(dimensions.value, containerRef)}
    </div>
  );
});
