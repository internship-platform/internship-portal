const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'require-yield': 0,
  },
};
