module.exports = {
  /**
   * All deviations from defaults are commented. Otherwise, rules use default settings.
   */
  rules: {
    /**************************************************************************
     * Suggestions
     * @see https://eslint.org/docs/latest/rules/#suggestions
     *************************************************************************/

    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    /**
     * Disabled because often curly braces can help reduce
     * the number of lines in a expression.
     */
    'arrow-body-style': ['off'],
    /**
     * Disabled because of 'no-var' rule.
     */
    'block-scoped-var': ['off'],
    'camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      },
    ],
    /**
     * Disabled because it would give too many false positives.
     * A comment can start with a variable name which is camelCase.
     */
    'capitalized-comments': ['off'],
    'class-methods-use-this': [
      'error',
      {
        /**
         * render - for React components
         */
        exceptMethods: 'render',
        enforceForClassFields: true,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'complexity': ['warn', 20],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    /**
     * Disabled because it's no longer relevant.
     */
    'consistent-this': ['off'],
    'curly': ['error', 'all'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'always',
      },
    ],
    /**
     * Disabled because it's no longer relevant.
     */
    'func-name-matching': ['off'],
    /**
     * Disabled because all function notations are useful.
     */
    'func-names': ['off'],
    /**
     * Disabled because all styles are useful.
     */
    'func-style': ['off'],
    /**
     * It could be either 'getBeforeSet' or 'setBeforeGet', for consistency.
     * 'getBeforeSet' was chosen arbitrarily.
     */
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': ['error'],
    /**
     * This list includes only very commonly used ambiguous abbrevations.
     */
    'id-denylist': ['error', 'cb', 'e', 'err', 'req', 'res', 'ret', 'val'],
    /**
     * There's too many exceptions for short names to list them here.
     * Long name is better than an ambiguous name. Better to disable this rule.
     */
    'id-length': ['off'],
    /**
     * @see "id-length".
     */
    'id-match': ['off'],
    /**
     * Disabled because it would give too many false positives.
     */
    'init-declarations': ['off'],
    'logical-assignment-operators': [
      'error',
      'always',
      {
        /**
         * This can make code simpler and more concise.
         */
        enforceForIfStatements: true,
      },
    ],
    'max-classes-per-file': [
      'error',
      {
        ignoreExpressions: false,
        max: 1,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'max-depth': [
      'warn',
      {
        max: 4,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     * max: 200 is arbitrary chosen based on experience.
     */
    'max-lines': [
      'warn',
      {
        max: 200,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'max-lines-per-function': [
      'warn',
      {
        /**
         * TODO: change this number for tsx & jsx files
         */
        max: 40,
        skipBlankLines: false,
        skipComments: false,
        IIFEs: false,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'max-nested-callbacks': [
      'warn',
      {
        /**
         * Based on experience, things get messy at 3 already.
         */
        max: 3,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'max-params': [
      'warn',
      {
        /**
         * Based on experience, things usually get messy after 3.
         * Use params object instead.
         */
        max: 3,
      },
    ],
    /**
     * Only warning as this is an arbitrary thing.
     */
    'max-statements': [
      'warn',
      /**
       * Even short functions can easily have over 10 statements.
       */
      20,
      {
        ignoreTopLevelFunctions: false,
      },
    ],
    /**
     * 'starred-block' would be a natural choice, except that commented-out code
     * is easier to manage with line comments. Disabling is the most efficient choice.
     */
    'multiline-comment-style': ['off'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    // TODO: allow in development
    'no-alert': ['error'],
    /**
     * Disabled to allow sparse arrays of specified size.
     */
    'no-array-constructor': ['off'],
    'no-bitwise': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    /**
     * Arrow is not that confusing.
     */
    'no-confusing-arrow': ['off'],
    // TODO: allow in development
    'no-console': ['error'],
    /**
     * Sometimes continue is more readable.
     */
    'no-continue': ['off'],
    /**
     * Disabled because of 'no-var' rule.
     */
    'no-delete-var': ['off'],
    /**
     * It's not confusing.
     */
    'no-div-regex': ['off'],
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: false,
      },
    ],
    'no-empty-function': ['error'],
    'no-empty-static-block': ['error'],
    'no-eq-null': ['error'],
    'no-eval': [
      'error',
      {
        allowIndirect: false,
      },
    ],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-boolean-cast': [
      'error',
      {
        enforceForLogicalOperands: true,
      },
    ],
    /**
     * Disabled because of 'no-labels'.
     */
    'no-extra-label': ['off'],
    'no-extra-semi': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
      },
    ],
    'no-implicit-globals': [
      'error',
      {
        lexicalBindings: false,
      },
    ],
    'no-implied-eval': ['error'],
    /**
     * These are useful as well.
     */
    'no-inline-comments': ['off'],
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: true,
      },
    ],
    'no-iterator': ['error'],
    /**
     * Disabled because of 'no-labels'.
     */
    'no-label-var': ['off'],
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    /**
     * It depends. Let developer and code reviewer choose.
     */
    'no-magic-numbers': ['off'],
    /**
     * Let prettier take care of this formatting.
     */
    'no-mixed-operators': ['off'],
    'no-multi-assign': [
      'error',
      {
        ignoreNonDeclaration: false,
      },
    ],
    'no-multi-str': ['error'],
    'no-negated-condition': ['error'],
    /**
     * Nested ternaries can be useful when properly formatted.
     */
    'no-nested-ternary': ['off'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    /**
     * These are common operators.
     */
    'no-plusplus': ['off'],
    'no-proto': ['error'],
    /**
     * Disabled because of 'no-var' rule.
     */
    'no-redeclare': ['off'],
    'no-regex-spaces': ['error'],
    /**
     * Disabled because all exports are useful.
     */
    'no-restricted-exports': ['off'],
    /**
     * Disabled because it's no longer relevant.
     */
    'no-restricted-globals': ['off'],
    /**
     * Disabled because it's not relevant.
     */
    'no-restricted-imports': ['off'],
    /**
     * Disabled because it's not relevant.
     */
    'no-restricted-properties': ['off'],
    /**
     * Disabled because it's not relevant.
     */
    'no-restricted-syntax': ['off'],
    /**
     * 'always' so it's easier to debug.
     */
    'no-return-assign': ['error', 'always'],
    'no-return-await': ['error'],
    /**
     * Disabled because it's no longer relevant.
     */
    'no-script-url': ['error'],
    /**
     * Disabled because nobody uses this notation.
     */
    'no-sequences': [
      'error',
      {
        allowInParentheses: false,
      },
    ],
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        /**
         * Be more strict to ease search-and-replace.
         */
        hoist: 'all',
        ignoreOnInitialization: false,
      },
    ],
    'no-shadow-restricted-names': ['error'],
    /**
     * Ternaries are useful.
     */
    'no-ternary': ['off'],
    'no-throw-literal': ['error'],
    'no-undef-init': ['error'],
    /**
     * Allow undefined.
     */
    'no-undefined': ['off'],
    /**
     * Although generally discouraged, there are cases where it's needed,
     * e.g. when indicating intentionally unused function argument.
     */
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    /**
     * Disabled because of 'no-labels' rule.
     */
    'no-unused-labels': ['off'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-computed-key': [
      'error',
      {
        /**
         * Be more strict.
         */
        enforceForClassMembers: true,
      },
    ],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': [
      'error',
      {
        allowAsStatement: false,
      },
    ],
    /**
     * It's not relevant.
     */
    'no-warning-comments': ['off'],
    'no-with': ['error'],
    'object-shorthand': [
      'error',
      'always',
      {
        /**
         * It's arguably more readable and less surprising.
         */
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ],
    /**
     * Disabled because of 'no-var' rule.
     */
    'one-var': ['off'],
    /**
     * Disabled because of 'no-var' rule.
     */
    'one-var-declaration-per-line': ['off'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {
        /**
         * Helpful for debugging and describing the purpose of a function
         * through a name instead of a comment.
         */
        allowNamedFunctions: true,
        /**
         * Be more strict.
         */
        allowUnboundThis: false,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': ['error'],
    'prefer-named-capture-group': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-object-has-own': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    /**
     * Properties needing quoting should be exceptions.
     */
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    /**
     * Be consistent.
     */
    'radix': ['error', 'always'],
    'require-await': ['error'],
    'require-unicode-regexp': ['error'],
    'require-yield': ['error'],
    /**
     * import/order plugin will take care of sorting imports.
     */
    'sort-imports': ['off'],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
        allowLineSeparatedGroups: false,
      },
    ],
    /**
     * Disabled because of 'no-var' rule.
     */
    'sort-vars': ['error'],
    'spaced-comment': ['error', 'always'],
    /**
     * Strict mode should be applied globally.
     */
    'strict': ['error', 'never'],
    'symbol-description': ['error'],
    /**
     * Disabled because of 'no-var' rule.
     */
    'vars-on-top': ['error'],
    'yoda': ['error', 'never'],
  },
};
