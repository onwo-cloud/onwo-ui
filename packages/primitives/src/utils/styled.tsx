import type { Component, PropsOf, QwikHTMLElements } from '@builder.io/qwik';
import { cn } from './cn';

// Define types for the possible interpolation values
type InterpolationFunction<P> = (props: P) => string | number | boolean | null | undefined;
type InterpolationValue = string | number | boolean | null | undefined;
type Interpolation<P> = InterpolationValue | InterpolationFunction<P>;

type Class = QwikHTMLElements['div']['class'];

const styledcn_ =
  <C extends Component<{ class?: Class }>>(Comp: C | string) =>
  <P extends PropsOf<typeof Comp>>(
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
    const ret = ({ class: _class, ...props }: P) => {
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

      return <Comp class={cn(processedClassName, _class)} {...props} />;
    };

    return Object.assign(ret, { styledClasses: className });
  };

const styledcn = Object.assign(styledcn_, {
  tag: <const S extends keyof QwikHTMLElements>(elem: S) =>
    styledcn(elem as unknown as Component<QwikHTMLElements[S]>),
});

export { styledcn };
