import type { Component, JSXOutput, ClassList, JSXChildren, QwikIntrinsicElements } from '@qwik.dev/core';
export declare const getIconSize: (size: string) => string;
export type BaseIconComponent = ((props: BaseIconProps) => JSXOutput) | Component<BaseIconProps>;
export type BaseIconProps = {
    size?: string;
    class?: ClassList;
};
export type SvgIconProps = {
    viewBox: string;
    children: JSXChildren;
} & BaseIconProps & Omit<QwikIntrinsicElements['svg'], 'viewBox'>;
export declare const SvgIcon: ({ size, children, fill, xmlns, class: className, ...props }: SvgIconProps) => JSXOutput;
//# sourceMappingURL=svg-icon.d.ts.map