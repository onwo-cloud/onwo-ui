module.exports = {
  plugins: ['qwik'],
  extends: [
    '../.eslintrc.cjs',
    'plugin:qwik/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      // verify this:
      typescript: {
        project: './tsconfig.json',
        paths: {
          '@/*': ['./src/*']
        }
      }
    }
  }
};
