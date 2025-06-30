import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierConfig from './.prettierrc.cjs';

// Base configuration shared by both minimal and extended configs
const baseConfig = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tsparser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      // Browser globals
      window: 'readonly',
      document: 'readonly',
      console: 'readonly',
      // Node globals
      process: 'readonly',
      Buffer: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      global: 'readonly',
      module: 'readonly',
      require: 'readonly',
      exports: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
    import: importPlugin,
    prettier: prettierPlugin,
  },
};

// Minimal configuration
const minimalConfig = {
  ...baseConfig,
  rules: {
    // ESLint recommended rules
    ...js.configs.recommended.rules,

    // TypeScript ESLint recommended rules
    ...tseslint.configs.recommended.rules,

    // Import plugin recommended rules
    ...importPlugin.configs.recommended.rules,

    // Custom rules
    'qwik/valid-lexical-scope': 'off', // this one rule is flaky, it crashes eslint
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'prettier/prettier': ['error', prettierConfig],
  },
};

// Extended configuration with additional plugins
const extendedConfig = {
  ...baseConfig,
  plugins: {
    ...baseConfig.plugins,
    sonarjs: sonarjsPlugin,
    unicorn: unicornPlugin,
    promise: promisePlugin,
  },
  rules: {
    // Include all minimal config rules
    ...minimalConfig.rules,

    // Promise plugin recommended rules
    ...promisePlugin.configs.recommended.rules,

    // SonarJS recommended rules
    ...sonarjsPlugin.configs['recommended-legacy'].rules,

    // Unicorn recommended rules
    ...unicornPlugin.configs.recommended.rules,

    // Custom overrides
    'sonarjs/no-useless-intersection': 'off',
    'sonarjs/no-nested-functions': 'off',
    'sonarjs/void-use': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-empty-file': 'warn',
    'unicorn/prevent-abbreviations': 'off',
    'sonarjs/function-return-type': 'off',
    'sonarjs/unused-import': 'off',
    'sonarjs/deprecation': 'warn',
    'sonarjs/todo-tag': 'warn',
    'sonarjs/no-unused-vars': 'off',
    'sonarjs/no-commented-code': 'off',
    'sonarjs/redundant-type-aliases': 'off',
    'sonarjs/no-redundant-jump': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'warn',
    'sonarjs/different-types-comparison': 'warn',
  },
};

// TypeScript-specific overrides
const typescriptOverride = {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
};

// Export the appropriate configuration based on environment
const config = extendedConfig; //process.env.ESLINT_MODE === 'full' ? extendedConfig : minimalConfig;

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ...config,
  },
  typescriptOverride,
];
