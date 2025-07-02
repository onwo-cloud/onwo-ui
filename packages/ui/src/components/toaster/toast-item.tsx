import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleQuestionMarkIcon,
  TriangleAlertIcon,
  XIcon,
} from '@onwo/icons';
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
        <XIcon size="sm" />
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
      {props.toastType === 'success' && <CircleCheckIcon class="text-success-80" />}
      {props.toastType === 'error' && <CircleAlertIcon class="text-error-80" />}
      {props.toastType === 'info' && <CircleQuestionMarkIcon class="text-[blue]" />}
      {props.toastType === 'warning' && <TriangleAlertIcon class="text-warn" />}
    </div>
  );
};
