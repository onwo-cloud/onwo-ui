module.exports = {
  extends: ['../.eslintrc.cjs'],
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: false
    }
  },
  rules: {
    // Node.js specific rules
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};

