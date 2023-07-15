module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        /**
         * Shorter notation.
         */
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
            readonly: 'array',
          },
        ],
        '@typescript-eslint/await-thenable': ['error'],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': false,
            'minimumDescriptionLength': 3,
          },
        ],
        '@typescript-eslint/ban-tslint-comment': ['error'],
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
          },
        ],
        /**
         * Let developer decide.
         */
        '@typescript-eslint/class-literal-property-style': ['off'],
        '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        /**
         * Disabled because both interface and type are useful.
         */
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            /**
             * Allows to reduce number of lines of code.
             */
            fixMixedExportsWithInlineTypeSpecifier: true,
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            /**
             * Allows to reduce number of lines of code.
             */
            fixStyle: 'inline-type-imports',
          },
        ],
        /**
         * Inferring is useful very often.
         */
        '@typescript-eslint/explicit-function-return-type': ['off'],
        /**
         * It does not matter.
         */
        '@typescript-eslint/explicit-member-accessibility': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            /**
             * Explicit typing makes it ok, although it still is a subject of a code review.
             */
            allowArgumentsExplicitlyTypedAsAny: true,
            /**
             * Allow stronger typing.
             */
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            /**
             * Enforce stronger typing.
             */
            allowHigherOrderFunctions: false,
            /**
             * Enforce stronger typing.
             */
            allowTypedFunctionExpressions: false,
          },
        ],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/member-delimiter-style': ['off'],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              // Index signature
              'signature',
              'call-signature',

              // Fields
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              '#private-static-field',

              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              '#private-instance-field',

              'public-abstract-field',
              'protected-abstract-field',

              'public-field',
              'protected-field',
              'private-field',
              '#private-field',

              'static-field',
              'instance-field',
              'abstract-field',

              'decorated-field',

              'field',

              // Static initialization
              'static-initialization',

              // Constructors
              'public-constructor',
              'protected-constructor',
              'private-constructor',

              'constructor',

              // Getters
              'public-static-get',
              'protected-static-get',
              'private-static-get',
              '#private-static-get',

              'public-decorated-get',
              'protected-decorated-get',
              'private-decorated-get',

              'public-instance-get',
              'protected-instance-get',
              'private-instance-get',
              '#private-instance-get',

              'public-abstract-get',
              'protected-abstract-get',

              'public-get',
              'protected-get',
              'private-get',
              '#private-get',

              'static-get',
              'instance-get',
              'abstract-get',

              'decorated-get',

              'get',

              // Setters
              'public-static-set',
              'protected-static-set',
              'private-static-set',
              '#private-static-set',

              'public-decorated-set',
              'protected-decorated-set',
              'private-decorated-set',

              'public-instance-set',
              'protected-instance-set',
              'private-instance-set',
              '#private-instance-set',

              'public-abstract-set',
              'protected-abstract-set',

              'public-set',
              'protected-set',
              'private-set',
              '#private-set',

              'static-set',
              'instance-set',
              'abstract-set',

              'decorated-set',

              'set',

              // Methods
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              '#private-static-method',

              'public-decorated-method',
              'protected-decorated-method',
              'private-decorated-method',

              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              '#private-instance-method',

              'public-abstract-method',
              'protected-abstract-method',

              'public-method',
              'protected-method',
              'private-method',
              '#private-method',

              'static-method',
              'instance-method',
              'abstract-method',

              'decorated-method',

              'method',
            ],
          },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'accessor',
            format: null,
            custom: {
              /**
               * Allow numbers as object keys.
               */
              regex: '([0-9]+|[a-z][a-zA-Z0-9]*)',
              match: true,
            },
          },
        ],
        '@typescript-eslint/no-base-to-string': [
          'error',
          {
            ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
          },
        ],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/no-confusing-non-null-assertion': ['off'],
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: false,
          },
        ],
        '@typescript-eslint/no-duplicate-enum-values': ['error'],
        '@typescript-eslint/no-duplicate-type-constituents': [
          'error',
          {
            ignoreIntersections: false,
            ignoreUnions: false,
          },
        ],
        /**
         * Let developer decide.
         */
        '@typescript-eslint/no-dynamic-delete': ['off'],
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'error',
          {
            fixToUnknown: false,
            /**
             * It's a common pattern.
             */
            ignoreRestArgs: true,
          },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            /**
             * Likely a false positive.
             */
            allowConstructorOnly: true,
            allowEmpty: false,
            allowStaticOnly: false,
            /**
             * Likely a false positive.
             */
            allowWithDecorator: true,
          },
        ],
        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreVoid: true,
            /**
             * It's a common pattern.
             */
            ignoreIIFE: true,
          },
        ],
        '@typescript-eslint/no-for-in-array': ['error'],
        /**
         * @deprecated
         */
        '@typescript-eslint/no-implicit-any-catch': ['off'],
        '@typescript-eslint/no-import-type-side-effects': ['error'],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: false,
            ignoreProperties: false,
          },
        ],
        '@typescript-eslint/no-invalid-void-type': [
          'error',
          {
            allowInGenericTypeArguments: true,
            allowAsThisParameter: false,
          },
        ],
        '@typescript-eslint/no-meaningless-void-operator': [
          'error',
          {
            checkNever: false,
          },
        ],
        '@typescript-eslint/no-misused-new': ['error'],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksConditionals: true,
            checksVoidReturn: true,
            checksSpreads: true,
          },
        ],
        '@typescript-eslint/no-mixed-enums': ['error'],
        '@typescript-eslint/no-namespace': [
          'error',
          {
            allowDeclarations: false,
            allowDefinitionFiles: true,
          },
        ],
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['error'],
        /**
         * @deprecated
         */
        '@typescript-eslint/no-parameter-properties': ['off'],
        /**
         * These can be used for explanatory purposes.
         */
        '@typescript-eslint/no-redundant-type-constituents': ['off'],
        '@typescript-eslint/no-require-imports': ['error'],
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
            allowedNames: [],
          },
        ],
        /**
         * These can be used for explanatory purposes.
         */
        '@typescript-eslint/no-type-alias': ['off'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
          'error',
          {
            allowComparingNullableBooleansToTrue: true,
            allowComparingNullableBooleansToFalse: true,
          },
        ],
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          {
            /**
             * It's a common pattern.
             */
            allowConstantLoopConditions: true,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          },
        ],
        '@typescript-eslint/no-unnecessary-qualifier': ['error'],
        /**
         * It's difficult to remember all defaults throughout the codebase.
         */
        '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
        '@typescript-eslint/no-unnecessary-type-assertion': [
          'error',
          {
            typesToIgnore: [],
          },
        ],
        '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
        '@typescript-eslint/no-unsafe-argument': ['error'],
        '@typescript-eslint/no-unsafe-assignment': ['error'],
        '@typescript-eslint/no-unsafe-call': ['error'],
        '@typescript-eslint/no-unsafe-declaration-merging': ['error'],
        '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
        '@typescript-eslint/no-unsafe-member-access': ['error'],
        '@typescript-eslint/no-unsafe-return': ['error'],
        '@typescript-eslint/no-useless-empty-export': ['error'],
        '@typescript-eslint/no-var-requires': ['error'],
        '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
        '@typescript-eslint/parameter-properties': [
          'error',
          {
            prefer: 'class-property',
          },
        ],
        '@typescript-eslint/prefer-as-const': ['error'],
        '@typescript-eslint/prefer-enum-initializers': ['error'],
        '@typescript-eslint/prefer-for-of': ['error'],
        '@typescript-eslint/prefer-function-type': ['error'],
        '@typescript-eslint/prefer-includes': ['error'],
        '@typescript-eslint/prefer-literal-enum-member': [
          'error',
          {
            allowBitwiseExpressions: false,
          },
        ],
        /**
         * This rule is meant for old codebases.
         */
        '@typescript-eslint/prefer-namespace-keyword': ['off'],
        /**
         * Likely a false positive. It's very strict.
         */
        '@typescript-eslint/prefer-nullish-coalescing': ['off'],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/prefer-readonly': [
          'error',
          {
            onlyInlineLambdas: false,
          },
        ],
        /**
         * Unsuitable with most codebases. Verbose.
         */
        '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        /**
         * Performance optimizations should not be forced at the price of readability.
         */
        '@typescript-eslint/prefer-regexp-exec': ['off'],
        '@typescript-eslint/prefer-return-this-type': ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
        /**
         * Both @ts-ignore and @ts-expect-error are useful.
         */
        '@typescript-eslint/prefer-ts-expect-error': ['off'],
        /**
         * Let developer choose.
         */
        '@typescript-eslint/promise-function-async': ['off'],
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          {
            ignoreStringArrays: false,
          },
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          {
            allowAny: false,
            checkCompoundAssignments: true,
          },
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            /**
             * Use toLocaleString or Intl.NumberFormat.
             */
            allowNumber: false,
            allowBoolean: false,
            allowAny: false,
            allowNullish: false,
            allowRegExp: false,
            allowNever: false,
          },
        ],
        '@typescript-eslint/sort-type-constituents': [
          'error',
          {
            checkIntersections: true,
            checkUnions: true,
            groupOrder: [
              'named',
              'keyword',
              'operator',
              'literal',
              'function',
              'import',
              'conditional',
              'object',
              'tuple',
              'intersection',
              'union',
              'nullish',
            ],
          },
        ],
        /**
         * @deprecated
         */
        '@typescript-eslint/sort-type-union-intersection-members': ['off'],
        /**
         * It's a common pattern.
         */
        '@typescript-eslint/strict-boolean-expressions': ['off'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        /**
         * Disabled for compatibility.
         */
        '@typescript-eslint/triple-slash-reference': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/type-annotation-spacing': ['off'],
        /**
         * This rule is too eager.
         */
        '@typescript-eslint/typedef': ['off'],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            /**
             * Disabled because it would give too many false positives.
             */
            ignoreStatic: true,
          },
        ],
        '@typescript-eslint/unified-signatures': [
          'error',
          {
            /**
             * Allow as an explicit way of bailing out.
             */
            ignoreDifferentlyNamedParameters: true,
          },
        ],

        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/block-spacing': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/brace-style': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/comma-dangle': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/comma-spacing': ['off'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false,
          },
        ],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/func-call-spacing': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/indent': ['off'],
        /**
         * Disabled because it would give too many false positives.
         */
        '@typescript-eslint/init-declarations': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/key-spacing': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/keyword-spacing': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/lines-around-comment': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/lines-between-class-members': ['off'],
        /**
         * Disabled to allow sparse arrays of specified size.
         */
        '@typescript-eslint/no-array-constructor': ['off'],
        '@typescript-eslint/no-dupe-class-members': ['error'],
        /**
         * @deprecated
         */
        '@typescript-eslint/no-duplicate-imports': ['off'],
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            allow: [],
          },
        ],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/no-extra-parens': ['off'],
        '@typescript-eslint/no-extra-semi': ['error'],
        '@typescript-eslint/no-implied-eval': ['error'],
        '@typescript-eslint/no-invalid-this': [
          'error',
          {
            capIsConstructor: true,
          },
        ],
        '@typescript-eslint/no-loop-func': ['error'],
        '@typescript-eslint/no-loss-of-precision': ['error'],
        /**
         * It depends. Let developer and code reviewer choose.
         */
        '@typescript-eslint/no-magic-numbers': ['off'],
        '@typescript-eslint/no-redeclare': [
          'error',
          {
            builtinGlobals: false,
            ignoreDeclarationMerge: false,
          },
        ],
        /**
         * Disabled because it's not relevant.
         */
        '@typescript-eslint/no-restricted-imports': ['off'],
        '@typescript-eslint/no-shadow': [
          'error',
          {
            builtinGlobals: false,
            /**
             * Be more strict to ease search-and-replace.
             */
            hoist: 'all',
            ignoreOnInitialization: false,
            /**
             * Avoid ambiguous names.
             */
            ignoreTypeValueShadow: false,
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        '@typescript-eslint/no-throw-literal': [
          'error',
          {
            allowThrowingAny: false,
            allowThrowingUnknown: false,
          },
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
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
         */ '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/object-curly-spacing': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/padding-line-between-statements': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/quotes': ['off'],
        /**
         * It can break consistency of similar functions.
         * It can hinder the fact that developer can use await in a given function.
         */
        '@typescript-eslint/require-await': ['off'],
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/semi': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/space-before-blocks': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/space-before-function-paren': ['off'],
        /**
         * Leave it to Prettier.
         */
        '@typescript-eslint/space-infix-ops': ['off'],
      },
    },
  ],
};
