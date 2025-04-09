import { component$, Slot, useContext } from '@builder.io/qwik';
import { carouselContextId } from './context';

/** Used to distinguish accessible label from other carousels */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const Title = component$((_: {}) => {
  const context = useContext(carouselContextId);
  const titleId = `${context.localId}-title`;

  return (
    <div id={titleId}>
      <Slot />
    </div>
  );
});
