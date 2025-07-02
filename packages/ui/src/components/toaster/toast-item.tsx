import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleQuestionMarkIcon,
  TriangleAlertIcon,
  XIcon,
} from '@onwo/icons';

interface ToastItemProps {
  isOpenedToast: boolean;
  toast: Toast;
}

export const ToastItem = ({ isOpenedToast, toast }) => {
  return (
    <>
      <ToastIconByType toastType={toast.type} />
      <div>
        <h4 class="font-semibold mt-[1px]">{toast.title}</h4>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <ToastClose
        class="absolute top-2 right-2 text-graphite w-[20px] h-[20px] flex items-center justify-center rounded-sm hover:bg-parchment"
        onClick$={dismiss$}
      >
        <XIcon size="sm" />
      </ToastClose>
    </>
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

