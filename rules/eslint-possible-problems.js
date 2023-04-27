module.exports = {
  /**
   * All deviations from defaults are commented. Otherwise, rules use default settings.
   */
  rules: {
    /**************************************************************************
     * Possible Problems
     * @see https://eslint.org/docs/latest/rules/#possible-problems
     *************************************************************************/

    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    'constructor-super': ['error'],
    'for-direction': ['error'],
    'getter-return': [
      'error',
      {
        allowImplicit: false,
      },
    ],
    'no-async-promise-executor': ['off'],
    /**
     * Disabled because it would give too many false positives.
     */
    'no-await-in-loop': ['error'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    /**
     * Disabled because some algorithms are more concise with this notation.
     */
    'no-cond-assign': ['off'],

    'no-const-assign': ['error'],
    'no-constant-binary-expression': ['error'],
    'no-constant-condition': [
      'error',
      {
        /**
         * Disabled because it would give too many false positives.
         */
        checkLoops: false,
      },
    ],
    'no-constructor-return': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty-pattern': ['error'],
    'no-ex-assign': ['error'],
    'no-fallthrough': [
      'error',
      {
        allowEmptyCase: false,
      },
    ],
    'no-func-assign': ['error'],
    'no-import-assign': ['error'],
    /**
     * 'both' to be more strict.
     */
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-loss-of-precision': ['error'],
    'no-misleading-character-class': ['error'],
    'no-new-native-nonconstructor': ['error'],
    'no-new-symbol': ['error'],
    'no-obj-calls': ['error'],
    'no-promise-executor-return': ['error'],
    'no-prototype-builtins': ['error'],
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': ['error'],
    'no-setter-return': ['error'],
    /**
     * Disabled because it would give too many false positives.
     */
    'no-sparse-arrays': ['off'],
    'no-template-curly-in-string': ['error'],
    'no-this-before-super': ['error'],
    'no-undef': [
      'error',
      {
        typeof: false,
      },
    ],
    'no-unexpected-multiline': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': [
      'error',
      {
        /**
         * true to be more strict.
         */
        enforceForOrderingRelations: true,
      },
    ],
    'no-unsafe-optional-chaining': [
      'error',
      {
        /**
         * true to be more strict.
         */
        disallowArithmeticOperators: true,
      },
    ],
    'no-unused-private-class-members': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        /**
         * 'all' to be more strict.
         */
        args: 'all',
        /**
         * Match TypeScript behavior.
         */
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        /**
         * Allow "omit attributes" operation with spread operator.
         */
        ignoreRestSiblings: true,
      },
    ],
    /**
     * Clean code: read it top to bottom, like a newspaper or a book.
     */
    'no-use-before-define': ['off'],
    'no-useless-backreference': ['error'],
    /**
     * Disabled because it gives too many false positives.
     */
    'require-atomic-updates': ['off'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
  },
};
