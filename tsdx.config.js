const postcss = require('rollup-plugin-postcss');
const url = require("postcss-url")
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        minimize: true,
        use: {
          less: { javascriptEnabled: true }
        },
        extract: true,
        plugins: [url({
          url: 'inline'
        })]
      })
    );
    return config;
  },
};