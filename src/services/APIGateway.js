'use strict';

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4567');
  return new AWS.APIGateway({ endpoint: ep });
};
