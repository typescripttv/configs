import {defineConfig} from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('prettier'),
    // https://eslint.org/docs/latest/use/configure/configuration-files#configuration-naming-conventions
    name: '@tstv/eslint-config',
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      'sort-keys-fix': sortKeysFix,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 8,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // https://typescript-eslint.io/blog/parser-options-project-true/
        project: true,
      },
    },

    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-dupe-class-members': ['error'],

      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreIIFE: true,
        },
      ],

      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      '@typescript-eslint/typedef': 'off',
      curly: 'error',
      'dot-notation': 'off',
      'max-depth': ['warn', 4],
      'no-cond-assign': 'error',
      'no-console': 'off',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'off',
      'no-duplicate-case': 'error',
      'no-else-return': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-this': 'error',
      'no-lonely-if': 'error',
      'no-redeclare': 'off',
      'no-return-await': 'off',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': 'off',
      'no-useless-return': 'error',
      'no-var': 'error',
      'one-var': ['error', 'never'],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: ['export', 'expression'],
          prev: 'import',
        },
      ],

      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-promise-reject-errors': 'error',
      'prettier/prettier': 'error',
      'sort-imports': 'off',

      'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        {
          caseSensitive: true,
          natural: true,
        },
      ],

      'sort-vars': 'error',
      'space-in-parens': 'error',
      strict: ['error', 'global'],
    },
  },
]);
