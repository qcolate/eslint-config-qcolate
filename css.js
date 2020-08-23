// yarn add -D eslint-plugin-css-modules

module.exports = {
  extends: ['plugin:css-modules/recommended'],
  plugins: ['css-modules'],
  rules: {
    'css-modules/no-unused-class': 0,
  },
};
