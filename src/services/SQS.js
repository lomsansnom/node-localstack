'use strict';

import AWS from 'aws-sdk';

export default endpoint => class SQS extends AWS.SQS {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4576');
      options.endpoint = ep;
    }
    super(options);
  }
};
