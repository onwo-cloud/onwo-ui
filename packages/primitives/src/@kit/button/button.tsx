import { component$, Slot, $, type PropsOf, type QwikHTMLElements, JSXOutput } from '@qwik.dev/core';
import { useButton } from './use-button';


export type ButtonProps<T extends keyof QwikHTMLElements = 'button'> = Omit<PropsOf<T>, 'as' | 'disabled' | 'name'> & {
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
    as: CompRaw,
    disabled = false,
    focusableWhenDisabled = false,
    ...restProps
  } = props;

  // Casting the tag to any prevents TypeScript from generating an enormous union type limit exception 
  const Comp = (CompRaw || 'button') as any;

  const { buttonProps, stateAttributes, isNative } = useButton({
    Comp,
    disabled,
    focusableWhenDisabled,
  });

  // Handle keyboard events for non-native button elements (e.g., role="button")
  const handleKeyDown$ = $((event: KeyboardEvent) => {
    if (isNative || disabled) {
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();
    }
  });

  return (
    <Comp
      {...buttonProps as any}
      {...(restProps as any)}
      {...stateAttributes as any}
      onKeyDown$={[handleKeyDown$, props.onKeyDown$]}
    >
      <Slot />
    </Comp>
  );
});
