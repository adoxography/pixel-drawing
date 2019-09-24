'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development' || environment === 'testing') {
  module.exports = require('./config/webpack.config.dev');
} else {
  module.exports = require('./config/webpack.config.prod');
}
