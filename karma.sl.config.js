/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const slSettings = require('@advanced-rest-client/testing-karma-sl/sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  const sauceLabs = {
    testName: 'uuid-generator',
    startConnect: true
  };
  if (process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.startConnect = false;
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  }
  config.set(
    merge(slSettings(config), createBaseConfig(config), {
      sauceLabs
    })
  );

  return config;
};
