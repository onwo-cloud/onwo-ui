import type { Primitive } from '~/utils/types';

type Orientation = 'horizontal' | 'vertical';

export type RootProps = Primitive<'div'> & {
  orientation?: Orientation;
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean;
};

export const Root = (props: RootProps) => {
  const { decorative, orientation = 'horizontal', ...domProps } = props;
  // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
  const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
  const semanticProps = decorative
    ? { role: 'none' }
    : { 'aria-orientation': ariaOrientation, role: 'separator' };

  return <div data-orientation={orientation} {...semanticProps} {...domProps} />;
};
