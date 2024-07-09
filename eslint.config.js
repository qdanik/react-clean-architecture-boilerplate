/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat');

const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const path = require('eslint-plugin-path');
const prettier = require('eslint-plugin-prettier');
const sortKeysFix = require('eslint-plugin-sort-keys-fix');
const pluginImport = require('eslint-plugin-import');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: [
      'node_modules/*',
      '**/package.json',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/yarn-error.log',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ),
  ),
  {
    languageOptions: {
      ecmaVersion: 5,

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
          legacyDecorators: true,
        },

        project: './tsconfig.json',

        useJSXTextNode: true,
      },

      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(pluginImport),
      path,
      prettier: fixupPluginRules(prettier),
      'simple-import-sort': simpleImportSort,
      'sort-keys-fix': sortKeysFix,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/array-type': 'off',

      '@typescript-eslint/member-delimiter-style': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      curly: 'error',
      'guard-for-in': 'off',
      'import/extensions': 'off',
      'import/no-cycle': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'error',
      'import/no-useless-path-segments': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/control-has-associated-label': 'off',

      'linebreak-style': 'off',

      'lines-between-class-members': 'error',
      'newline-before-return': 'error',
      'no-bitwise': 'off',

      'no-console': 'error',

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-syntax': 'off',
      'no-sequences': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
      'object-curly-newline': 'off',
      'object-curly-spacing': 'off',
      'object-property-newline': 'off',
      'one-var': 'off',
      'one-var-declaration-per-line': 'error',
      'path/no-relative-imports': [
        'error',
        {
          maxDepth: 2,
          suggested: false,
        },
      ],
      'prefer-const': 'error',
      'prettier/prettier': 'error',
      'quote-props': ['error', 'as-needed'],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/destructuring-assignment': 'off',

      'react/forbid-prop-types': 'off',

      'react/function-component-definition': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unused-prop-types': 'warn',
      'react/prefer-stateless-function': 'off',
      'react/prop-types': 'warn',
      'react/require-default-props': 'off',
      'require-await': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000', '^react$', '^react', '^@?\\w', '^__mocks__(/.*|$)'],
            ['^(containers|core|data|domain|presentation|types)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      'sort-keys-fix/sort-keys-fix': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/', './'],
        },
      },

      react: {
        version: 'detect',
      },
    },
  },
];
