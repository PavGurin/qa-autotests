const webpack = require('@cypress/webpack-preprocessor');
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
    watchOptions: {},
  };

  addMatchImageSnapshotPlugin(on, config);

  on('file:preprocessor', webpack(options))
};


