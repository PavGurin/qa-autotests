const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
    watchOptions: {},
  }

  on('file:preprocessor', webpack(options))
}