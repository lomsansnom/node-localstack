'use strict';

import AWS from 'aws-sdk';

export default endpoint => class DynamoDB extends AWS.DynamoDB {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4569');
      options.endpoint = ep;
    }
    super(options);
  }
};
