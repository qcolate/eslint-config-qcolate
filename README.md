# eslint-config-qcolate

ESlint rules, includes

- eslint-config-qcolate
- eslint-config-qcolate/react
- eslint-config-qcolate/typescript

## Usage

### Built-in (base)

```bash
yarn add -D  eslint babel-eslint eslint-config-qcolate
```

Create an .eslintrc.js in the root directory of your project, then copy the following content into it:

```javascript
// .eslintrc.js

module.exports = {
  extends: ['qcolate'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  },
};
```

### React

```bash
yarn add -D  eslint babel-eslint eslint-config-qcolate
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ['qcolate', 'qcolate/react'],
};
```

### Typescript

```bash
yarn add -D  eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-qcolate
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ['qcolate', 'qcolate/typescripot'],
};
```

### TypeScript React

```bash
yarn eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-qcolate
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ['qcolate', 'qcolate/react', 'qcolate/typescript'],
};
```

## Memo

Q: `import/no-unresolved`

A:

```bash
yarn add -D eslint-import-resolver-webpack
```

```javascript
// .eslintrc.js

module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        config: './tools/webpack/webpack.config.js',
      },
    },
  },
};
```

## License

[MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE) ©Qcolate
