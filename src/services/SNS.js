'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4575');
  return new AWS.SNS({ endpoint: ep });
};
