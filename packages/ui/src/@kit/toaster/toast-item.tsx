import { UiIcon } from '~ui/commons/icon-provider';
import type { Toast } from '@onwo/primitives/toaster';
import { ToastItem as ToastItemPrimitive, ToastClose } from '@onwo/primitives/toaster';

import type { ToastData, ToastType } from './helpers';

export interface ToastItemProps {
  toast: Toast & ToastData;
}

export const ToastItem = ({ toast }: ToastItemProps) => {
  return (
    <ToastItemPrimitive key={toast.id} toast={toast} class="bg-canvas border border-line flex items-start text-sm py-3 px-4 rounded-md shadow-sm w-full gap-1">
      <ToastIconByType toastType={toast.type} />
      <div>
        <h4 class="font-semibold mt-[1px]">{toast.title}</h4>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <ToastClose>
        <UiIcon i="x" size="sm" />
      </ToastClose>
    </ToastItemPrimitive>
  );
};

type ToastIconByTypeProps = {
  toastType: ToastType;
};

const ToastIconByType = (props: ToastIconByTypeProps) => {
  return (
    <div class="w-[24px]">
      {props.toastType === 'success' && <UiIcon i="circle-check" class="text-success-80" />}
      {props.toastType === 'error' && <UiIcon i="circle-alert" class="text-error-80" />}
      {props.toastType === 'info' && <UiIcon i="circle-question-mark" class="text-[blue]" />}
      {props.toastType === 'warning' && <UiIcon i="triangle-alert" class="text-warn" />}
    </div>
  );
};
