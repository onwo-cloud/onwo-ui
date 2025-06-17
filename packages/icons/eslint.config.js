import baseConfig from '../../eslint.config.js';
import qwikPlugin from 'eslint-plugin-qwik';
import globals from 'globals';

export default [
  // Ignore patterns (replaces .eslintignore)
  {
    ignores: [
      'packages/primitives/lib/**',
      'packages/primitives/lib-types/**',
      'packages/ui/lib/**',
      'packages/ui/lib-types/**',
    ],
  },

  // Spread the base configuration
  ...baseConfig,

  // Qwik-specific configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      qwik: qwikPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Qwik recommended rules
      ...qwikPlugin.configs.recommended.rules,

      // Custom Qwik rules
      'qwik/use-method-usage': 'warn',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          paths: {
            '@/': ['./src/']
          }
        }
      }
    },
  },
];

