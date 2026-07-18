import type { ClassList, Component, QwikHTMLElements } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';

// Define types for the possible interpolation values
type InterpolationFunction<P> = (props: P) => string | number | boolean | null | undefined;
type InterpolationValue = string | number | boolean | null | undefined;
type Interpolation<P> = InterpolationValue | InterpolationFunction<P>;

const styledcn_ =
  <C,>(Comp: C) =>
    <P extends OwPropsOf<C>,>(
      strings: TemplateStringsArray,
      ...interpolations: Array<Interpolation<P>>
    ) => {
      // Create the className from the template strings and interpolations
      const className = strings.reduce((result, str, i) => {
        // Add the current string piece
        let interpolated = result + str;

        // Add the interpolated value if it exists
        if (i < interpolations.length) {
          const value = interpolations[i];
          // Handle interpolations that might be functions (dependent on props)
          if (typeof value === 'function') {
            // This will be replaced with the actual function call in the component render
            interpolated += `var(--styledcn--${i})`;
          } else {
            interpolated += value;
          }
        }

        return interpolated;
      }, '');

      // Return the component with the combined class
      // Intersect P with { class?: ClassList } to satisfy the compiler during destructuring
      const ret = ({ class: _class, ...props }: P & { class?: ClassList }) => {
        // Process any function interpolations with the actual props
        let processedClassName = className;
        interpolations.forEach((value, i) => {
          if (typeof value === 'function') {
            const computedValue = (value as InterpolationFunction<P>)(props as any);
            processedClassName = processedClassName.replace(
              `var(--styledcn--${i})`,
              computedValue ? String(computedValue) : '',
            );
          }
        });

        const C = Comp as any;
        return <C class={[processedClassName, _class]} {...props} />;
      };

      return Object.assign(ret, { styledClasses: className });
    };

const styledcn = Object.assign(styledcn_, {
  tag: <const S extends keyof QwikHTMLElements>(elem: S) =>
    styledcn(elem as unknown as Component<QwikHTMLElements[S]>),
});

export { styledcn };
