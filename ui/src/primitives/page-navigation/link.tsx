import { Slot, component$, useContext, useTask$ } from '@builder.io/qwik';
import { withAs } from '~/utils/as';
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

export type LinkProps = PageNavigationLinkData;

export const Link = component$(
  withAs('a')<LinkProps>(({ As, level, label, ...props }) => {
    // eslint-disable-next-line qwik/use-method-usage
    usePageNavigationLink({ level, label, id: props.id });

    return (
      <As {...props}>
        <Slot />
      </As>
    );
  }),
);
