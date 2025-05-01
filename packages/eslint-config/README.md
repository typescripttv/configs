# ESLint Shareable Config

This is a [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs) that fits great with most TypeScript projects.

## Usage

Edit your `eslint.config.mjs` file and add the following:

```js
import {defineConfig} from 'eslint/config';
import eslintConfig from '@tstv/eslint-config';

export default defineConfig({
  files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'],
  ignores: [
    '**/.dependency-cruiser.cjs',
    '**/coverage/**',
    '**/dist/**',
    '**/docs/**',
    '**/eslint.config.mjs',
    '**/vitest.config.ts',
  ],
  extends: [eslintConfig],
});
```

## Documentation

- https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package
