export interface UseButtonProps {
  Comp?: any;
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
}

export function useButton(props: UseButtonProps) {
  const isNative = props.Comp === undefined || props.Comp === 'button';
  const disabled = props.disabled ?? false;
  const focusableWhenDisabled = props.focusableWhenDisabled ?? false;

  const buttonProps: Record<string, any> = {};

  if (isNative) {
    buttonProps.type = 'button';
    if (disabled && !focusableWhenDisabled) {
      buttonProps.disabled = true;
    }
  } else {
    buttonProps.role = 'button';
    buttonProps.tabIndex = disabled && !focusableWhenDisabled ? -1 : 0;
    if (disabled) {
      buttonProps.ariaDisabled = 'true';
    }
  }

  // State attribute used for styling (equivalent to stateAttributesMapping)
  const stateAttributes = {
    'data-disabled': disabled ? '' : undefined,
  };

  return {
    buttonProps,
    stateAttributes,
    isNative,
  };
}
