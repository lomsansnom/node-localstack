'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4581');
  return new AWS.CloudFormation({ endpoint: ep });
};
