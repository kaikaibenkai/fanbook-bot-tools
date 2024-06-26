/* eslint-disable quote-props */

const process = require('process');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: 'love',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'promise/param-names': [0],
    'no-return-assign': [0],
    'semi': [2, 'always'],
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/object-curly-spacing': [2, 'always'],
    '@typescript-eslint/member-delimiter-style': [2, {
      'multiline': { 'delimiter': 'semi', 'requireLast': true },
      'singleline': { 'delimiter': 'semi', 'requireLast': true },
    }],
    '@typescript-eslint/naming-convention': [0],
    '@typescript-eslint/no-confusing-void-expression': [0],
    '@typescript-eslint/no-debugger': production ? [2] : [0],
    '@typescript-eslint/no-floating-promises': [0],
    '@typescript-eslint/promise-function-async': [0],
    '@typescript-eslint/quotes': [2, 'single'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': [2, 'never'],
    '@typescript-eslint/strict-boolean-expressions': [0],
  }
};
