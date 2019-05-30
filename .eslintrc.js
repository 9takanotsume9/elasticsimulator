module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jquery: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx']  }],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': false
    }],
  },
};
