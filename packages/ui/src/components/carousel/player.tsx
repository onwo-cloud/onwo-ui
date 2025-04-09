import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';

type PlayerProps = PropsOf<typeof C.Player>;

export const Player = (props: PlayerProps) => <C.Player {...props}>{props.children}</C.Player>;
