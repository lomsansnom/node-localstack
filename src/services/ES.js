'use strict';

// Local elasticSearch 4571

const AWS = require('aws-sdk');

module.exports = (endpoint) => {
  const ep = new AWS.Endpoint(endpoint || 'http://localhost:4578');
  return new AWS.ES({ endpoint: ep });
};
