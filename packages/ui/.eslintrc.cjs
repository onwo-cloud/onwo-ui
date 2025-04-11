module.exports = {
  plugins: ['qwik'],
  extends: [
    '../../.eslintrc.cjs',
    'plugin:qwik/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'qwik/use-method-usage': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        paths: {
          '@/*': ['./src/*']
        }
      }
    }
  },
};
