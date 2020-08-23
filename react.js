module.exports = {
  extends: ['airbnb', './_shared.js'],
  plugins: ['react', 'react-hooks'],
  rules: {
    // 'react/forbid-prop-types': 0,
    'react/style-prop-object': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/sort-comp': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    //
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
  },
};
