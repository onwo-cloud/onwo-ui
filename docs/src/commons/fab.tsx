import { component$, useSignal, $ } from '@qwik.dev/core';
import { Button } from '~primitives/@kit/button';
import { FloatingActionButtonPanel, FloatingActionButtonRoot, FloatingActionButtonTrigger, useFloatingActionButtonControls } from '~primitives/@kit/floating-action-button';

export const Fab = component$(() => {
  const fabValue = useSignal('');
  const fabControls = useFloatingActionButtonControls();

  const getItemClasses = (isOpen: boolean) => {
    const baseClasses = "flex overflow-clip rounded-2xl items-center gap-2.5 px-3.5 py-2.75 bg-shade-650 cursor-pointer box-border border-none w-max origin-center group-data-[position=left]:origin-left group-data-[position=right]:origin-right";
    if (isOpen) {
      return `${baseClasses} opacity-100 scale-100 translate-y-0 pointer-events-auto transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]`;
    }
    return `${baseClasses} opacity-0 scale-85 translate-y-[10px] pointer-events-none transition-none duration-0 delay-0`;
  };

  return (
    <FloatingActionButtonRoot
      value={fabValue}
      controls={fabControls}
      draggable={true}
      anchorOrigin="top-left"
      snapToEdges={{ x: true, y: { threshold: 0.5 } }}
      physics={{ type: 'spring', stiffness: 150, damping: 0.75 }}
    >
      <FloatingActionButtonTrigger
        class={`flex items-start gap-6.5 rounded-full p-3.25 absolute bg-shade-900 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${fabControls.isDragging.value
          ? 'cursor-grabbing scale-95'
          : 'cursor-pointer scale-100'
          } ${fabControls.isOpen.value ? 'rotate-90' : 'rotate-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: '0' }}>
          <circle cx="12" cy="12" r="1" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="19" cy="12" r="1" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="5" cy="12" r="1" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </FloatingActionButtonTrigger>

      <FloatingActionButtonPanel style={{ pointerEvents: fabControls.isOpen.value ? 'auto' : 'none' }} class="group flex flex-col gap-3 w-max items-center data-[position=left]:items-start data-[position=right]:items-end transition-all">

        <Button
          as="div"
          class="select-none !p-0 !bg-transparent !border-none !shadow-none select-none outline-none"
          style={{ width: 'max-content' }}
        >

          <div
            class={getItemClasses(fabControls.isOpen.value)}
            style={{ transitionDelay: fabControls.isOpen.value ? '0ms' : '0ms' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: '0' }}>
              <rect width="15" height="15" x="2.5" y="2.5" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="text-shade-0 text-base/5 whitespace-nowrap">Settings</div>
          </div>
        </Button>

        <Button
          as="div"
          class="select-none !p-0 !bg-transparent !border-none !shadow-none select-none outline-none"
          style={{ width: 'max-content' }}
        >
          <div
            class={getItemClasses(fabControls.isOpen.value)}
            style={{ transitionDelay: fabControls.isOpen.value ? '40ms' : '0ms' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: '0' }}>
              <rect width="15" height="15" x="2.5" y="2.5" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="text-shade-0 text-base/5 whitespace-nowrap">Account</div>
          </div>
        </Button>

        <Button
          as="div"
          class="select-none !p-0 !bg-transparent !border-none !shadow-none select-none outline-none"
          style={{ width: 'max-content' }}
        >
          <div
            class={getItemClasses(fabControls.isOpen.value)}
            style={{ transitionDelay: fabControls.isOpen.value ? '80ms' : '0ms' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: '0' }}>
              <rect width="15" height="15" x="2.5" y="2.5" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="text-shade-0 text-base/5 whitespace-nowrap">Logout</div>
          </div>
        </Button>

      </FloatingActionButtonPanel>
    </FloatingActionButtonRoot>
  );
});
