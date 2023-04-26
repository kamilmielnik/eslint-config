module.exports = {
  /**
   * All deviations from defaults are commented. Otherwise, rules use default settings.
   */
  rules: {
    /**************************************************************************
     * Layout & Formatting
     * @see https://eslint.org/docs/latest/rules/#layout--formatting
     *************************************************************************/

    /**
     * Leave it to Prettier.
     */
    'array-bracket-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'array-bracket-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'array-element-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'arrow-parens': ['off'],
    /**
     * Leave it to Prettier.
     */
    'arrow-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'block-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'brace-style': ['off'],
    /**
     * Leave it to Prettier.
     */
    'comma-dangle': ['off'],
    /**
     * Leave it to Prettier.
     */
    'comma-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'comma-style': ['off'],
    /**
     * Leave it to Prettier.
     */
    'computed-property-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'dot-location': ['off'],
    'eol-last': ['error', 'always'],
    /**
     * Leave it to Prettier.
     */
    'func-call-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'function-call-argument-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'function-paren-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'generator-star-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'implicit-arrow-linebreak': ['off'],
    /**
     * Leave it to Prettier.
     */
    'indent': ['off'],
    /**
     * Leave it to Prettier.
     */
    'jsx-quotes': ['off'],
    /**
     * Leave it to Prettier.
     */
    'key-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'keyword-spacing': ['off'],
    /**
     * Both positioning styles are useful.
     */
    'line-comment-position': ['off'],
    /**
     * Leave it to Prettier.
     */
    'linebreak-style': ['off'],
    /**
     * Let developer choose.
     */
    'lines-around-comment': ['off'],
    /**
     * Leave it to Prettier.
     */
    'lines-between-class-members': ['off'],
    /**
     * Leave it to Prettier.
     */
    'max-len': ['off'],
    /**
     * Leave it to Prettier.
     */
    'max-statements-per-line': ['off'],
    /**
     * Leave it to Prettier.
     */
    'multiline-ternary': ['off'],
    /**
     * Leave it to Prettier.
     */
    'new-parens': ['off'],
    /**
     * Leave it to Prettier.
     */
    'newline-per-chained-call': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-extra-parens': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-mixed-spaces-and-tabs': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-multi-spaces': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-multiple-empty-lines': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-tabs': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-trailing-spaces': ['off'],
    /**
     * Leave it to Prettier.
     */
    'no-whitespace-before-property': ['off'],
    /**
     * Leave it to Prettier.
     */
    'nonblock-statement-body-position': ['off'],
    /**
     * Leave it to Prettier.
     */
    'object-curly-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'object-curly-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'object-property-newline': ['off'],
    /**
     * Leave it to Prettier.
     */
    'operator-linebreak': ['off'],
    /**
     * Leave it to Prettier.
     */
    'padded-blocks': ['off'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'break',
          'case',
          'cjs-export',
          'cjs-import',
          'class',
          'continue',
          'default',
          'do',
          'export',
          'for',
          'if',
          'switch',
          'try',
          'while',
        ],
      },
      {
        blankLine: 'any',
        prev: 'export',
        next: 'export',
      },
    ],
    /**
     * Leave it to Prettier.
     */
    'quotes': ['off'],
    /**
     * Leave it to Prettier.
     */
    'rest-spread-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'semi': ['off'],
    /**
     * Leave it to Prettier.
     */
    'semi-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'semi-style': ['off'],
    /**
     * Leave it to Prettier.
     */
    'space-before-blocks': ['off'],
    /**
     * Leave it to Prettier.
     */
    'space-before-function-paren': ['off'],
    /**
     * Leave it to Prettier.
     */
    'space-in-parens': ['off'],
    /**
     * Leave it to Prettier.
     */
    'space-infix-ops': ['off'],
    /**
     * Leave it to Prettier.
     */
    'space-unary-ops': ['off'],
    /**
     * Leave it to Prettier.
     */
    'switch-colon-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'template-curly-spacing': ['off'],
    /**
     * Leave it to Prettier.
     */
    'template-tag-spacing': ['off'],
    'unicode-bom': ['error', 'never'],
    /**
     * Leave it to Prettier.
     */
    'wrap-iife': ['off'],
    /**
     * Leave it to Prettier.
     */
    'wrap-regex': ['off'],
    /**
     * Leave it to Prettier.
     */
    'yield-star-spacing': ['off'],
  },
};
