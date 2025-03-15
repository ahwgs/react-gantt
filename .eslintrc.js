module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  parser: '@typescript-eslint/parser',
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'jsx-quotes': 0,
    'unicorn/consistent-destructuring': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 0,
    'comma-dangle': 0,
    'unicorn/filename-case': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unicorn/no-null': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'unicorn/prevent-abbreviations': 0,
    'class-methods-use-this': 0,
    'brace-style': 0,
    'unicorn/no-array-reduce': 0,
    'operator-linebreak': 0,
    'arrow-parens': 0,
    '@typescript-eslint/no-redeclare': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-namespace': 0,
    'space-before-function-paren': 0,
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'unicorn/no-new-array': 'off',
    'react/no-deprecated': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
};
