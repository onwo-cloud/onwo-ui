import type { KeybindModule } from './types';

/**
 * Default keybind module providing standard physical navigation key mappings.
 */
export const defaultModule: KeybindModule = {
  name: 'default',
  mappings: {
    'ArrowRight': 'navigate:right',
    'ArrowLeft': 'navigate:left',
    'ArrowUp': 'navigate:up',
    'ArrowDown': 'navigate:down',
    'Home': 'navigate:top',
    'End': 'navigate:bottom',
    'PageUp': 'navigate:page-up',
    'PageDown': 'navigate:page-down',
    'Escape': 'action:cancel',
    'Enter': 'action:submit',
  },
};

/**
 * Creates a strongly-typed keybind module definition.
 */
export function defineKeybindModule(module: KeybindModule): KeybindModule {
  return module;
}
