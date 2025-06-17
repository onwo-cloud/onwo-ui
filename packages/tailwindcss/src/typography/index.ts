import type { PluginAPI } from 'tailwindcss/plugin';
// eslint-disable-next-line import/no-unresolved
import { styles } from './styles.js';

const CLASSNAME = 'onwo-format';
const CLASSNAME_CANCEL = 'onwo-no-format';

export function typography({ addComponents, prefix }: PluginAPI) {
  const modifiers = styles;
  const prefixedNot = prefix(`.${CLASSNAME_CANCEL}`).slice(1);

  addComponents([
    {
      [`.${CLASSNAME}`]: Object.fromEntries(
        Object.entries(modifiers).map(([k, v]) => [k, { [`&:not(.${prefixedNot})`]: v }]),
      ),
    },
  ]);
}

// eslint-disable-next-line import/no-unresolved
export { styles } from './styles.js';
