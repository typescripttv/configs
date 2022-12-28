# Common TSConfig

Shareable TypeScript compiler configurations. Inspired from [tsconfig/bases](https://github.com/tsconfig/bases).

## Usage

When this package is installed, you can reference its exported TypeScript configs in the following way:

### Basic Config

**tsconfig.json**

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "extends": "@tstv/tsconfig-common/tsconfig.json"
}
```

### React Config

**tsconfig.json**

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "extends": "@tstv/tsconfig-common/tsconfig-react.json"
}
```
