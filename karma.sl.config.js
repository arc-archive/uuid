/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const slSettings = require('@advanced-rest-client/testing-karma-sl/sl-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = (config) => {
  config.set(
    merge(slSettings(config), createBaseConfig(config), {
      sauceLabs: {
        testName: 'uuid-generator',
        startConnect: true
      },
    })
  );

  return config;
};
