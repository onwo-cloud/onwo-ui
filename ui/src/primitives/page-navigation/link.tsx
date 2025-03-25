import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$, useContext, useTask$ } from '@builder.io/qwik';
import { PageNavigationContext } from './provider';

export type LinkProps = Omit<QwikIntrinsicElements['a'], 'id' | 'children'> & {
  label: string;
  id: string;
  level?: number;
};

export const Link = component$((props: LinkProps) => {
  const context = useContext(PageNavigationContext);

  useTask$(() => {
    const pos = context.elemPos++;
    if (context.elements == undefined) {
      console.error('using page link outside of a context');
    } else {
      context.elements[pos] = {
        label: props.label ?? props.label,
        id: props.id,
        level: props.level ?? -1,
      };
    }
  });

  return (
    <a {...props}>
      <Slot />
    </a>
  );
});
