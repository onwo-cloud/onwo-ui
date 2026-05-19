import type { QRL } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Label } from '@onwo/ui/label';
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalPanel,
  ModalTitle,
  useModalControl,
} from '@onwo/ui/modal';

import { presetThemes } from '../data/theme-data';
import { ScaleData } from '../types';

type LoadThemeModalProviderProps = {
  savedThemes: { name: string; colors: { [key: string]: ScaleData } }[];
  onLoad$: QRL<(themeName: string) => void>;
};

export const LoadThemeProviderModal = component$((props: LoadThemeModalProviderProps) => {
  const control = useModalControl();

  return (
    <Modal control={control}>
      <Slot />
      <ModalPanel>
        <ModalHeader>
          <ModalTitle>Load Theme</ModalTitle>
          <ModalDescription>Choose from preset or your saved custom themes.</ModalDescription>
        </ModalHeader>
        <div class="space-y-4 py-4">
          <div>
            <Label class="text-sm font-semibold mb-3 block">Preset Themes</Label>
            <div class="space-y-2">
              {presetThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick$={async () => {
                    await props.onLoad$(theme.name);
                    control.hide$();
                  }}
                  class="w-full text-left px-4 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors"
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>
          {props.savedThemes.length > 0 && (
            <div>
              <Label class="text-sm font-semibold mb-3 block">Saved Themes</Label>
              <div class="space-y-2">
                {props.savedThemes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick$={async () => {
                      await props.onLoad$(theme.name);
                      control.hide$();
                    }}
                    class="w-full text-left px-4 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors"
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ModalPanel>
    </Modal>
  );
});
