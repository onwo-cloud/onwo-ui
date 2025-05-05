import { $, Slot, component$, useSignal } from '@builder.io/qwik';

type RootProps = {
  label: string;
};

export const Root = component$(({ label }: RootProps) => {
  const isOpen = useSignal(false);

  const toggleOpen = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="relative z-10 flex max-w-max flex-1 items-center justify-center"><div style="position: relative;"><ul data-orientation="horizontal" class="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr"><li><button id="radix-:re:-trigger-radix-:rf:" data-state="closed" aria-expanded="false" aria-controls="radix-:re:-content-radix-:rf:" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group" data-radix-collection-item="">Getting started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><button id="radix-:re:-trigger-radix-:rg:" data-state="closed" aria-expanded="false" aria-controls="radix-:re:-content-radix-:rg:" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group" data-radix-collection-item="">Components <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><a class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent" href="/docs" data-radix-collection-item="">Documentation</a></li></ul></div><div class="absolute left-0 top-full flex justify-center"></div></nav>
  );
});
