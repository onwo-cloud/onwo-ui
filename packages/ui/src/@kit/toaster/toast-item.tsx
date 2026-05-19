import { UiIcon } from '~ui/icon-provider';
import type { Toast } from '@onwo/primitives/toaster';
import { ToastItem as PToastItem, ToastClose } from '@onwo/primitives/toaster';

import type { ToastData, ToastType } from './helpers';

export interface ToastItemProps {
  toast: Toast & ToastData;
}

export const ToastItem = ({ toast }: ToastItemProps) => {
  return (
    <PToastItem key={toast.id} toast={toast}>
      <ToastIconByType toastType={toast.type} />
      <div>
        <h4 class="font-semibold mt-[1px]">{toast.title}</h4>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <ToastClose>
        <UiIcon name="x" size="sm" />
      </ToastClose>
    </PToastItem>
  );
};

type ToastIconByTypeProps = {
  toastType: ToastType;
};

const ToastIconByType = (props: ToastIconByTypeProps) => {
  return (
    <div class="w-[24px]">
      {props.toastType === 'success' && <UiIcon name="circle-check" class="text-success-80" />}
      {props.toastType === 'error' && <UiIcon name="circle-alert" class="text-error-80" />}
      {props.toastType === 'info' && <UiIcon name="circle-question-mark" class="text-[blue]" />}
      {props.toastType === 'warning' && <UiIcon name="triangle-alert" class="text-warn" />}
    </div>
  );
};
