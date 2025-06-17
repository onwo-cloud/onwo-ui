import baseConfig from '../../eslint.config.js';

export default [
  // Spread the base configuration
  ...baseConfig,

  // Node.js-specific configuration override
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: {
        // Node.js globals (remove browser globals from base config)
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        // Remove browser globals by not including them
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
    rules: {
      // Node.js specific rules
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
