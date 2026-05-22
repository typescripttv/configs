import {defineConfig} from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
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
     * cannot run on them. Inherit the shared config and switch off only the type-checked
     * rules (and project-based parsing) so the style rules still apply without duplicating them.
     */
    extends: [eslintConfig, typescriptEslint.configs['flat/disable-type-checked']],
    files: ['**/*.mjs'],
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
