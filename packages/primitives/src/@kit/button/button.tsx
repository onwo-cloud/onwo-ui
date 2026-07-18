import { component$, Slot, $, type QwikHTMLElements, JSXOutput } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { composeProps } from '~primitives/index';

export type ButtonProps<T extends keyof QwikHTMLElements = 'button'> = Omit<OwPropsOf<T>, 'as' | 'disabled' | 'name'> & {
  /**
   * The element or component to render.
   * @default 'button'
   */
  as?: T;
  /**
   * The name of the button.
   */
  name?: string;
  /**
   * Whether the button is disabled
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Whether the button should be focusable when disabled.
   * @default false
   */
  focusableWhenDisabled?: boolean;
}

export const Button = component$(function <T extends keyof QwikHTMLElements = 'button'>(props: ButtonProps<T>): JSXOutput {
  const {
    as: Comp = 'button',
    disabled = false,
    focusableWhenDisabled = false,
    type: buttonType = 'button',
    tabIndex,
    ...restProps
  } = props as ButtonProps<'button'>;

  const isNative = Comp === 'button';

  const buttonProps: Record<string, any> = {};

  if (isNative) {
    buttonProps.type = buttonType;
    if (disabled && !focusableWhenDisabled) {
      buttonProps.disabled = true;
    }
  } else {
    buttonProps.role = 'button';
    // Use the user-provided tabIndex if not disabled, otherwise enforce -1 unless focusable
    buttonProps.tabIndex = disabled && !focusableWhenDisabled ? -1 : (tabIndex ?? 0);
    if (disabled) {
      buttonProps.ariaDisabled = 'true';
    }
  }

  const handleKeyDown$ = $((event: KeyboardEvent) => {
    if (isNative || disabled) {
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      (event.currentTarget as any)?.click();
    }
  });

  return (
    <Comp
      {...composeProps(restProps, buttonProps, { onKeyDown$: handleKeyDown$ })}
      data-disabled={disabled}
    >
      <Slot />
    </Comp>
  );
});
