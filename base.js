module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
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
  rules: {
    // js ONLY
    'max-len': [2, 120],
    'no-underscore-dangle': 0,
    'import/no-unresolved': ['error', { ignore: ['@'] }],
    'import/no-extraneous-dependencies': 0,
    camelcase: 0,

    // ts ONLY
    // js and ts
    'brace-style': 0,
    'comma-spacing': 0,
    'dot-notation': 0,
    'func-call-spacing': 0,
    indent: 0,
    'keyword-spacing': 0,
    'lines-between-class-members': 0,
    'no-array-constructor': 0,
    'no-dupe-class-members': 0,
    'no-empty-function': 0,
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-implied-eval': 0,
    'no-magic-numbers': 0,
    'no-throw-literal': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-constructor': 0,
    quotes: 0,
    semi: ['error', 'always'],
    'space-before-function-paren': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
