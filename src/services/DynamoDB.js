'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4569');
  return new AWS.DynamoDB({ endpoint: ep });
};
