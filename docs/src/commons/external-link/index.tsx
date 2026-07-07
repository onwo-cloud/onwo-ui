import type { JSXChildren } from '@qwik.dev/core';
import { Icon } from '~/utils/icon';

export type HttpsLink = `https://${string}`;

type ExternalLinkProps = {
  class?: string;
  style?: any;
  href: HttpsLink;
  noreferrer?: boolean;
  disableIcon?: boolean;
} & ({ label: string; children?: never } | { label?: never; children: JSXChildren });

export const ExternalLink = (props: ExternalLinkProps) => (
  <a
    href={props.href}
    style={props.style}
    class={['flex text-ink items-center font-semibold text-sm', props.class]}
    rel={['nofollow', 'noopener', 'external', props.noreferrer && 'noreferrer']
      .filter(Boolean)
      .join(' ')}
    target="_blank"
  >
    <span class="flex justify-center underline items-center gap-1">
      {props.children ?? props.label}
    </span>
    {!props.disableIcon && <Icon i="arrow-up-right" />}
  </a>
);

export const ExternalLinkInline = (props: ExternalLinkProps) => (
  <a
    href={props.href}
    style={props.style}
    class={['inline-block text-medium text-link hover:underline items-center', props.class]}
    rel={['nofollow', 'noopener', 'external', props.noreferrer && 'noreferrer']
      .filter(Boolean)
      .join(' ')}
    target="_blank"
  >
    {props.label ?? props.children}
  </a>
);
