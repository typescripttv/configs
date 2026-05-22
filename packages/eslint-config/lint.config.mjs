import {defineConfig} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import eslintConfig from './eslint.config.mjs';

/*
 * Dogfood the shared config on this package's own code. The published `eslint.config.mjs`
 * intentionally ships no `files` glob (each consumer adds their own), so this wrapper adds
 * one and is used by the `test`/`fix` scripts to lint the repo.
 */
export default defineConfig([
  {
    extends: [eslintConfig],
    files: ['**/*.ts'],
  },
  {
    /*
     * The flat-config files are not part of a TypeScript project, so the type-aware rules
     * cannot run on them. Lint them for style only: comment style, key order, and formatting.
     */
    extends: [prettierConfig],
    files: ['**/*.mjs'],
    plugins: {
      '@stylistic': stylistic,
      perfectionist,
      prettier,
    },
    rules: {
      '@stylistic/multiline-comment-style': ['error', 'starred-block'],
      'perfectionist/sort-objects': ['warn', {ignoreCase: false, order: 'asc', type: 'natural'}],
      'prettier/prettier': 'error',
    },
  },
  {
    /*
     * Intentionally-broken fixtures live under test/ and must be excluded from the normal
     * lint run. The `test:invalid` script lints them explicitly (with --no-ignore) and
     * asserts that linting fails, proving the rules actually reject violations.
     */
    ignores: ['test/**'],
  },
]);
