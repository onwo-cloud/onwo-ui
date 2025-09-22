import type { PropsOf } from '@builder.io/qwik';
import { Link } from '@onwo/primitives/page-navigation';

export const PageNavigationLink = (props: PropsOf<typeof Link>) => <Link {...props} />;
