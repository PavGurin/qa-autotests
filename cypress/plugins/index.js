const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
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
  getCompareSnapshotsPlugin(on);

  on('file:preprocessor', webpack(options))
};


