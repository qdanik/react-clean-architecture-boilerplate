import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPath from 'eslint-plugin-path';
import eslintUnusedImports from 'eslint-plugin-unused-imports';
import { flatConfigs as importFlatConfig } from 'eslint-plugin-import';
import jsLint from '@eslint/js';
import tsLint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '**/package.json',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/yarn-error.log',
    ],
  },
  {
    files: ['./{src,setup}/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 5,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: '@typescript-eslint/parser',
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
  },
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  eslintConfigPrettier,
  importFlatConfig?.typescript,
  {
    files: ['./{src,setup}/**/*.{ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
      path: eslintPluginPath,
      'simple-import-sort': pluginSimpleImportSort,
      'unused-imports': eslintUnusedImports,
      'react-hooks': pluginReactHooks,
      'react': pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      semi: ['off'],
      'no-shadow': ['off'],
      'no-undef': 'off',
      'no-bitwise': 'off',
      'no-unused-vars': 'off',
      'react/hook-use-state': [2, { allowDestructuredState: true }],
      'path/no-relative-imports': [
        'error',
        {
          maxDepth: 2,
          suggested: false,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSpacing: true,
          printWidth: 100,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          endOfLine: 'lf',
        },
      ],
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
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
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/func-call-spacing': 'off',
      '@typescript-eslint/no-namespace': 'off',
    },
    settings: {
      'path': {
        config: './tsconfig.prod.json',
      },
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