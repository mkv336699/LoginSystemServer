// import * as _ from 'lodash';
// import dotenv from 'dotenv/config';
// import config from './env/defaults';
const _ = require('lodash');
const dotenv = require('dotenv/config');
const config = require('./env/default');

let localConfig;
try {
    localConfig = require(`./env/${config.env}`);
    localConfig = localConfig || {};
    console.log('Local config loaded...',  localConfig);
} catch (err) {
    console.log('Invalid or no environment specified. Loading default(development) environment...');
    localConfig = {};
}

/** Merge localConfig with default config (Overides default config) */
_.merge(config, localConfig);
// console.log('Final config:-', config);

module.exports = config;
