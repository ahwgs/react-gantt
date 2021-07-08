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
  },
}
