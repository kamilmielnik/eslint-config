module.exports = {
  extends: [
    './rules/eslint-possible-problems',
    './rules/eslint-suggestions',
    './rules/eslint-layout-and-formatting',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
      rules: {
        /**
         * Disabled because "describe" can be very long.
         */
        'max-lines-per-function': ['off'],
        'max-nested-callbacks': [
          'warn',
          {
            /**
             * 2 more than usual because of "describe" & "it" callbacks.
             */
            max: 5,
          },
        ],
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        /**
         * Disabled because render functions (or function components) can be long.
         */
        'max-lines-per-function': ['off'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
  ],
};
