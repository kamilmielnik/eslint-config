module.exports = {
  // extends: [
  //   './rules/best-practices',
  // ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
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
    'no-async-promise-executor': 'off',
    /**
     * Disabled because it would give too many false positives.
     */
    'no-await-in-loop': ['error'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    /**
     * Disabled because some algorithms are more concise with this notation.
     */
    'no-cond-assign': 'off',

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
    'no-sparse-arrays': 'off',
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
    'no-use-before-define': [
      'error',
      {
        /**
         * Clean code: read it top to bottom, like a newspaper or a book.
         */
        functions: false,
        /**
         * Clean code: read it top to bottom, like a newspaper or a book.
         */
        classes: false,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'no-useless-backreference': ['error'],
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],
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
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
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
    'eqeqeq': ['error', 'always', 'always'],
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
      {
        /**
         * Even short functions can easily have over 10 statements.
         */
        max: 20,
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
        /**
         * Be more strict to ease search-and-replace.
         */
        builtinGlobals: true,
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
    'no-undefined': ['error'],
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
    'no-useless-return': [
      'error',
      {
        allowAsStatement: false,
      },
    ],
    'no-var': ['error'],
    'no-void': ['error'],
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
      [
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
            'return',
            'switch',
            'try',
            'while',
          ],
        },
      ],
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
