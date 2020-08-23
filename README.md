# eslint-config-qcolate

ESlint rules, includes

- eslint-config-qcolate
- eslint-config-qcolate/typescript
- eslint-config-qcolate/react
- eslint-config-qcolate/css
- eslint-config-qcolate/prettier

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

### CSS

```bash
yarn add -D eslint-plugin-css-modules
```

```javascript
// .eslintrc.js
module.exports = {
  extends: ['qcolate', '...extends...', 'qcolate/css'],
};
```

### Prettier

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

```javascript
// .eslintrc.js
module.exports = {
  extends: ['qcolate', '...extends...', 'qcolate/prettier'],
};
```

## Memo

has an `import/no-unresolved` error? you need to install plugins:

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

BTW, `eslint-config` isn't like the `babel-preset` as a way to extends the `node_modules` libs, so each of your projects needs to install these : (

```
"@typescript-eslint/eslint-plugin": "^3.9.0",
"@typescript-eslint/parser": "^3.6.1",
"babel-eslint": "^10.1.0",
"eslint": "^7.7.0",
"eslint-config-airbnb": "^18.2.0",
"eslint-config-airbnb-base": "^14.2.0",
"eslint-config-prettier": "^6.11.0",
"eslint-plugin-css-modules": "^2.11.0",
"eslint-plugin-import": "^2.22.0",
"eslint-plugin-jsx-a11y": "^6.3.1",
"eslint-plugin-prettier": "^3.1.4",
"eslint-plugin-react": "^7.20.6",
"eslint-plugin-react-hooks": "^4.0.8",
"prettier": "^2.0.5",
"pretty-quick": "^3.0.0",
```

and

```javascript
// .eslintrc.js
module.exports = {
  extends: ['taro/react', 'qcolate', 'qcolate/react', 'qcolate/typescript', 'qcolate/css', 'qcolate/prettier'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
};
```

## License

[MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE) ©Qcolate
