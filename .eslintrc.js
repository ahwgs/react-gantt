module.exports = {
  extends: '@osdoc-dev/eslint-config-preset-react',
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 0,
  },
}
