import { Signal, QRL, JSXChildren } from '@builder.io/qwik';
import * as P from '@onwo/primitives/menu';
import { UiIcon } from '~ui/icon-provider';

export const itemCommonPadding = 'w-full py-1 px-1.5';
export const itemCommonStyling = [
  itemCommonPadding,
  'flex items-center cursor-hand select-none rounded-lg data-[is-active]:hover:bg-canvas-hover data-[is-opened]:bg-canvas-hover',
];

export type MenuRootProps = { children?: any };
export const MenuRoot = ({ children }: MenuRootProps) => (
  <P.MenuRoot class="text-sm">{children}</P.MenuRoot>
);

export type MenuTriggerProps = { children?: JSXChildren; disabled?: boolean; class: string };
export const MenuTrigger = ({ children, ...rest }: MenuTriggerProps) => (
  <P.MenuTrigger {...rest}>{children}</P.MenuTrigger>
);

export type MenuPopupProps = P.PositionProps & { children?: any };
export const MenuPopup = ({ children, ...rest }: MenuPopupProps) => (
  <P.MenuPopup
    {...rest}
    popoverProps={{
      class: 'overflow-visible',
    }}
    panelProps={{
      class: 'bg-canvas p-1 min-w-32 w-40 ring-1 ring-separator-secondary shadow-3 rounded-md',
    }}
  >
    {children}
  </P.MenuPopup>
);

export type MenuItemProps = {
  children?: any;
  disabled?: boolean;
  inset?: boolean;
  variant?: 'default' | 'destructive';
  onClick$?: QRL<() => void>;
  class: string;
};
export const MenuItem = ({
  inset,
  variant,
  children,
  class: className,
  ...rest
}: MenuItemProps) => (
  <P.MenuItem {...rest} class={[itemCommonStyling, className]}>
    {children}
  </P.MenuItem>
);

export type MenuCheckboxItemProps = {
  children?: any;
  disabled?: boolean;
  'bind:checked'?: Signal<boolean>;
  onCheckedChange$?: QRL<(checked: boolean) => void>;
};
export const MenuCheckboxItem = ({ children, ...rest }: MenuCheckboxItemProps) => (
  <P.MenuCheckboxItem {...rest} class={['flex gap-1', itemCommonStyling]}>
    <UiIcon name="check" size="xs" />
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
    <UiIcon name="check" size="xs" />
    {children}
  </P.MenuRadioItem>
);

export type MenuLabelProps = { children?: any; inset?: boolean };
export const MenuLabel = ({ children }: MenuLabelProps) => (
  <div class={['text-ink-secondary font-medium text-xs', itemCommonPadding]}>{children}</div>
);

export const MenuSeparator = () => (
  <div role="separator" aria-orientation="horizontal" class="h-px bg-separator-secondary my-1 -mx-1" />
);

export type MenuShortcutProps = { children?: any };
export const MenuShortcut = ({ children }: MenuShortcutProps) => <span>{children}</span>;

export type MenuSubRootProps = { children?: any };
export const MenuSubRoot = ({ children }: MenuSubRootProps) => (
  <P.MenuSubRoot>{children}</P.MenuSubRoot>
);

export type MenuSubTriggerProps = {
  children?: any;
  disabled?: boolean;
  inset?: boolean;
};
export const MenuSubTrigger = ({ inset, children, ...rest }: MenuSubTriggerProps) => (
  <P.MenuSubTrigger class={['justify-between', itemCommonStyling]} {...rest}>
    {children}
    <UiIcon name="chevron-right" size="xs" />
  </P.MenuSubTrigger>
);

export type MenuSubContentProps = P.PositionProps & { children?: any };
export const MenuSubContent = ({ children, ...rest }: MenuSubContentProps) => (
  <P.MenuPopup {...rest}>{children}</P.MenuPopup>
);
