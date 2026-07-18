import { Signal, QRL } from '@qwik.dev/core';
import * as P from '@onwo/primitives/menu';
import { UiIcon } from '~ui/commons/icon-provider';
import { OwPropsOf } from '~primitives/index';
import { Scrollarea, ScrollareaBar, ScrollareaCues, ScrollareaViewport } from '../scrollarea';

export const itemCommonPadding = 'w-full py-1 px-1.5';
export const itemCommonStyling = [
  itemCommonPadding,
  'flex items-center cursor-hand select-none rounded-lg data-[is-active]:hover:bg-canvas-hover data-[is-opened]:bg-canvas-hover',
];

export const MenuRoot = ({ children }: OwPropsOf<typeof P.MenuRoot>) => (
  <P.MenuRoot>{children}</P.MenuRoot>
);

export const MenuTrigger = ({ children, ...props }: OwPropsOf<typeof P.MenuTrigger>) => (
  <P.MenuTrigger {...props}>{children}</P.MenuTrigger>
);

export const MenuPopup = ({ class: className, children, ...rest }: OwPropsOf<typeof P.MenuPopup>) => (
  <P.MenuPopup
    class={[
      'bg-canvas-secondary text-ink ring-separator-secondary shadow-5 min-w-32 w-40 rounded-lg p-1 ring ring-inset overflow-visible',
      className,
    ]}
    {...rest}
  >
    {/* Replaced 'h-full' with 'max-h-[inherit]' */}
    <Scrollarea class="w-full max-h-[inherit] relative min-h-0">
      <ScrollareaCues maxHeight={44} />
      {/* Added 'max-h-[inherit]' so overflow-y-auto triggers at max height */}
      <ScrollareaViewport class="flex flex-col gap-4 w-full max-h-[inherit] pr-1">
        {children}
      </ScrollareaViewport>
      <ScrollareaBar orientation="vertical" class="w-[13px] right-0 top-[4px] bottom-[4px]" />
    </Scrollarea>
  </P.MenuPopup>
);

export const MenuItem = ({
  children,
  class: className,
  ...rest
}: OwPropsOf<typeof P.MenuItem>) => (
  <P.MenuItem {...rest} class={[itemCommonStyling, className]}>
    {children}
  </P.MenuItem>
);

export const MenuCheckboxItem = ({ children, ...props }: OwPropsOf<typeof P.MenuCheckboxItem>) => (
  <P.MenuCheckboxItem {...props} class={['flex gap-1', itemCommonStyling]}>
    <UiIcon i="check" size="xs" />
    {children}
  </P.MenuCheckboxItem>
);

export type MenuRadioGroupProps = {
  children?: any;
  'bind:value'?: Signal<string>;
  onValueChange$?: QRL<(value: string) => void>;
};
export const MenuRadioGroup = ({ children, ...rest }: MenuRadioGroupProps) => (
  <P.MenuRadioGroup {...rest}>{children}</P.MenuRadioGroup>
);

export type MenuRadioItemProps = {
  children?: any;
  disabled?: boolean;
  value: string;
  onClick$?: QRL<() => void>;
};
export const MenuRadioItem = ({ children, ...rest }: MenuRadioItemProps) => (
  <P.MenuRadioItem class={['flex gap-1', itemCommonStyling]} {...rest}>
    <UiIcon i="check" size="xs" />
    {children}
  </P.MenuRadioItem>
);

export const MenuLabel = ({ children, class: className, ...props }: OwPropsOf<'div'>) => (
  <div class={['text-ink tracking-wider text-sm', itemCommonPadding, className]} {...props}>{children}</div>
);

export const MenuSeparator = () => (
  <div role="separator" aria-orientation="horizontal" class="h-px bg-separator-secondary my-1 -mx-1" />
);

export const MenuShortcut = ({ children, ...props }: OwPropsOf<'span'>) => <span {...props}>{children}</span>;

export const MenuSubRoot = ({ children, ...props }: OwPropsOf<typeof P.MenuSubRoot>) => (
  <P.MenuSubRoot {...props}>{children}</P.MenuSubRoot>
);

export const MenuSubTrigger = ({ children, class: className, ...props }: OwPropsOf<typeof P.MenuSubTrigger>) => (
  <P.MenuSubTrigger class={['justify-between', itemCommonStyling, className]} {...props}>
    {children}
    <UiIcon i="chevron-right" size="xs" />
  </P.MenuSubTrigger>
);

export const MenuSubContent = ({ children, ...rest }: OwPropsOf<typeof P.MenuPopup>) => (
  <P.MenuPopup {...rest}>{children}</P.MenuPopup>
);
