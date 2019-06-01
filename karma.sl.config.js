/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const slSettings = require('@advanced-rest-client/testing-karma-sl/sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  config.set(
    merge(slSettings(config), createBaseConfig(config), {
      sauceLabs: {
        testName: 'uuid-generator',
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
        // username: process.env.SAUCE_USERNAME,
        // accessKey: process.env.SAUCE_ACCESS_KEY,
        startConnect: false
      },
    })
  );

  return config;
};
