import type { Component, QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$, useContext, useTask$ } from '@builder.io/qwik';
import { PageNavigationContext } from './provider';

type PageNavigationLinkData = {
  label: string;
  id: string;
  // If not specified will default to -1
  level?: number;
};

const usePageNavigationLink = ({ label, id, level }: PageNavigationLinkData) => {
  const context = useContext(PageNavigationContext);

  useTask$(() => {
    const pos = context.elemPos++;
    if (context.elements == undefined) {
      console.error('using page link outside of a context');
    } else {
      context.elements[pos] = {
        label: label ?? label,
        id: id,
        level: level ?? -1,
      };
    }
  });
};

export type LinkProps<T extends keyof QwikIntrinsicElements> = Omit<
  QwikIntrinsicElements[T],
  'id' | 'children'
> &
  PageNavigationLinkData & { as?: T };

export const Link = component$(function <T extends keyof QwikIntrinsicElements = 'a'>({
  as,
  level,
  label,
  ...props
}: LinkProps<T>) {
  usePageNavigationLink({ level, label, id: props.id });
  const Elem = (as ?? 'a') as unknown as Component;

  return (
    <Elem {...props}>
      <Slot />
    </Elem>
  );
});
