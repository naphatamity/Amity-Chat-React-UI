module.exports = {
  parser: 'babel-eslint',
  extends: ['eko/react'],

  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/no-named-as-default': 'off',
    // TODO: Enable when existing cycle fixed (work is already in progress)
    'import/no-cycle': 'off',
    // Adjust airbnb rule to support UNSAFE_
    // camelcase: ['error', { properties: 'never' }],
    camelcase: ['error', { properties: 'never', allow: ['^UNSAFE_'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    jest: true,
  },
};
