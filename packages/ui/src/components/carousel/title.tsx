import type { JSXChildren } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';

type TitleProps = { children: JSXChildren };

export const Title = (props: TitleProps) => <C.Title {...props}>{props.children}</C.Title>;
