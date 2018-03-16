'use strict';

import AWS from 'aws-sdk';

export default endpoint => class CloudWatch extends AWS.CloudWatch {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4582');
      options.endpoint = ep;
    }
    super(options);
  }
};
