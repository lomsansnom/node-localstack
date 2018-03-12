'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4568');
  return new AWS.Kinesis({ endpoint: ep });
};
