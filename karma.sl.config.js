/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const slSettings = require('@advanced-rest-client/testing-karma-sl/sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  const sauceLabs = {
    testName: 'uuid-generator',
    // startConnect: true
  };
  if (process.env.TRAVIS) {
    const buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';

    config.browserStack.build = buildLabel;
    // config.browserStack.startTunnel = false;
    config.browserStack.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

    config.sauceLabs.build = buildLabel;
    // config.sauceLabs.startConnect = false;
    config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    config.sauceLabs.recordScreenshots = true;

    // Try 'websocket' for a faster transmission first. Fallback to 'polling' if necessary.
    config.transports = ['websocket', 'polling'];
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  }
  config.set(
    merge(slSettings(config), createBaseConfig(config), {
      sauceLabs
    })
  );

  return config;
};
