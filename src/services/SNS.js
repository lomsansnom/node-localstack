'use strict';

import AWS from 'aws-sdk';

export default endpoint => class SNS extends AWS.SNS {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4575');
      options.endpoint = ep;
    }
    super(options);
  }
};
