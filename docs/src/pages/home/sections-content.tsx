import { Link } from '@qwik.dev/router';
import { SECTIONS_MAP, type Section } from '../../kit';

const sections: Section[] = Object.values(SECTIONS_MAP);

export const SectionsContent = () => (
  <div
    class="grid gap-8 gap-y-16 max-h-full overflow-y-auto pb-8 "
    style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gridAutoRows: '400px', // Forces a strictly uniform base height for every row
      gridAutoFlow: 'row dense' // Fills empty grid holes caused by varying spans
    }}
  >
    {sections.map((section, idx) => {
      const defaultComp = section.default;
      const Comp = defaultComp.display;

      const colSpan = defaultComp.colSpan || 1;
      const rowSpan = defaultComp.rowSpan || 1;

      return (
        <div
          key={idx}
          class={[
            "p-1.5 pb-4 bg-canvas-secondary rounded-2xl flex flex-col h-full",
            "ring ring-separator-secondary ring-inset"
          ]}
          style={{
            gridColumn: `span ${colSpan}`,
            gridRow: `span ${rowSpan}`,
          }}
        >
          {/* Component Box */}
          <div class="bg-canvas rounded-xl overflow-hidden ring ring-separator-secondary ring-inset flex-1 flex items-center justify-center p-8">
            <Comp />
          </div>

          {/* Title Link */}
          <Link
            href={section.link}
            class="mt-3 ml-4.5 mr-8 text-sm font-medium text-ink w-fit hover:text-ink-secondary hover:underline"
          >
            <h4>{section.title}</h4>
            <p class="type-body-sm text-ink-secondary">{section.description}</p>
          </Link>
        </div>
      );
    })}
  </div>
);
