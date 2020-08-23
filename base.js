// yarn add -D eslint babel-eslint
// yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-qcolate

module.exports = {
  root: true,
  extends: ['airbnb-base', './_shared.js'],
  parser: 'babel-eslint',
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    // requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  rules: {},
  settings: {
    // append 'ts' and 'tsx' extensions to airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    // append 'ts' and 'tsx' extensions to airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};
