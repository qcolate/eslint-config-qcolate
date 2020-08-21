module.exports = {
  extends: ['airbnb', 'plugin:css-modules/recommended'],
  plugins: ['react', 'react-hooks', 'css-modules'],
  rules: {
    // 'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/sort-comp': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    //
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    //
    'css-modules/no-unused-class': 0,
  },
};
