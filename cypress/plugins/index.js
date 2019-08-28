const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin')
const webpack = require('@cypress/webpack-preprocessor')
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
    watchOptions: {},
  }

  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--disable-dev-shm-usage')

      return args
    }

    return args
  })

  addMatchImageSnapshotPlugin(on, config)
  getCompareSnapshotsPlugin(on)

  on('file:preprocessor', webpack(options))
}

