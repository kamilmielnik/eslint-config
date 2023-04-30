module.exports = {
  extends: [
    './rules/eslint-possible-problems',
    './rules/eslint-suggestions',
    './rules/eslint-layout-and-formatting',
    './rules/typescript-eslint-rules',
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
        '@typescript-eslint/no-non-null-assertion': ['off'],
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
        'default-param-last': 'off',
        'dot-notation': 'off',
        'no-dupe-class-members': 'off',
        'no-empty-function': 'off',
        'no-extra-semi': 'off',
        'no-implied-eval': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-return-await': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
      },
    },
  ],
};
