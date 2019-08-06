let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck);
};
const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
    watchOptions: {},
  }

  on('file:preprocessor', webpack(options))
}
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

require('@applitools/eyes-cypress')(module);
