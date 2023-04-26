module.exports = {
  extends: [
    './rules/eslint-possible-problems',
    './rules/eslint-suggestions',
    './rules/eslint-layout-and-formatting',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {},
};
