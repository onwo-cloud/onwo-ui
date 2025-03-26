// eslint-disable-next-line import/no-unresolved
import type { PluginAPI } from 'tailwindcss/plugin';
// eslint-disable-next-line import/no-unresolved
import { styles } from './styles.js';

const CLASSNAME = 'onwo-format';
const CLASSNAME_CANCEL = 'onwo-no-format';

export function typography({ addComponents, prefix }: PluginAPI) {
  const modifiers = styles;

  // eslint-disable-next-line prefer-const
  //for (let [name, ...selectors] of [
  //  ['headings', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th'],
  //  ['h1'],
  //  ['h2'],
  //  ['h3'],
  //  ['h4'],
  //  ['h5'],
  //  ['h6'],
  //  ['p'],
  //  ['a'],
  //  ['blockquote'],
  //  ['figure'],
  //  ['figcaption'],
  //  ['strong'],
  //  ['em'],
  //  ['kbd'],
  //  ['code'],
  //  ['pre'],
  //  ['ol'],
  //  ['ul'],
  //  ['li'],
  //  ['table'],
  //  ['thead'],
  //  ['tr'],
  //  ['th'],
  //  ['td'],
  //  ['img'],
  //  ['video'],
  //  ['hr'],
  //  ['lead', '[class~="lead"]'],
  //]) {
  //  selectors = selectors.length === 0 ? [name] : selectors;
  //  const selector: string = selectors.join(', ');

  //  addVariant(`${CLASSNAME}-${name}`, `& :is(${inWhere(selector, prefix)})`);
  //}

  const prefixedNot = prefix(`.${CLASSNAME_CANCEL}`).slice(1);
  addComponents([
    {
      [`.${CLASSNAME}`]: Object.fromEntries(
        Object.entries(modifiers).map(([k, v]) => [k, { [`&:not(.${prefixedNot})`]: v }]),
      ),
    },
  ]);
}

//<div class="onwo-format">
//  <h1> formatted </h1>
//  <h1 class="onwo-no-format"> no format </h1>
//  <div>
//    <h1> formatted </h1>
//    <h1 class="onwo-no-format"> no format </h1>
//  </div>
//  <div class="onwo-no-format">
//    <h1> no format </h1>
//  </div>
//  <div class="onwo-no-format">
//    <div>
//      <h1> no format </h1>
//    </div>
//  </div>
//</div>

export { styles } from './styles.js';
