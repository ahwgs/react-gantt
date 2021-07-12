module.exports = {
  extends: '@osdoc-dev/eslint-config-preset-react',
  env: {
    node: true,
    jest: true,
  },
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
  },
}
