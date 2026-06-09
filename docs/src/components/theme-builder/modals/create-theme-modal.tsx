import type { QRL } from '@builder.io/qwik';
import { $, component$, Slot, useSignal } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';
import { Input } from '@onwo/ui/input';
import { Label } from '@onwo/ui/label';
import {
  Modal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalPanel,
  ModalTitle,
  useModalControl,
} from '@onwo/ui/modal';
import {
  Select,
  SelectDisplayValue,
  SelectItem,
  SelectItemIndicator,
  SelectItemLabel,
  SelectPopover,
  SelectTrigger,
} from '@onwo/ui/select';

import { presetThemes } from '../data/theme-data';

type CreateThemeModalProviderProps = {
  onCreate$: QRL<(name: string, presetName: string) => void>;
};

export const CreateThemeModalProvider = component$((props: CreateThemeModalProviderProps) => {
  const newThemeName = useSignal('');
  const selectedPreset = useSignal<string>(presetThemes[0].name);
  const control = useModalControl();

  const handleCreate = $(async () => {
    if (!newThemeName.value.trim()) return;
    await props.onCreate$(newThemeName.value, selectedPreset.value);
    newThemeName.value = '';
    control.hide$();
  });

  return (
    <Modal control={control}>
      <Slot />
      <ModalPanel>
        <ModalHeader>
          <ModalTitle>Create New Theme</ModalTitle>
          <ModalDescription>
            Give your theme a unique name and choose a preset to start from.
          </ModalDescription>
        </ModalHeader>
        <div class="space-y-4 py-4">
          <div>
            <Label for="preset-select">Start from Preset</Label>
            <Select bind:value={selectedPreset}>
              <SelectTrigger id="preset-select" class="mt-2">
                <SelectDisplayValue placeholder="Select a preset" />
              </SelectTrigger>
              <SelectPopover>
                {presetThemes.map((theme) => (
                  <SelectItem key={theme.name}>
                    <SelectItemLabel>{theme.name}</SelectItemLabel>
                    <SelectItemIndicator>
                      <Icon i="check"   />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectPopover>
            </Select>
          </div>
          <div>
            <Label for="theme-name">Theme Name</Label>
            <Input
              id="theme-name"
              bind:value={newThemeName}
              placeholder="My Custom Theme"
              class="mt-2"
            />
          </div>
        </div>
        <ModalFooter>
          <Button onClick$={handleCreate}>Create</Button>
        </ModalFooter>
      </ModalPanel>
    </Modal>
  );
});
