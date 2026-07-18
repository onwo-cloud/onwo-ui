import { component$, $, type Signal } from "@qwik.dev/core";
import { Toaster, useToastCreate } from "@onwo/ui/toaster";
import type { useLogger } from "~/hooks/use-logger";

interface CanvasStageProps {
  display: any;
  controlsStore: Record<string, any>;
  logger: ReturnType<typeof useLogger>;
  canvasRef: Signal<HTMLElement | undefined>;
}

// Inner component wrapped inside <Toaster> context
const StageDisplay = component$<{
  display: any;
  controlsStore: Record<string, any>;
  logger: ReturnType<typeof useLogger>;
}>(({ display: Display, controlsStore, logger }) => {
  const toast = useToastCreate();

  logger.useObserve$(
    $((d) => {
      if (d.kind === "warn") {
        toast.warning(d.message);
      } else if (d.kind === "error") {
        toast.error(d.message);
      } else {
        toast.info(d.message);
      }
    })
  );

  return <Display controls={controlsStore} logger={logger} />;
});

export const CanvasStage = component$<CanvasStageProps>(
  ({ display, controlsStore, logger, canvasRef }) => {
    return (
      <div
        ref={canvasRef}
        class="relative flex-1 flex items-center justify-center p-8 min-h-[180px] overflow-hidden"
      >
        <Toaster position="bottom-right" display="absolute" data-a11y-ignore>
          <StageDisplay
            display={display}
            controlsStore={controlsStore}
            logger={logger}
          />
        </Toaster>
      </div>
    );
  }
);
