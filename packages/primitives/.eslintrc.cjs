module.exports = {
  plugins: ['qwik'],
  extends: [
    '../../.eslintrc.cjs',
    'plugin:qwik/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'qwik/use-method-usage': 'warn',
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
