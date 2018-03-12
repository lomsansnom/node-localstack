'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4576');
  return new AWS.SQS({ endpoint: ep });
};
