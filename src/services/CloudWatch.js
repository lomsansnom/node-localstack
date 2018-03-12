'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4582');
  return new AWS.CloudWatch({ endpoint: ep });
};
