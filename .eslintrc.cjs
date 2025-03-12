const prettierConfig = require('./.prettierrc.cjs');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // Shared rules across all projects
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      alphabetize: { order: 'asc', caseInsensitive: true }
    }],
    'prettier/prettier': [
      'error',
      prettierConfig,
      {
        prettierPath: require.resolve('prettier'),
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript-specific rules
        '@typescript-eslint/consistent-type-imports': 'warn'
      }
    }
  ]
};
