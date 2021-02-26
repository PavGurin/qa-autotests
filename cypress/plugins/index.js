
module.exports = (on, config) => {
  // eslint-disable-next-line no-undef
  on("file:preprocessor", webpackPreprocessor);
  // eslint-disable-next-line no-undef
  allureWriter(on, config);

  return config;
};

const { initPlugin } = require("cypress-plugin-snapshots/plugin");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../../webpack.config.js"),
    watchOptions: {},
  };

  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.family === "chromium" && browser.name !== "electron") {
      // pass launchOptions to Chromium-based browsers in 4.0
      return launchOptions;
    }
  });
  addMatchImageSnapshotPlugin(on, config);

  on("file:preprocessor", webpack(options));

  allureWriter(on, config);

  initPlugin(on, config);

  return config;
};

