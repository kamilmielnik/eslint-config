module.exports = {
  extends: [
    './rules/eslint-possible-problems',
    './rules/eslint-suggestions',
    './rules/eslint-layout-and-formatting',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {},
};
